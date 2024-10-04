```tsx
// LandDetailsForm.tsx
import React from 'react';

interface LandDetails {
  serialNumber: string;
  branchNumber: string;
  name: string;
  plotNumber: string;
  landNumber: string;
  registrationDate: string;
  publicArea: number;
  surveyedArea: number;
  acquisitionValue: string;
  summary: string;
  ownerName: string;
  ownerAddress: string;
}

interface LandDetailsFormProps {
  landDetails: LandDetails;
  onSubmit: (data: LandDetails) => void;
  onClear: () => void;
  onCancel: () => void;
}

const LandDetailsForm: React.FC<LandDetailsFormProps> = ({
  landDetails,
  onSubmit,
  onClear,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState<LandDetails>(landDetails);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>整理番号</label>
          <input
            type="text"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>枝番号</label>
          <input
            type="text"
            name="branchNumber"
            value={formData.branchNumber}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>取得地名称</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>地番</label>
          <input
            type="text"
            name="plotNumber"
            value={formData.plotNumber}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>地目</label>
          <input
            type="text"
            name="landNumber"
            value={formData.landNumber}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>登記年月日</label>
          <input
            type="text"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>公図面積</label>
          <input
            type="number"
            name="publicArea"
            value={formData.publicArea}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>実測面積</label>
          <input
            type="number"
            name="surveyedArea"
            value={formData.surveyedArea}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>取得価額</label>
          <input
            type="text"
            name="acquisitionValue"
            value={formData.acquisitionValue}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>摘要</label>
          <input
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>元所有者氏名</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label>元所有者住所</label>
          <input
            type="text"
            name="ownerAddress"
            value={formData.ownerAddress}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button type="button" onClick={onClear} className="p-2 bg-gray-200 rounded">
          クリア
        </button>
        <button type="button" onClick={onCancel} className="p-2 bg-gray-200 rounded">
          キャンセル
        </button>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          行確定
        </button>
      </div>
    </form>
  );
};

export default LandDetailsForm;
```