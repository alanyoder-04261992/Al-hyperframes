# Shed listing video — test sample

A 20-second, silent, 1080×1080, 30 fps social clip for one building on a dealer's
lot: the shed draws itself, the feature labels light up the doors and window, the
price counts up, and it ends on a call to action.

The shed is an illustration, and the size, price, dealer name and phone number are
placeholders. Change them in `index.html` before using the clip anywhere public.

## Render locally

Requires Node.js 22+, FFmpeg, and Chrome runtime libraries.

```sh
cd examples/shed-listing
npm ci --ignore-scripts
npm run prepare-assets
npx --no-install hyperframes browser ensure
npm run check
npm run render   # writes renders/shed-listing.mp4
```

HyperFrames is pinned to 0.8.140 and GSAP is copied from the locked npm package, so
nothing is fetched at render time.
