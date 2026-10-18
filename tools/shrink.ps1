# Verkleinert alle Bilder unter img/rassen auf höchstens 800 px Breite (JPEG, Qualität 80).
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq "image/jpeg"
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]80)
$maxW = 800

Get-ChildItem (Join-Path $root "img/rassen") -Recurse -Filter *.jpg | ForEach-Object {
  $src = [System.Drawing.Image]::FromFile($_.FullName)
  if ($src.Width -le $maxW -and $_.Length -lt 150KB) { $src.Dispose(); return }
  $w = [math]::Min($maxW, $src.Width); $h = [int]($src.Height * $w / $src.Width)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.DrawImage($src, 0, 0, $w, $h)
  $src.Dispose(); $g.Dispose()
  $bmp.Save($_.FullName, $codec, $params)
  $bmp.Dispose()
}
