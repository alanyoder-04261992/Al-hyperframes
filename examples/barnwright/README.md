# Barnwright Software motion samples

Two original 15-second, silent, 1920×1080, 30 fps samples: an assembling shed illustration and a typography-only brand piece.
The shed is an illustration, not a capture of the actual designer. This is a new
composition; it does not import the earlier source ZIP or its assets.

## Render on GitHub (no Netlify needed)

1. Review and merge this draft PR when ready. A manually triggered workflow must
   exist on the default branch before GitHub offers its **Run workflow** button.
2. Open **Actions → Render Barnwright samples → Run workflow** and select the
   reviewed branch. If Actions is disabled for this fork, enable it yourself only
   after reviewing the inherited workflows and your account's Actions limits.
3. Open the completed run. Under **Artifacts**, download **barnwright-mp4**, unzip
   it, and play `barnwright-shed.mp4` and `barnwright-typography.mp4`. You must be signed in to download artifacts.
   The artifact expires after seven days.

The new workflow runs only when manually requested. It uses a standard GitHub
Ubuntu runner, read-only repository permissions, no secrets, a 20-minute timeout,
and actions pinned to commit SHAs. Account Actions usage/storage limits still
apply. Existing inherited workflows are not changed by this sample.

## Local use

Requires Node.js 22+, FFmpeg, and Chrome runtime libraries.

```sh
cd examples/barnwright
npm ci --ignore-scripts
npm run prepare-assets
npx --no-install hyperframes browser ensure
npm run check
npm run preview
# After reviewing the preview:
npm run render
```

All render-time animation assets are local after `prepare-assets`; it copies GSAP
from the locked npm package, which retains its licensing information in
`node_modules/gsap`. HyperFrames is pinned to 0.8.140. No paid hosted-render API is
used. System sans-serif fonts may vary across operating systems.

## Validation status

The MP4s have not been rendered during PR preparation. Browser validation and
encoding must pass in the manually requested workflow. Static checks alone are
not visual QA; review the downloaded MP4 before using it publicly.
