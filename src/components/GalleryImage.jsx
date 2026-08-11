import { useEffect } from "react";
import { useLightbox } from "./LightboxProvider.jsx";

function GalleryImage({ src, alt = "", caption = "",className = "" }) {
    const { registerImage, openLightbox } = useLightbox();

    useEffect(() => {
        registerImage({
            src,
            alt,
            caption,
        });
    }, [src, alt, caption]);

    return (
        <img
            src={src}
            alt={alt}
            caption={caption}
            className={className}
            onClick={() => openLightbox(src)}
            style={{ cursor: "pointer" }}
        />
    );
}

export default GalleryImage;