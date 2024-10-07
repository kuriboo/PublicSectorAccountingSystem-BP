import React from 'react';

type TextInputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col mb-4">
    <label className="mb-2 text-sm text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-3 py-2 border border-gray-300 rounded-lg"
    />
  </div>
);

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 mx-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
  >
    {label}
  </button>
);

type LandAcquisitionFormProps = {
  assetNumber: string;
  department: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const LandAcquisitionForm: React.FC<LandAcquisitionFormProps> = ({ assetNumber, department, onSubmit, onClear, onExit }) => {
  const [location, setLocation] = React.useState('');
  const [area, setArea] = React.useState('');

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="mb-6 text-xl font-bold">土地取得入力</h2>
      <TextInput label="資産番号" value={assetNumber} onChange={() => {}} placeholder="資産番号を入力" />
      <TextInput label="部門" value={department} onChange={() => {}} placeholder="部門を入力" />
      <TextInput label="所在地" value={location} onChange={setLocation} placeholder="所在地を入力" />
      <TextInput label="総面積" value={area} onChange={setArea} placeholder="総面積を入力" />
      
      <div className="flex justify-end mt-6">
        <Button label="OK" onClick={onSubmit} />
        <Button label="クリア" onClick={onClear} />
        <Button label="終了" onClick={onExit} />
      </div>
    </div>
  );
};

export default LandAcquisitionForm;
