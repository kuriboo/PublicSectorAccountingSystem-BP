import React, { FC, useState } from 'react';

// Prop types
type InputFormProps = {
  title: string;
  onSubmit: () => void;
};

// Component definition
const InputForm: FC<InputFormProps> = ({ title, onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('支出決定');

  return (
    <div className="p-4 bg-gray-100 rounded-lg font-sans">
      <h1 className="text-xl font-bold text-center">{title}</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <label className="flex flex-col w-1/2">
            <span className="text-sm">伝票日付 (From)</span>
            <input
              type="date"
              className="border-2 border-gray-300 rounded p-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-1/2">
            <span className="text-sm">伝票日付 (To)</span>
            <input
              type="date"
              className="border-2 border-gray-300 rounded p-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>

        <div className="flex justify-between">
          <label className="flex flex-col w-1/2">
            <span className="text-sm">伝票番号</span>
            <input
              type="text"
              className="border-2 border-gray-300 rounded p-2"
              placeholder="0 ~ 999999"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-1/2">
            <span className="text-sm">税込金額</span>
            <input
              type="text"
              className="border-2 border-gray-300 rounded p-2"
              placeholder="0 ~ 999,999,999,999"
              value={taxAmount}
              onChange={(e) => setTaxAmount(e.target.value)}
            />
          </label>
        </div>

        <div className="flex justify-between">
          <label className="flex flex-col w-full">
            <span className="text-sm">選択肢</span>
            <select
              className="border-2 border-gray-300 rounded p-2"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="支出決定">支出決定</option>
              <option value="個別調">個別調</option>
              <option value="集合調">集合調</option>
              <option value="集合収付">集合収付</option>
            </select>
          </label>
        </div>

        <button
          className="bg-blue-500 text-white p-2 rounded mt-4"
          onClick={onSubmit}
        >
          表示
        </button>
      </div>
    </div>
  );
};

export default InputForm;
