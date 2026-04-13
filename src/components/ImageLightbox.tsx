import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

type ImageLightboxProps = {
  src: string;
  alt: string;
  label: string;
  children: React.ReactNode;
};

const ImageLightbox = ({ src, alt, label, children }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full text-left cursor-zoom-in"
        aria-label={label}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 p-4 sm:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center bg-white text-brand-black shadow-lg transition-transform hover:scale-105"
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <div className="flex h-full items-center justify-center">
            <OptimizedImage
              src={src}
              alt={alt}
              className="max-h-[88vh] max-w-full object-contain shadow-2xl"
              priority
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
