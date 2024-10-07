import React from 'react';

type FormProps = {
  onDisplay: (date: string, type: string) => void;
  onRemove: () => void;
  onDetail: () => void;
};

const SalaryAdjustmentForm: React.FC<FormProps> = ({
  onDisplay,
  onRemove,
  onDetail,
}) => {
  // State to manage selected date and type
  const [selectedDate, setSelectedDate] = React.useState<string>('');
  const [selectedType, setSelectedType] = React.useState<string>('給与支払データ');

  // Handle display button click
  const handleDisplayClick = () => {
    onDisplay(selectedDate, selectedType);
  };

  // Handle radio button change
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="p-6 bg-gray-50 rounded shadow-md">
      <h2 className="text-xl mb-4">給与支払確定解除入力</h2>
      <div className="mb-6">
        <label className="block mb-2 font-bold">解除対象</label>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="salaryData"
            name="dataType"
            value="給与支払データ"
            checked={selectedType === '給与支払データ'}
            onChange={handleTypeChange}
            className="mr-2"
          />
          <label htmlFor="salaryData">給与支払データ</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="controlData"
            name="dataType"
            value="控除分(預り金)支払データ"
            checked={selectedType === '控除分(預り金)支払データ'}
            onChange={handleTypeChange}
            className="mr-2"
          />
          <label htmlFor="controlData">控除分(預り金)支払データ</label>
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold">支払日</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleDisplayClick}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        表示
      </button>
      <div className="border-t border-gray-300 mt-6 pt-4">
        <button
          onClick={onDetail}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2"
        >
          詳細照会
        </button>
        <button
          onClick={onRemove}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          解除
        </button>
      </div>
    </div>
  );
};

export default SalaryAdjustmentForm;
```