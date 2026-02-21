"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  showAsLoading?: boolean; // New prop to force skeleton state
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackSrc,
  priority = false,
  fill = false,
  sizes,
  style,
  showAsLoading = false, // Default to showing actual image
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // If showAsLoading is true, always show the skeleton placeholder
  if (showAsLoading) {
    return (
      <ImagePlaceholder
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        circular={false}
      />
    );
  }

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      } else {
        // Generate a placeholder based on dimensions
        const placeholderSrc = `https://via.placeholder.com/${width || 400}x${height || 300}/1f2937/cf2b2c?text=${encodeURIComponent(alt)}`;
        setImageSrc(placeholderSrc);
      }
    }
  };

  const imageProps = {
    src: imageSrc,
    alt: alt || '',
    className,
    onError: handleError,
    priority,
    style,
    ...(fill ? { fill: true, sizes } : { width, height })
  };

  return <Image {...imageProps} alt={alt || ''} />;
};

// Specialized components for different use cases
export const HeroImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&auto=format&q=80"
  />
);

export const ProfileImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="https://images.unsplash.com/photo-1634117622592-114e3024ff27?w=400&h=400&fit=crop&auto=format&q=80"
  />
);

export const BusinessImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&auto=format&q=80"
  />
);

export const IconImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0Y1OUUwQiIvPgo8cGF0aCBkPSJNMjQgMTJMMzQgMzZIMTRMMjQgMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
  />
);