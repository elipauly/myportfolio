import { createContext, useContext, useEffect, useState } from "react";
import "./Lightbox.css";

const LightboxContext = createContext();

export function LightboxProvider({ children }) {
    const [images, setImages] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const registerImage = (image) => {
        setImages((current) => {
            // Don't register the same image more than once
            if (current.some((item) => item.src === image.src)) {
                return current;
            }

            return [...current, image];
        });
    };

    const openLightbox = (src) => {
        const index = images.findIndex((image) => image.src === src);

        if (index !== -1) {
            setSelectedIndex(index);
        }
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const nextImage = () => {
        setSelectedIndex((current) => {
            if (current === null) return null;

            return current === images.length - 1
                ? 0
                : current + 1;
        });
    };

    const previousImage = () => {
        setSelectedIndex((current) => {
            if (current === null) return null;

            return current === 0
                ? images.length - 1
                : current - 1;
        });
    };

    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedIndex, images.length]);

    return (
        <LightboxContext.Provider
            value={{
                registerImage,
                openLightbox,
            }}
        >
            {children}

            {selectedIndex !== null && images[selectedIndex] && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                >
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <button
                        className="lightbox-arrow lightbox-arrow-left"
                        onClick={(event) => {
                            event.stopPropagation();
                            previousImage();
                        }}
                        aria-label="Previous image"
                    >
                        ←
                    </button>

                    <div classNam="lightbox-content" onClick={(event) => { event.stopPropagation(); }} >
                        <img
                            src={images[selectedIndex].src}
                            alt={images[selectedIndex].alt}
                            className="lightbox-image"
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        />
                        {images[selectedIndex].caption && (
                            <div className="lightbox-caption">
                                {images[selectedIndex].caption}
                            </div>
                        )}
                    </div>

                    <button
                        className="lightbox-arrow lightbox-arrow-right"
                        onClick={(event) => {
                            event.stopPropagation();
                            nextImage();
                        }}
                        aria-label="Next image"
                    >
                        →
                    </button>

                    <div className="lightbox-counter">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </LightboxContext.Provider>
    );
}

export function useLightbox() {
    return useContext(LightboxContext);
}