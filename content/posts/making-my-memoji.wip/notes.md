take the video in messages - send to yourself
copy video from messages on mac

cut to length
FCP - export as image sequence - imovie doesnt work

```bash ZSH
ffmpeg -framerate 60 -i /Users/reuben/Developer/next/reu-test/public/fcp/me-cut/frame-%06d.tiff -c:v libvpx-vp9 -pix_fmt yuva420p -speed 0 -crf 16 -an /Users/reuben/Developer/next/reu-test/public/me-cut.webm
ffmpeg -framerate 60 -i /Users/reuben/Developer/next/reu-test/public/fcp/me-cut/frame-%06d.tiff -c:v libvpx-vp9 -pix_fmt yuva420p -speed 0 -lossless 1 -an /Users/reuben/Developer/next/reu-test/public/me-cut.webm
```


chrome too laggy lowered FPS lowered CRF, no difference - maybe as codecs' efficiency relies on the compression being done in a forwards direction frame after frame only (there was more lag moving backwards)
safari fine - h265 better????

tried vp8 - no difference
https://stackoverflow.com/questions/31196113/draw-video-frame-by-frame-on-html5-canvas-and-control-with-slider


better to use image sequence tiff didnt work png better


wrote swift tool uPVC

https://stackoverflow.com/a/39573702

65.4MB in
reduce number of frames by 3 - nodejs script (redid swift tho)
imageoptim - reduce by..... 47% not helped by fact png doesnt enocde high fidelity well - need alpha channel tho.....led to webp

didnt go for avif as support is shite
webp - reduce by..... lossless=4.6MB; near-lossless60=3.6MB near-lossless0=3.3MB q100=2.2MB q90=1.3MB q80=868KB q50=868KB ALSO
https://developers.google.com/speed/webp/docs/cwebp
1.3272171254% of input = 98.6727828746% reduction

less when gzipped????

```bash ZSH
for file in *.png; do cwebp -lossless -mt './$file' -o './${file//\.png/.webp}'; done
for file in *.png; do cwebp -near_lossless 60 -mt './$file' -o './${file//\.png/.webp}'; done
for file in *.png; do cwebp -q 80 -mt './$file' -o './${file//\.png/.webp}'; done
for file in *.png; do cwebp -q 80 -mt -crop 100 26 459 350 './$file' -o './${file//\.png/.webp}'; done
```


webp is based off VP8 so basically gone full circle to the (very close) to VP9 of the first attempt

animated webp exists but isn't obvious way to seek through - probably has same encoding issues as VP8 itself


talk about react components
loading / ready
animation

wanted to change on click but impossible to sync frames - AE and motion track sunglasses on etc...