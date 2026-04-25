# Panorama Asset Contract

The site now uses the supplied Museum Mpu Tantular panorama folder:

`/home/vascosera/Downloads/Foto Mpu Tantular-20260425T001558Z-3-001/Foto Mpu Tantular`

## Imported assets

- 23 source `.jpg` panoramas were detected at `8000x4000`.
- They were optimized into web-ready `4096x2048` equirectangular scenes in `public/panoramas/mpu-tantular/`.
- Matching thumbnails were generated in `public/images/mpu-tantular/`.
- Metadata and labels live in `src/data/museums.ts`.

## Adding or replacing scenes

1. Add web-compatible equirectangular images to `public/panoramas/mpu-tantular/`.
2. Add matching thumbnails to `public/images/mpu-tantular/`.
3. Update `src/data/museums.ts` with the scene label, `panorama`, and `image` path.

Recommended panorama format:

- `.jpg` or `.webp`
- 2:1 equirectangular ratio, for example `4096x2048`
- Optimized for web delivery

## HEIC note

The `Foto Kalila/*.HEIC` files were not imported because the current browser/Vite viewer path expects web-compatible image formats. Convert selected HEIC images to JPG/WebP before adding them to the site.
