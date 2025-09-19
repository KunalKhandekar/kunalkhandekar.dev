"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";

export const ImageGalleryModal = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const goToImage = (index) => setCurrentIndex(index);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
      >
        <MdClose size={32} />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2"
          >
            <MdChevronLeft size={48} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2"
          >
            <MdChevronRight size={48} />
          </button>
        </>
      )}

      {/* Main Image */}
      <div
        className="relative w-[800px] h-[500px] flex items-center justify-center 
             bg-black dark:bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToImage(index);
              }}
              className={`relative w-16 h-16 rounded border-2 overflow-hidden flex-shrink-0 ${
                index === currentIndex ? "border-blue-500" : "border-white/50"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div
          className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
