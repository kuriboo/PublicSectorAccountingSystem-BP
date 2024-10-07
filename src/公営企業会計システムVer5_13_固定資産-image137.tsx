import React from 'react';

type CustomInputProps = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({ label, value, onChange }) => (
  <div className="flex items-center mb-2">
    <label className="text-blue-900 mr-4">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 px-2 py-1"
    />
  </div>
);

type MasterFormProps = {
  yearCode: string;
  zabbuRate: number;
  alterRate: number;
  guaranteeRate: number;
  newZabbuRate: number;
  onYearCodeChange: (value: string) => void;
  onZabbuRateChange: (value: string) => void;
  onAlterRateChange: (value: string) => void;
  onGuaranteeRateChange: (value: string) => void;
  onNewZabbuRateChange: (value: string) => void;
};

const MasterForm: React.FC<MasterFormProps> = ({
  yearCode,
  zabbuRate,
  alterRate,
  guaranteeRate,
  newZabbuRate,
  onYearCodeChange,
  onZabbuRateChange,
  onAlterRateChange,
  onGuaranteeRateChange,
  onNewZabbuRateChange,
}) => (
  <div className="p-4 border rounded shadow-md">
    <h2 className="text-lg font-bold mb-4">耐用年数マスタ</h2>
    <CustomInput label="耐用年数コード" value={yearCode} onChange={onYearCodeChange} />
    <CustomInput label="償却率" value={zabbuRate} onChange={onZabbuRateChange} />
    <CustomInput label="改定償却率" value={alterRate} onChange={onAlterRateChange} />
    <CustomInput label="償却保証率" value={guaranteeRate} onChange={onGuaranteeRateChange} />
    <CustomInput label="新償却率" value={newZabbuRate} onChange={onNewZabbuRateChange} />
    <div className="flex justify-end mt-4">
      <button className="bg-gray-300 px-4 py-2 mx-1 rounded">前データ</button>
      <button className="bg-gray-300 px-4 py-2 mx-1 rounded">次データ</button>
      <button className="bg-blue-500 text-white px-4 py-2 mx-1 rounded">OK</button>
      <button className="bg-gray-300 px-4 py-2 mx-1 rounded">クリア</button>
      <button className="bg-gray-300 px-4 py-2 mx-1 rounded">終了</button>
    </div>
  </div>
);

export default MasterForm;
