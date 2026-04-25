# Panorama Asset Contract

Place real 360° panorama files in `public/panoramas/`.

Recommended formats:

- `.jpg` or `.webp`
- Equirectangular 2:1 ratio, for example `4096x2048`
- Optimized for web delivery

Then update `src/data/museums.ts` so the museum scene `panorama` points to the file path, for example:

```ts
panorama: '/panoramas/museum-nasional-main.jpg'
```

This project ships with a lightweight generated SVG demo panorama so the tour section can run even before real assets are added.
