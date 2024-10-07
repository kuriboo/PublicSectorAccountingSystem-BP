// components/TitleMasterList.tsx
import React from 'react';

type TitleMasterListProps = {
  startCode: string;
  endCode: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const TitleMasterList: React.FC<TitleMasterListProps> = ({
  startCode,
  endCode,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="bg-blue-100 py-2 px-4 mb-4 text-lg font-bold">
        画面タイトルマスタリスト作成
      </div>
      
      {/* Content */}
      <div className="border rounded-md p-4">
        {/* Range Input Section */}
        <div className="mb-4">
          <div className="mb-2 text-blue-900 font-bold">範囲指定</div>
          <div className="flex items-center">
            <label className="mr-2">画面タイトルコード</label>
            <input
              type="text"
              value={startCode}
              readOnly
              className="border p-1 rounded mr-2 text-center"
            />
            <span className="mr-2">~</span>
            <input
              type="text"
              value={endCode}
              readOnly
              className="border p-1 rounded text-center"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onOk}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
          >
            クリア
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleMasterList;

```tsx
// pages/index.tsx
import TitleMasterList from '../components/TitleMasterList';

const Home = () => {
  const handleOk = () => {
    // Handle OK button action
    console.log('OK clicked');
  };

  const handleClear = () => {
    // Handle Clear button action
    console.log('Clear clicked');
  };

  const handleClose = () => {
    // Handle Close button action
    console.log('Close clicked');
  };

  return (
    <div>
      <TitleMasterList
        startCode="MAD0000C"
        endCode="SUB99999"
        onOk={handleOk}
        onClear={handleClear}
        onClose={handleClose}
      />
    </div>
  );
};

export default Home;
