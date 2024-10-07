import React from 'react';

// 型定義
type ReportFormProps = {
  yearOptions: string[];
  sectionOptions: { value: string; label: string }[];
  onSubmit: (year: string, startSection: string, endSection: string) => void;
};

const ReportForm: React.FC<ReportFormProps> = ({ yearOptions, sectionOptions, onSubmit }) => {
  const [year, setYear] = React.useState(yearOptions[0]);
  const [startSection, setStartSection] = React.useState(sectionOptions[0].value);
  const [endSection, setEndSection] = React.useState(sectionOptions[0].value);

  // フォーム送信ハンドラ
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(year, startSection, endSection);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          年度
        </label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="block w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight"
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          集計表区分
        </label>
        <div className="flex space-x-2">
          <select
            value={startSection}
            onChange={(e) => setStartSection(e.target.value)}
            className="block w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight"
          >
            {sectionOptions.map((section) => (
              <option key={section.value} value={section.value}>
                {section.label}
              </option>
            ))}
          </select>
          <span>〜</span>
          <select
            value={endSection}
            onChange={(e) => setEndSection(e.target.value)}
            className="block w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight"
          >
            {sectionOptions.map((section) => (
              <option key={section.value} value={section.value}>
                {section.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          type="reset"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
