"use client";

import { useEffect, useRef, useState } from "react";
import { VideoLoadingFallback } from "./video-loading-fallback";

interface VideoPlayerProps {
  /** Base video filename without extension (e.g., "intro_reduced_2", "spa_reduced") */
  videoSrc: string;
  /** Loading/fallback image path */
  fallbackImage: string;
  /** Alt text for the fallback image */
  fallbackAlt?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show loading progress indicator */
  showProgress?: boolean;
  /** Custom poster image (defaults to fallbackImage) */
  posterImage?: string;
}

export default function VideoPlayer({
  videoSrc,
  fallbackImage,
  fallbackAlt = "Video background",
  className = "absolute inset-0 h-full w-full object-cover",
  showProgress = false,
  posterImage,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let errorTimeout: NodeJS.Timeout;

    // Handle video readiness
    const handleCanPlay = () => {
      setVideoLoaded(true);
      setHasError(false);
      if (errorTimeout) clearTimeout(errorTimeout);
    };

    const handleError = () => {
      setHasError(true);
      setVideoLoaded(true);
      if (errorTimeout) clearTimeout(errorTimeout);
    };

    // Fallback timeout for slow loading
    errorTimeout = setTimeout(() => {
      setHasError(true);
      setVideoLoaded(true);
    }, 5000);

    // Add event listeners
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.load(); // Explicitly load the video

    // Attempt to play when ready
    const handleLoadedMetadata = () => {
      video.play().catch((error) => {
        // This is expected on mobile - autoplay is often blocked
        // Just show the video without logging the error
        setVideoLoaded(true);
        if (errorTimeout) clearTimeout(errorTimeout);
      });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      // Clean up event listeners
      if (errorTimeout) clearTimeout(errorTimeout);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [videoSrc]);

  return (
    <>
      {/* Hide play button overlay */}
      <style jsx>{`
        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
        }
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
        }
      `}</style>

      {!videoLoaded && !hasError && (
        <div className="absolute inset-0 z-10">
          <VideoLoadingFallback imageSrc={fallbackImage} alt={fallbackAlt} />
        </div>
      )}

      {hasError && (
        <div
          className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={{
          opacity: videoLoaded && !hasError ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        preload="auto"
      >
        <source
          src={`https://moviestorage.fra1.cdn.digitaloceanspaces.com/${videoSrc}.mp4`}
          type="video/mp4"
        />
        <source
          src={`https://moviestorage.fra1.cdn.digitaloceanspaces.com/${videoSrc}.webm`}
          type="video/webm"
        />
      </video>
    </>
  );
}
