import { BsChevronLeft, BsChevronRight} from 'react-icons/bs';

function Modal({ images, current, onNext, onPrev, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center gap-10 px-4"
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onPrev();
        }}
        className="cursor-pointer p-5 text-md text-black hover:text-white rounded-full bg-gray-100 hover:bg-gray-600 shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
        aria-label="Imagem anterior"
      >
        <BsChevronLeft />
      </button>

      <img
        src={images[current]}
        alt={`Imagem ${current + 1}`}
        className="max-h-[50vh] object-contain rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} 
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
          className="cursor-pointer p-5 text-md text-black hover:text-white rounded-full bg-gray-100 hover:bg-gray-600 shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
        aria-label="Próxima imagem"
      >
        <BsChevronRight />
      </button>
    </div>
  );
}

export default Modal;
