import React from 'react';

type FilterFormProps = {
  initialYear?: number;
  initialSection?: string;
  onSubmit: (data: {
    year: number;
    section: string;
    hasStamp: boolean;
    startReception: string;
    endReception: string;
    startBidDate: string;
    endBidDate: string;
  }) => void;
};

const FilterForm: React.FC<FilterFormProps> = ({
  initialYear = 29,
  initialSection = '工事',
  onSubmit,
}) => {
  // Form state
  const [year, setYear] = React.useState<number>(initialYear);
  const [section, setSection] = React.useState<string>(initialSection);
  const [hasStamp, setHasStamp] = React.useState<boolean>(false);
  const [startReception, setStartReception] = React.useState<string>('0000000');
  const [endReception, setEndReception] = React.useState<string>('9999999');
  const [startBidDate, setStartBidDate] = React.useState<string>('');
  const [endBidDate, setEndBidDate] = React.useState<string>('');

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      year,
      section,
      hasStamp,
      startReception,
      endReception,
      startBidDate,
      endBidDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">年度</span>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">受付区分</span>
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          >
            <option>工事</option>
            <option>その他</option>
          </select>
        </label>
      </div>

      <div className="mb-4">
        <span className="text-gray-700">落札率印字</span>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            checked={hasStamp}
            onChange={() => setHasStamp(true)}
            className="form-radio"
          />
          <span className="ml-2">有</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            checked={!hasStamp}
            onChange={() => setHasStamp(false)}
            className="form-radio"
          />
          <span className="ml-2">無</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">受付番号</span>
          <input
            type="text"
            value={startReception}
            onChange={(e) => setStartReception(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
          <span className="mx-2">〜</span>
          <input
            type="text"
            value={endReception}
            onChange={(e) => setEndReception(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">入札年月日</span>
          <input
            type="date"
            value={startBidDate}
            onChange={(e) => setStartBidDate(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
          <span className="mx-2">〜</span>
          <input
            type="date"
            value={endBidDate}
            onChange={(e) => setEndBidDate(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          OK
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          onClick={() => {
            setYear(initialYear);
            setSection(initialSection);
            setHasStamp(false);
            setStartReception('0000000');
            setEndReception('9999999');
            setStartBidDate('');
            setEndBidDate('');
          }}
        >
          クリア
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
        >
          終了
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
