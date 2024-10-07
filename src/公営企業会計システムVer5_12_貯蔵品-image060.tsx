import React from 'react';

type InputRangeProps = {
  label: string;
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
};

const InputRange: React.FC<InputRangeProps> = ({
  label,
  startValue,
  endValue,
  onStartChange,
  onEndChange
}) => {
  return (
    <div className="flex items-center mb-4">
      <label className="w-24 mr-4">{label}</label>
      <input
        type="text"
        value={startValue}
        onChange={(e) => onStartChange(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <span className="mx-2">~</span>
      <input
        type="text"
        value={endValue}
        onChange={(e) => onEndChange(e.target.value)}
        className="border px-2 py-1"
      />
    </div>
  );
};

type StorageEntryFormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const StorageEntryForm: React.FC<StorageEntryFormProps> = ({
  onSubmit,
  onClear,
  onFinish
}) => {
  const [locationStart, setLocationStart] = React.useState('');
  const [locationEnd, setLocationEnd] = React.useState('');
  const [codeStart, setCodeStart] = React.useState('');
  const [codeEnd, setCodeEnd] = React.useState('');
  const [productIdStart, setProductIdStart] = React.useState('');
  const [productIdEnd, setProductIdEnd] = React.useState('');
  const [dateStart, setDateStart] = React.useState('');
  const [dateEnd, setDateEnd] = React.useState('');

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <InputRange
        label="保管場所"
        startValue={locationStart}
        endValue={locationEnd}
        onStartChange={setLocationStart}
        onEndChange={setLocationEnd}
      />
      <InputRange
        label="仕訳コード"
        startValue={codeStart}
        endValue={codeEnd}
        onStartChange={setCodeStart}
        onEndChange={setCodeEnd}
      />
      <InputRange
        label="品番"
        startValue={productIdStart}
        endValue={productIdEnd}
        onStartChange={setProductIdStart}
        onEndChange={setProductIdEnd}
      />
      <InputRange
        label="入出庫年月日"
        startValue={dateStart}
        endValue={dateEnd}
        onStartChange={setDateStart}
        onEndChange={setDateEnd}
      />
      <div className="flex justify-end mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
          クリア
        </button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default StorageEntryForm;
```