import React from 'react'

const VideoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-7xl">
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 bg-primary p-3 rounded-full text-gray-500 hover:text-gray-800 text-xl"
          >
            &times;
          </button>
          <iframe className="w-full h-[640px]" src="https://www.youtube.com/embed/bjYjj0dzRfs?si=ruIEgbnKM224KnkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* <iframe
            src="https://youtu.be/bjYjj0dzRfs?si=ruIEgbnKM224KnkA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[640px]"
          ></iframe> */}
        </div>
      </div>
  )
}

export default VideoModal