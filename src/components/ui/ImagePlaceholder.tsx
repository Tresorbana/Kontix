"use client";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
    width?: number;
    height?: number;
    className?: string;
    aspectRatio?: string;
    circular?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    width,
    height,
    className = "",
    aspectRatio,
    circular = false,
}) => {
    const style: React.CSSProperties = {};

    if (width && height) {
        style.width = width;
        style.height = height;
    } else if (aspectRatio) {
        style.aspectRatio = aspectRatio;
    }

    return (
        <div
            className={cn(
                "relative overflow-hidden bg-gray-800",
                circular ? "rounded-full" : "rounded-lg",
                className
            )}
            style={style}
        >
            {/* Shimmer animation */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />

            {/* Icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <svg
                    className="w-10 h-10 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ImagePlaceholder;
