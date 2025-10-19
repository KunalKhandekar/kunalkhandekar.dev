"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

export default function ScreenshotLibrary({ images }) {
  return (
    <div className="mt-4">
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <PhotoView key={i} src={src}>
              <div
                className="relative rounded-lg overflow-hidden border 
                border-zinc-200 dark:border-zinc-800 bg-zinc-50 
                dark:bg-zinc-900 hover:shadow-md transition cursor-pointer"
              >
                <div className="aspect-video relative">
                  <Image
                    src={src}
                    alt="screenshot"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={src}
                  />
                </div>
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
