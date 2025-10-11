"use client";

import Image from "next/image";
import { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { ImageGalleryModal } from "./ImageGalleryModal";

export const AchievementCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full py-4">
        {/*Company & Title */}
        <div className="flex gap-2 justify-between items-start">
          <div className="flex gap-2 justify-center items-center dark:text-white text-black">
            <Image
              src={data.companyLogo}
              width={100}
              height={100}
              alt="Company Logo"
              className="size-15 rounded-xl object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold max-[800px]:text-lg">
                {data.title}
              </h2>
              <div className="text-sm dark:text-zinc-300 text-zinc-700 flex justify-start items-center gap-1 max-[800px]:text-xs">
                <div className="flex justify-center items-center gap-1">
                  <MdCalendarMonth /> {data.timeLine}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key work done */}
        <div className="mt-4">
          <h3 className="text-md font-semibold dark:text-zinc-300 text-zinc-700 mb-2">
            {data.descriptionTitle}
          </h3>
          <ul className="list-disc ml-6 space-y-0.5 text-sm">
            {data.descriptionPoints?.map((achievement, index) => (
              <li key={index} className="dark:text-zinc-300 text-zinc-700">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Images Gallery */}
        <div className="mt-4">
          <h3 className="text-md font-semibold dark:text-zinc-300 text-zinc-700 mb-2">
            Images
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer group hover:opacity-90 transition-opacity"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image}
                  alt={`Achievement ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-4 h-4 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={data.images}
        isOpen={isModalOpen}
        onClose={closeModal}
        initialIndex={selectedImageIndex}
      />
    </>
  );
};
