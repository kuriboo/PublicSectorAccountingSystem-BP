import React from 'react';

interface FieldProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, value, onChange, readOnly = false }) => (
  <div className="flex items-center mb-2">
    <label className="w-32 font-bold">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`border px-2 py-1 ${readOnly ? 'bg-gray-100' : ''}`}
    />
  </div>
);

interface MasterFormProps {
  data: {
    工事店番号: string;
    適用開始年月日: string;
    届出日: string;
    代表者名1: string;
    代表者名2: string;
    略名: string;
    住所: string;
    電話番号: string;
    FAX番号: string;
    保持機材: string;
    主任技術者: string;
    担当者電話番号: string;
    資格: string;
  };
  onChange: (field: string, value: string) => void;
}

const MasterForm: React.FC<MasterFormProps> = ({ data, onChange }) => {
  return (
    <form className="p-4 bg-white border rounded shadow-sm">
      <Field label="工事店番号" value={data.工事店番号} onChange={(e) => onChange('工事店番号', e.target.value)} />
      <Field label="適用開始年月日" value={data.適用開始年月日} onChange={(e) => onChange('適用開始年月日', e.target.value)} />
      <Field label="届出日" value={data.届出日} onChange={(e) => onChange('届出日', e.target.value)} />
      <Field label="代表者名1" value={data.代表者名1} onChange={(e) => onChange('代表者名1', e.target.value)} />
      <Field label="代表者名2" value={data.代表者名2} onChange={(e) => onChange('代表者名2', e.target.value)} />
      <Field label="略名" value={data.略名} onChange={(e) => onChange('略名', e.target.value)} />
      <Field label="住所" value={data.住所} onChange={(e) => onChange('住所', e.target.value)} />
      <Field label="電話番号" value={data.電話番号} onChange={(e) => onChange('電話番号', e.target.value)} />
      <Field label="FAX番号" value={data.FAX番号} onChange={(e) => onChange('FAX番号', e.target.value)} />
      <Field label="保持機材" value={data.保持機材} onChange={(e) => onChange('保持機材', e.target.value)} />
      <Field label="主任技術者" value={data.主任技術者} onChange={(e) => onChange('主任技術者', e.target.value)} />
      <Field label="担当者電話番号" value={data.担当者電話番号} onChange={(e) => onChange('担当者電話番号', e.target.value)} />
      <Field label="資格" value={data.資格} onChange={(e) => onChange('資格', e.target.value)} />
      {/* Buttons */}
      <div className="flex space-x-2 mt-4">
        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded">登録</button>
        <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded">訂正</button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded">削除</button>
      </div>
    </form>
  );
};

export default MasterForm;
