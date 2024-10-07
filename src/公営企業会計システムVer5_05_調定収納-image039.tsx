import React from 'react';

// Propsの型定義
type UnpaidListProps = {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// コンポーネント定義
const UnpaidList: React.FC<UnpaidListProps> = ({ onSubmit, onClear, onExit }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">未入金一覧表</h2>
      <div className="border p-4 mb-4">
        <label className="block mb-2 font-bold">納入期限範囲指定</label>
        <div>
          <label>
            <input type="radio" name="deadline" value="yes" className="mr-2" />有
          </label>
          <label className="ml-4">
            <input type="radio" name="deadline" value="no" className="mr-2" />無
          </label>
        </div>
      </div>
      <div className="border p-4">
        <label className="block mb-2 font-bold">範囲指定</label>
        <div className="mb-2">
          <label className="mr-2">納入期限</label>
          <input type="text" className="border p-1 mr-4" placeholder="平成29年04月01日" />
          <span>～</span>
          <input type="text" className="border p-1 ml-4" placeholder="平成30年03月31日" />
        </div>
        <div className="mb-2">
          <label className="mr-2">調定科目</label>
          <input type="text" className="border p-1" placeholder="000000" />
          <span className="mx-4">～</span>
          <input type="text" className="border p-1" placeholder="999999999" />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white py-1 px-4 mr-2" onClick={onSubmit}>OK</button>
        <button className="bg-gray-300 text-black py-1 px-4 mr-2" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white py-1 px-4" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default UnpaidList;
```