import React from 'react';

type Props = {
  onSubmit: (startCode: string, endCode: string) => void;
  onClear: () => void;
  onExit: () => void;
};

const ProjectCodeInput: React.FC<Props> = ({ onSubmit, onClear, onExit }) => {
  const [startCode, setStartCode] = React.useState('0000000');
  const [endCode, setEndCode] = React.useState('9999999');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(startCode, endCode);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">事業マスタリスト</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-bold">範囲指定</label>
          <div className="flex items-center space-x-2 mt-2">
            <span className="font-bold">事業科目</span>
            <input
              type="text"
              value={startCode}
              onChange={(e) => setStartCode(e.target.value)}
              className="border rounded-md p-2 w-32"
            />
            <span>～</span>
            <input
              type="text"
              value={endCode}
              onChange={(e) => setEndCode(e.target.value)}
              className="border rounded-md p-2 w-32"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          >
            クリア
          </button>
          <button
            type="button"
            onClick={onExit}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCodeInput;
```