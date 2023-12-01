import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

// eslint-disable-next-line react/prop-types
const Gallery = ({ imagenes, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90 z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-lg bg-transparent border-2 border-white px-2 py-1 rounded-lg focus:outline-none"
      >
        Cerrar Galeria
      </button>
      <div className="w-full max-w-4xl">
        <ImageGallery items={imagenes} />
      </div>
    </div>
  );
};

export default Gallery;
