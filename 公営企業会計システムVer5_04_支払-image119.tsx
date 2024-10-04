```tsx
import React from 'react';

type AlertProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Alert: React.FC<AlertProps> = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Title Section */}
        <div className="font-bold text-lg mb-2">{title}</div>
        
        {/* Message Section */}
        <div className="flex items-center mb-4">
          <span className="mr-2 text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6 bi bi-exclamation-triangle-fill">
              <path d="M7.938 2.016a.13.13 0 0 1 .126 0l6.857 3.956c.12.07.187.198.187.338v7.944c0 .141-.066.268-.186.338l-6.857 3.956a.139.139 0 0 1-.126 0l-6.857-3.956A.376.376 0 0 1 1 14.254V6.31c0-.14.066-.268.187-.337L8.045 2.016ZM7.002 5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-1 0V5Z"/>
              <path d="M7 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
            </svg>
          </span>
          <p>{message}</p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-end space-x-4">
          <button 
            onClick={onConfirm} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            はい(Y)
          </button>
          <button 
            onClick={onCancel} 
            className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            いいえ(N)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
```