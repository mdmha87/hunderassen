(() => {
  "use strict";

  const RASSEN = window.RASSEN;
  for (const r of RASSEN) r.bilder = (window.BILDER || {})[r.id] || r.bilder || [];
  const GRUPPEN = window.FCI_GRUPPEN;
  const BY_ID = Object.fromEntries(RASSEN.map(r => [r.id, r]));

  const STUFEN = [
    { value: 1, label: "Basis" },
    { value: 2, label: "Fortgeschr." },
    { value: 3, label: "Experte" }
  ];
  const HINTS = {
    leicht: "Die falschen Antworten sehen ganz anders aus.",
    mittel: "Zufällige Rassen als Antworten.",
    schwer: "Ähnlich aussehende Rassen als Antworten."
  };
  const GROESSE = { klein: "klein", mittel: "mittelgroß", gross: "groß", "sehr-gross": "sehr groß" };
  const MAX_BOX = 5;
  const AUTONEXT_MS = 1800;

  // ---------- Speicher (nur lokal auf dem Gerät) ----------
  const STORE_KEY = "hunderassen.v1";
  const store = load();

  function load() {
    const fallback = { settings: { stufe: 1, schwierigkeit: "mittel", runde: 10 }, progress: {} };
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return fallback;
      const data = JSON.parse(raw);
      return { settings: { ...fallback.settings, ...data.settings }, progress: data.progress || {} };
    } catch {
      return fallback;
    }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch { /* z. B. privater Modus */ }
  }
  function prog(id) {
    return store.progress[id] || { box: 0, seen: 0, correct: 0 };
  }

  // ---------- Hilfen ----------
  const $ = id => document.getElementById(id);
  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const el = (tag, { dataset, ...props } = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), props);
    if (dataset) Object.assign(node.dataset, dataset);
    node.append(...children);
    return node;
  };

  function imgSrc(rasse, bild) {
    return bild ? `img/rassen/${rasse.id}/${bild.datei}` : placeholder();
  }
  function placeholder() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="#e6dccf"/>
      <text x="200" y="150" font-size="72" text-anchor="middle">🐕</text>
      <text x="200" y="200" font-size="18" text-anchor="middle" fill="#7a6a5c" font-family="sans-serif">Bild folgt</text></svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function credit(bild) {
    if (!bild) return "";
    return `Foto: ${bild.autor} · ${bild.lizenz} · ${bild.quelle}`;
  }

  function pool() {
    return RASSEN.filter(r => r.stufe <= store.settings.stufe);
  }

  function showScreen(name) {
    document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === "screen-" + name));
    window.scrollTo(0, 0);
  }

  // ---------- Startbildschirm ----------
  function renderSettings() {
    const segStufe = $("opt-stufe");
    segStufe.replaceChildren(...STUFEN.map(s => {
      const count = RASSEN.filter(r => r.stufe <= s.value).length;
      const hasOwn = RASSEN.some(r => r.stufe === s.value);
      return el("button", { type: "button", disabled: !hasOwn, dataset: { value: s.value } },
        [s.label, el("small", { textContent: hasOwn ? `${count} Rassen` : "bald" })]);
    }));
    markSeg("opt-stufe", store.settings.stufe);
    markSeg("opt-schwierigkeit", store.settings.schwierigkeit);
    markSeg("opt-runde", store.settings.runde);
    $("hint-schwierigkeit").textContent = HINTS[store.settings.schwierigkeit];
  }
  function markSeg(id, value) {
    $(id).querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.value === String(value)));
  }
  function bindSeg(id, key, parse = v => v) {
    $(id).addEventListener("click", e => {
      const b = e.target.closest("button");
      if (!b || b.disabled) return;
      store.settings[key] = parse(b.dataset.value);
      save();
      renderSettings();
    });
  }

  // ---------- Fragen auswählen ----------
  // Karteikasten: Rassen mit niedriger Box kommen häufiger dran, ungesehene ebenfalls.
  const BOX_WEIGHT = [8, 5, 3, 2, 1, 1];
  function nextBreed(candidates, recent) {
    const avail = candidates.filter(r => !recent.includes(r.id));
    const list = avail.length ? avail : candidates;
    const weights = list.map(r => {
      const p = store.progress[r.id];
      return p ? BOX_WEIGHT[p.box] : 6;
    });
    let x = Math.random() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < list.length; i++) {
      x -= weights[i];
      if (x <= 0) return list[i];
    }
    return list[list.length - 1];
  }

  function distractors(target, candidates, level) {
    const others = candidates.filter(r => r.id !== target.id);
    let tiers;
    if (level === "leicht") {
      tiers = [
        others.filter(r => r.fci !== target.fci && r.groesse !== target.groesse),
        others.filter(r => r.fci !== target.fci),
        others
      ];
    } else if (level === "schwer") {
      const look = target.verwechslung.map(id => BY_ID[id]).filter(r => r && others.includes(r));
      tiers = [
        look,
        others.filter(r => r.fci === target.fci && r.groesse === target.groesse),
        others.filter(r => r.fci === target.fci || r.groesse === target.groesse),
        others
      ];
    } else {
      tiers = [others];
    }
    const chosen = [];
    for (const tier of tiers) {
      for (const r of shuffle(tier)) {
        if (chosen.length === 3) break;
        if (!chosen.includes(r)) chosen.push(r);
      }
    }
    return chosen;
  }

  // ---------- Quiz ----------
  let round = null;
  let autoTimer = null;

  function startRound() {
    const candidates = pool();
    round = {
      candidates,
      total: store.settings.runde,
      index: 0,
      score: 0,
      done: 0,
      wrong: [],
      recent: [],
      current: null,
      answered: false
    };
    showScreen("quiz");
    nextQuestion();
  }

  function nextQuestion() {
    clearTimeout(autoTimer);
    if (round.total && round.index >= round.total) return endRound();

    const target = nextBreed(round.candidates, round.recent);
    round.recent = [target.id, ...round.recent].slice(0, Math.min(5, Math.floor(round.candidates.length / 2)));
    const bild = target.bilder.length ? pick(target.bilder) : null;
    const options = shuffle([target, ...distractors(target, round.candidates, store.settings.schwierigkeit)]);
    round.current = { target, bild, options };
    round.answered = false;
    round.index++;

    $("counter").textContent = round.total ? `${round.index}/${round.total}` : `${round.score}/${round.index - 1}`;
    $("progress-bar").style.width = round.total ? `${((round.index - 1) / round.total) * 100}%` : "0";
    $("photo").classList.remove("revealed");
    $("photo-img").src = imgSrc(target, bild);
    $("photo-credit").textContent = credit(bild);
    $("feedback").hidden = true;
    $("autonext").classList.remove("run");

    $("answers").replaceChildren(...options.map(r =>
      el("button", { type: "button", className: "answer", textContent: r.name, onclick: () => answer(r) })
    ));
  }

  function answer(choice) {
    if (round.answered) return;
    round.answered = true;
    const { target } = round.current;
    const ok = choice.id === target.id;

    const p = prog(target.id);
    p.seen++;
    round.done++;
    if (ok) { p.correct++; p.box = Math.min(MAX_BOX, p.box + 1); round.score++; }
    else { p.box = 0; if (!round.wrong.includes(target)) round.wrong.push(target); }
    store.progress[target.id] = p;
    save();

    $("answers").querySelectorAll(".answer").forEach((b, i) => {
      const r = round.current.options[i];
      b.disabled = true;
      if (r.id === target.id) b.classList.add("correct");
      else if (r.id === choice.id) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    const fb = $("feedback-text");
    fb.className = "feedback-text " + (ok ? "ok" : "bad");
    fb.textContent = ok ? `✓ Richtig – ${target.name}` : `✗ Richtig wäre: ${target.name}`;
    $("photo").classList.add("revealed");
    $("feedback").hidden = false;
    $("counter").textContent = round.total ? `${round.index}/${round.total}` : `${round.score}/${round.index}`;
    $("progress-bar").style.width = round.total ? `${(round.index / round.total) * 100}%` : "0";

    if (ok) {
      const bar = $("autonext");
      bar.style.setProperty("--autonext-ms", AUTONEXT_MS + "ms");
      requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add("run")));
      autoTimer = setTimeout(nextQuestion, AUTONEXT_MS);
    }
  }

  function stopAuto() {
    clearTimeout(autoTimer);
    $("autonext").classList.remove("run");
  }

  function endRound() {
    const answered = round.done;
    const pct = answered ? round.score / answered : 0;
    $("end-emoji").textContent = pct >= .9 ? "🏆" : pct >= .7 ? "🎉" : pct >= .5 ? "👍" : "🐾";
    $("end-title").textContent = pct >= .9 ? "Hervorragend!" : pct >= .7 ? "Gut gemacht!" : pct >= .5 ? "Nicht schlecht!" : "Übung macht den Meister";
    $("end-score").textContent = `${round.score} von ${answered} richtig`;
    $("end-wrong-card").hidden = round.wrong.length === 0;
    $("end-wrong").replaceChildren(...round.wrong.map(breedRow));
    showScreen("end");
  }

  // ---------- Listen & Infobox ----------
  function breedRow(r) {
    const p = prog(r.id);
    const level = el("div", { className: "level" },
      Array.from({ length: MAX_BOX }, (_, i) => el("span", { className: i < p.box ? "on" : "" })));
    return el("li", { onclick: () => openInfo(r) }, [
      el("img", { className: "thumb", src: imgSrc(r, r.bilder[0]), alt: "", loading: "lazy" }),
      el("span", { className: "name", textContent: r.name }),
      level
    ]);
  }

  function renderStats() {
    const list = pool();
    const learned = list.filter(r => prog(r.id).box >= 3).length;
    const unsure = list.filter(r => { const p = prog(r.id); return p.seen > 0 && p.box < 3; }).length;
    const unseen = list.filter(r => prog(r.id).seen === 0).length;
    $("stats-summary").replaceChildren(
      el("div", {}, [el("b", { textContent: learned }), el("small", { textContent: "sicher" })]),
      el("div", {}, [el("b", { textContent: unsure }), el("small", { textContent: "unsicher" })]),
      el("div", {}, [el("b", { textContent: unseen }), el("small", { textContent: "neu" })])
    );
    const sorted = list.slice().sort((a, b) => prog(a.id).box - prog(b.id).box || a.name.localeCompare(b.name, "de"));
    $("stats-list").replaceChildren(...sorted.map(breedRow));
  }

  function openInfo(r) {
    $("info-name").textContent = r.name;
    $("info-gallery").replaceChildren(...r.bilder.map(b => el("img", { src: imgSrc(r, b), alt: r.name, loading: "lazy" })));
    $("info-chips").replaceChildren(
      el("span", { className: "chip", textContent: "📍 " + r.herkunft }),
      el("span", { className: "chip", textContent: `FCI ${r.fci}: ${GRUPPEN[r.fci]}` }),
      el("span", { className: "chip", textContent: "📏 " + GROESSE[r.groesse] })
    );
    $("info-facts").replaceChildren(...r.info.map(s => el("li", { textContent: s })));
    const look = r.verwechslung.map(id => BY_ID[id]).filter(Boolean).map(x => x.name);
    $("info-lookalikes").textContent = look.length ? "Verwechslungsgefahr mit: " + look.join(", ") : "";
    $("info-link").href = r.link;
    $("info-credits").textContent = r.bilder.map(credit).join(" | ");
    $("info-dialog").showModal();
  }

  // ---------- Events ----------
  bindSeg("opt-stufe", "stufe", Number);
  bindSeg("opt-schwierigkeit", "schwierigkeit");
  bindSeg("opt-runde", "runde", Number);

  $("btn-start").onclick = startRound;
  $("btn-again").onclick = startRound;
  $("btn-home").onclick = () => { renderSettings(); showScreen("start"); };
  $("btn-stats").onclick = () => { renderStats(); showScreen("stats"); };
  $("btn-stats-back").onclick = () => showScreen("start");
  $("btn-quit").onclick = () => {
    stopAuto();
    if (round.done) endRound(); else showScreen("start");
  };
  $("btn-next").onclick = nextQuestion;
  $("btn-info").onclick = () => { stopAuto(); openInfo(round.current.target); };
  $("btn-info-close").onclick = () => $("info-dialog").close();
  $("info-dialog").addEventListener("click", e => { if (e.target === e.currentTarget) e.currentTarget.close(); });
  $("btn-reset").onclick = () => {
    if (!confirm("Gesamten Lernfortschritt auf diesem Gerät löschen?")) return;
    store.progress = {};
    save();
    renderStats();
  };

  renderSettings();

  // Offline-Cache nur in der veröffentlichten Version, lokal würde er beim Entwickeln alte Dateien ausliefern.
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
