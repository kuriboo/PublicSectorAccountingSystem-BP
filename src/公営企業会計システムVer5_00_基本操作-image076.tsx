import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'blue', size = 'medium' }) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg'
  };

  // Tailwind CSS classes are used for styling
  return (
    <button
      className={`bg-${color}-500 text-white font-semibold rounded ${sizeClasses[size]} hover:bg-${color}-700`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

type MessageBoxProps = {
  message: string;
  onOk: () => void;
};

const MessageBox: React.FC<MessageBoxProps> = ({ message, onOk }) => (
  <div className="flex flex-col items-center p-4 border border-gray-300 bg-white rounded shadow-lg">
    <p className="mb-4">{message}</p>
    <Button label="OK" onClick={onOk} />
  </div>
);

export { Button, MessageBox };
```