```tsx
import React from 'react';

// Prop type definition
interface FormInputProps {
  title: string;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

// FormInput component
const FormInput: React.FC<FormInputProps> = ({ title, options, selectedOption, onSelect }) => {
  return (
    <div className="mb-4 p-2 border rounded shadow">
      <h3 className="text-blue-700 font-bold">{title}</h3>
      <select
        className="mt-2 p-2 border rounded w-full"
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// Parent component
interface FormComponentProps {
  formTitle: string;
  formData: {
    label: string;
    options: string[];
  }[];
  onFormSubmit: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ formTitle, formData, onFormSubmit }) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(
    formData.map((_) => "")
  );

  const handleSelect = (index: number, option: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">{formTitle}</h2>
      {formData.map((data, index) => (
        <FormInput
          key={index}
          title={data.label}
          options={data.options}
          selectedOption={selectedOptions[index]}
          onSelect={(option) => handleSelect(index, option)}
        />
      ))}
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        登録
      </button>
    </form>
  );
};

// Sample usage
const App: React.FC = () => {
  const formData = [
    { label: "決裁処理日", options: ["令和05年08月06日", "令和05年09月06日"] },
    { label: "年度", options: ["2023", "2024"] },
  ];

  const handleFormSubmit = () => {
    console.log("フォームが送信されました");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <FormComponent formTitle="戻出入力" formData={formData} onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
```