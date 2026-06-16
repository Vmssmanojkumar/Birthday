declare module "@/components/DomeGallery/DomeGallery" {
  const DomeGallery: React.ComponentType<{
    images?: Array<{ src: string; alt?: string } | string>;
    fit?: number;
    fitBasis?: "auto" | "min" | "max" | "width" | "height";
    minRadius?: number;
    maxRadius?: number;
    padFactor?: number;
    overlayBlurColor?: string;
    maxVerticalRotationDeg?: number;
    dragSensitivity?: number;
    enlargeTransitionMs?: number;
    segments?: number;
    dragDampening?: number;
    openedImageWidth?: string;
    openedImageHeight?: string;
    imageBorderRadius?: string;
    openedImageBorderRadius?: string;
    grayscale?: boolean;
  }>;
  export default DomeGallery;
}
