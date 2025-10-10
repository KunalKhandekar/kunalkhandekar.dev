import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

export default function ScreenshotLibrary({ images }) {

  const photos = images.map((src, index) => ({
    src,
    width: 2400,
    height: 1200,
    key: `screenshot-${index}`
  }));

  return (
    <MasonryPhotoAlbum
      photos={photos}
      layout="masonry"
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
