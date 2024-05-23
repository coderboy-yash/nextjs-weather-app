
import { useRouter } from 'next/navigation';

const Modal = ({ show, children,setModal }) => {
  const router = useRouter();

  console.log(show,"yash1")
  if (!show) return null;

  const closeModal = () => {
    setModal(false)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
