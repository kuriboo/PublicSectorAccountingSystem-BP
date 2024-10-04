```tsx
import React from 'react';

// TypeScript 타입 정의
interface FormInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'checkbox';
  className?: string;
}

interface MasterTitleFormProps {
  data: {
    title: string;
    managerName?: string;
    receiver?: string;
    headName?: string;
    dateName?: string;
    checker?: string;
    decisionCode?: string;
    subtitle1?: string;
    subtitle2?: string;
    subtitle3?: string;
    format?: string;
  };
  onSubmit?: () => void;
  onClear?: () => void;
  onClose?: () => void;
}

// 재사용 가능한 입력 컴포넌트
const FormInput: React.FC<FormInputProps> = ({ label, value, onChange = () => {}, type = 'text', className = '' }) => {
  return (
    <div className={`flex items-center justify-between mb-2 ${className}`}>
      <label className="w-1/3 text-right mr-2">{label}:</label>
      {type === 'text' ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-2/3"
        />
      ) : (
        <input
          type="checkbox"
          checked={value === 'checked'}
          onChange={(e) => onChange(e.target.checked ? 'checked' : '')}
          className="w-6 h-6"
        />
      )}
    </div>
  );
};

// 주 컴포넌트
const MasterTitleForm: React.FC<MasterTitleFormProps> = ({ data, onSubmit = () => {}, onClear = () => {}, onClose = () => {} }) => {

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">帳票タイトル マスタ</h2>
      <form>
        <FormInput label="タイトル" value={data.title} onChange={() => {}} />
        <FormInput label="管理者職名" value={data.managerName || ''} onChange={() => {}} />
        <FormInput label="開収者" value={data.receiver || ''} onChange={() => {}} />
        <FormInput label="首長名" value={data.headName || ''} onChange={() => {}} />
        <FormInput label="箱収日印字名称" value={data.dateName || ''} onChange={() => {}} />
        <FormInput label="検収者" value={data.checker || ''} onChange={() => {}} />
        <FormInput label="決裁コード" value={data.decisionCode || ''} onChange={() => {}} />
        <FormInput label="欄外内容1" value={data.subtitle1 || ''} onChange={() => {}} />
        <FormInput label="欄外内容2" value={data.subtitle2 || ''} onChange={() => {}} />
        <FormInput label="欄外内容3" value={data.subtitle3 || ''} onChange={() => {}} />
        <FormInput label="帳票様式" value={data.format || ''} onChange={() => {}} />

        <div className="flex justify-between mt-6">
          <button type="button" onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            OK
          </button>
          <button type="button" onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
            クリア
          </button>
          <button type="button" onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default MasterTitleForm;
```