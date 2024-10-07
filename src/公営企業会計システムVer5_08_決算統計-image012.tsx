import React from 'react';

type RadioButtonOption = {
  label: string;
  value: string;
};

type RoundProcessingProps = {
  title: string;
  options: RadioButtonOption[];
  selectedOption: string;
  onSelectOption: (value: string) => void;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const RoundProcessing: React.FC<RoundProcessingProps> = ({
  title,
  options,
  selectedOption,
  onSelectOption,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="mb-8">
        <fieldset className="border rounded p-4">
          <legend className="font-medium mb-2">1000円丸め</legend>
          {options.map((option) => (
            <div key={option.value}>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="roundOption"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => onSelectOption(option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
      <div className="mb-8">
        <div className="border rounded p-4">
          <p className="font-medium mb-2">処理概要</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default RoundProcessing;
