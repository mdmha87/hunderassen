# Baut pro Rasse ein nummeriertes Übersichtsbild (Kontaktabzug) aus den Vorschaubildern.
# Aufruf: powershell -File tools/sheet.ps1 [id ...]   Ausgabe: tools/out/sheets/<id>.jpg
param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Ids)
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$thumbs = Join-Path $root "tools/out/thumbs"
$sheets = Join-Path $root "tools/out/sheets"
New-Item -ItemType Directory -Force $sheets | Out-Null
if (-not $Ids) { $Ids = Get-ChildItem $thumbs -Directory | ForEach-Object Name }

$cw = 300; $ch = 225; $cols = 4
$font = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold)
foreach ($id in $Ids) {
  $files = Get-ChildItem (Join-Path $thumbs $id) -Filter *.jpg | Sort-Object { [int]$_.BaseName }
  if (-not $files) { continue }
  $rows = [math]::Ceiling($files.Count / $cols)
  $bmp = New-Object System.Drawing.Bitmap ($cw * $cols), ($ch * $rows)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::Black)
  $g.InterpolationMode = 'HighQualityBicubic'
  $i = 0
  foreach ($f in $files) {
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    $x = ($i % $cols) * $cw; $y = [math]::Floor($i / $cols) * $ch
    $scale = [math]::Min(($cw - 4) / $img.Width, ($ch - 4) / $img.Height)
    $w = $img.Width * $scale; $h = $img.Height * $scale
    $g.DrawImage($img, [single]($x + ($cw - $w) / 2), [single]($y + ($ch - $h) / 2), [single]$w, [single]$h)
    $g.FillRectangle([System.Drawing.Brushes]::Yellow, $x + 2, $y + 2, 40, 34)
    $g.DrawString($f.BaseName, $font, [System.Drawing.Brushes]::Black, $x + 3, $y + 2)
    $img.Dispose(); $i++
  }
  $bmp.Save((Join-Path $sheets "$id.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
  $g.Dispose(); $bmp.Dispose()
}
