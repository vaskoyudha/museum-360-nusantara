# Image-first Design Analysis

Design references were generated before implementation and stored in `docs/design-references/`.

## Extracted system

- **Palette:** warm ivory background, smoked umber glass, bronze/amber accents, charcoal text, soft museum-stone neutrals.
- **Typography:** refined grotesk for UI and display sections with occasional editorial serif-like scale for culture/story moments. Large headings use generous line height and strong contrast.
- **Glassmorphism:** translucent rounded panels with white hairline borders, backdrop blur, amber separators, and restrained shadows.
- **Spacing:** generous gutters, large section padding, calm rhythm, no dense card spam.
- **Buttons:** pill/rounded-rectangle buttons; primary amber fill, secondary transparent glass with border; icon + label where useful.
- **Components:** layered image frames, bento museum cards, oversized metric strip, 360 viewer control rail, visit-planning glass cards.
- **Motion language:** cinematic fade-through, subtle parallax drift, float-up sections. Reduced-motion users should not receive large transforms.

## Section mapping

1. Hero: full-bleed museum atmosphere, large frosted text panel, top glass nav, clear 360 CTA.
2. Featured museums: editorial heading with four large bento glass cards and framed media blocks.
3. Tour viewer: bright ivory control interface, central rounded panorama frame, scene selector and current-scene panel.
4. Audience benefits: airy editorial composition, four audience cards, oversized metrics strip.
5. Heritage gallery / visit: bento image cards paired with visit-planning card and final CTA/footer.

## Implementation notes

The code should preserve the references' calm premium feel rather than adding noisy futuristic effects. Where real media is absent, use generated CSS/SVG museum atmospheres and document drop-in replacement paths.
