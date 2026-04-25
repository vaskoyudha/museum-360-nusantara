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
        setViewerError('Panorama tidak dapat ditampilkan. Tambahkan gambar equirectangular JPG/WebP untuk penggunaan produksi.');
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
        loadingTxt: `Memuat ${museum.name}`,
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
      <div className="viewer-toolbar" aria-label="Alat viewer tur">
        <span><MousePointer2 size={16} /> Klik dan geser untuk melihat sekitar</span>
        <span>{viewerReady ? 'Scene 360° aktif' : 'Menyiapkan scene'}</span>
      </div>
      <div ref={containerRef} className="panorama-container" aria-label={`Viewer panorama 360 untuk ${museum.name}`} />
      {viewerError ? (
        <div className="viewer-empty" role="status">
          <strong>Fallback panorama</strong>
          <p>{viewerError}</p>
        </div>
      ) : null}
      <div className="viewer-controls" aria-hidden="true">
        <span><ZoomIn size={18} /> Perbesar</span>
        <span><ZoomOut size={18} /> Perkecil</span>
        <span><Maximize2 size={18} /> Layar Penuh</span>
        <span><Volume2 size={18} /> Audio / Panduan</span>
      </div>
    </div>
  );
}
