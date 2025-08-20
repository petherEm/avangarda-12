import VideoPlayer from "./video-player";
import { VIDEO_CONFIG, VideoConfigKey } from "./video-config";

interface ConfiguredVideoPlayerProps {
  /** The module key from video config */
  module: VideoConfigKey;
  /** Additional CSS classes */
  className?: string;
  /** Override any config values */
  overrides?: {
    videoSrc?: string;
    fallbackImage?: string;
    fallbackAlt?: string;
    showProgress?: boolean;
  };
}

export function ConfiguredVideoPlayer({
  module,
  className,
  overrides = {},
}: ConfiguredVideoPlayerProps) {
  const config = { ...VIDEO_CONFIG[module], ...overrides };

  return (
    <VideoPlayer
      videoSrc={config.videoSrc}
      fallbackImage={config.fallbackImage}
      fallbackAlt={config.fallbackAlt}
      className={className}
      showProgress={config.showProgress ?? false}
    />
  );
}
