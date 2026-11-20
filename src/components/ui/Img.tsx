import NextImage, { type ImageProps } from "next/image";
import { BLUR } from "@/lib/blur-data";

/**
 * Drop-in replacement for next/image that shows an instant blur placeholder while the photo loads.
 * It looks the src up in the generated BLUR map (public/images photos); anything without an entry
 * — e.g. the transparent PNG logo — falls through to a plain next/image. Swap the import only:
 *   import Image from "@/components/ui/Img"   // was: from "next/image"
 */
export default function Img(props: ImageProps) {
  const src = typeof props.src === "string" ? props.src : undefined;
  const blurDataURL = src ? BLUR[src] : undefined;
  // Respect an explicit placeholder if a caller ever sets one; otherwise add blur when we have it.
  if (blurDataURL && !props.placeholder) {
    return <NextImage placeholder="blur" blurDataURL={blurDataURL} {...props} />;
  }
  return <NextImage {...props} />;
}
