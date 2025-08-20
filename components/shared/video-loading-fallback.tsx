import Image from "next/image";

interface VideoLoadingFallbackProps {
  /** Path to the loading/fallback image */
  imageSrc: string;
  /** Alt text for the image */
  alt: string;
  /** Image quality (1-100) */
  quality?: number;
  /** Additional CSS classes for the container */
  className?: string;
}

export function VideoLoadingFallback({
  imageSrc,
  alt,
  quality = 90,
  className = "relative w-full h-full",
}: VideoLoadingFallbackProps) {
  return (
    <div className={className}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={quality}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
