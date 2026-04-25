# Museum360 Nusantara — Museum Mpu Tantular

A modern Vite + React + TypeScript website for a glassmorphism 360° virtual tour of **Museum Mpu Tantular** in Sidoarjo, East Java.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## What is wired in

- 23 optimized 360° panorama scenes from:
  `/home/vascosera/Downloads/Foto Mpu Tantular-20260425T001558Z-3-001/Foto Mpu Tantular`
- Web panoramas are stored in `public/panoramas/mpu-tantular/`.
- Route thumbnails are stored in `public/images/mpu-tantular/`.
- Scene metadata is in `src/data/museums.ts`.

## Notes

The `.HEIC` files in the source folder were not imported because the browser/app pipeline needs web-compatible image formats. The 8000×4000 `.jpg` panoramas were resized to 4096×2048 for web performance while preserving 2:1 equirectangular format for the 360 viewer.
