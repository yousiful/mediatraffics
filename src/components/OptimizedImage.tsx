import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  title?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes,
  srcSet,
  objectFit = 'cover',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  title,
  fetchPriority = 'auto'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageTitle = title || alt;

  const shouldShowPlaceholder = placeholder === 'blur' && !isLoaded && !hasError;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto'
      }}
    >
      {shouldShowPlaceholder && blurDataURL && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full blur-xl scale-110 transition-opacity duration-300"
          style={{ objectFit }}
        />
      )}

      {hasError ? (
        <div
          className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400"
          role="img"
          aria-label={alt}
        >
          <span className="text-sm">Image failed to load</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={isInView ? src : undefined}
          srcSet={isInView && srcSet ? srcSet : undefined}
          sizes={sizes}
          alt={alt}
          title={imageTitle}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          fetchpriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit }}
          itemProp="image"
        />
      )}
    </div>
  );
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  },
  ...props
}: OptimizedImageProps & { breakpoints?: Record<string, number> }) {
  const generateSrcSet = () => {
    const ext = src.split('.').pop();
    const baseName = src.replace(`.${ext}`, '');

    return Object.entries(breakpoints)
      .map(([_, size]) => `${baseName}-${size}w.${ext} ${size}w`)
      .join(', ');
  };

  const generateSizes = () => {
    return Object.entries(breakpoints)
      .reverse()
      .map(([breakpoint, size]) => `(max-width: ${size}px) ${size}px`)
      .join(', ') + ', 100vw';
  };

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={generateSizes()}
      {...props}
    />
  );
}

export function LogoImage({
  src,
  alt,
  width = 200,
  height = 200,
  className = ''
}: Omit<OptimizedImageProps, 'loading' | 'priority'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
      priority={true}
      fetchPriority="high"
      objectFit="contain"
      itemScope
      itemType="https://schema.org/ImageObject"
    />
  );
}

export function HeroImage({
  src,
  alt,
  width,
  height,
  className = ''
}: Omit<OptimizedImageProps, 'loading' | 'priority'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
      priority={true}
      fetchPriority="high"
      objectFit="cover"
      placeholder="blur"
    />
  );
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = ''
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      priority={false}
      fetchPriority="low"
      placeholder="blur"
    />
  );
}
