import { clsx } from "clsx";
import * as React from "react";

export const Container = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: () => void;
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
  }
>(
  (
    {
      className,
      children,
      onMouseEnter,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(className, "px-4 lg:px-6")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="mx-auto max-w-2xl md:max-w-5xl lg:max-w-[1320px]">
          {children}
        </div>
      </div>
    );
  }
);

Container.displayName = "Container";
