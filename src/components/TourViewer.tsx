import type { Viewer as PhotoSphereViewer } from '@photo-sphere-viewer/core';
import { Maximize2, MousePointer2, Volume2, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Museum } from '../data/museums';

type TourViewerProps = {
  museum: Museum;
};

export function TourViewer({ museum }: TourViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [viewerError, setViewerError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !museum.panorama) {
      setViewerReady(false);
      return undefined;
    }

    setViewerReady(false);
    setViewerError(null);

    let viewer: PhotoSphereViewer | undefined;
    let cancelled = false;

    const readyTimer = window.setTimeout(() => setViewerReady(true), 650);
    const failTimer = window.setTimeout(() => {
      if (!containerRef.current?.querySelector('canvas')) {
        setViewerError('The panorama could not be rendered. Add a JPG/WebP equirectangular image for production use.');
      }
    }, 3200);

    void (async () => {
      await import('@photo-sphere-viewer/core/index.css');
      const { Viewer } = await import('@photo-sphere-viewer/core');

      if (cancelled || !containerRef.current) {
        return;
      }

      viewer = new Viewer({
        container: containerRef.current,
        panorama: museum.panorama,
        caption: museum.name,
        description: museum.description,
        defaultZoomLvl: 42,
        minFov: 35,
        maxFov: 95,
        mousewheelCtrlKey: true,
        touchmoveTwoFingers: true,
        navbar: ['zoom', 'move', 'caption', 'fullscreen'],
        loadingTxt: `Loading ${museum.name}`,
      });
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(readyTimer);
      window.clearTimeout(failTimer);
      viewer?.destroy();
    };
  }, [museum]);

  return (
    <div className="viewer-frame glass-panel">
      <div className="viewer-toolbar" aria-label="Tour viewer tools">
        <span><MousePointer2 size={16} /> Click and drag to look around</span>
        <span>{viewerReady ? 'Live 360° scene' : 'Preparing scene'}</span>
      </div>
      <div ref={containerRef} className="panorama-container" aria-label={`360 panorama viewer for ${museum.name}`} />
      {viewerError ? (
        <div className="viewer-empty" role="status">
          <strong>Panorama fallback</strong>
          <p>{viewerError}</p>
        </div>
      ) : null}
      <div className="viewer-controls" aria-hidden="true">
        <span><ZoomIn size={18} /> Zoom In</span>
        <span><ZoomOut size={18} /> Zoom Out</span>
        <span><Maximize2 size={18} /> Fullscreen</span>
        <span><Volume2 size={18} /> Audio / Guide</span>
      </div>
    </div>
  );
}
