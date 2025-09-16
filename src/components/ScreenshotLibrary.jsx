import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

export default function ScreenshotLibrary() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      width: 800,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      width: 900,
      height: 1350,
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      width: 1200,
      height: 1600,
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      width: 1080,
      height: 720,
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
      width: 1000,
      height: 1500,
    },
    {
      src: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      width: 1000,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      width: 1600,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
      width: 1080,
      height: 1440,
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      width: 900,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      width: 1080,
      height: 720,
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      width: 1000,
      height: 1500,
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      width: 1000,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
      width: 900,
      height: 1350,
    },
  ];

  return (
    <MasonryPhotoAlbum
      photos={photos}
      layout="masonry"
      targetRowHeight={250}
      renderPhoto={({ photo, imageProps }) => (
        <Image
          {...imageProps}
          src={photo.src}
          alt=""
          width={photo.width}
          height={photo.height}
          className="rounded-lg shadow-md"
        />
      )}
    />
  );
}
