import React from 'react';

type Props = {
  title: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReceiptEntry: React.FC<Props> = ({ title, onOk, onClear, onExit }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-xl font-semibold text-blue-800">{title}</h1>
      <div className="border-2 border-gray-300 p-4 my-4">
        <h2 className="text-lg font-medium">範囲指定</h2>
        {/* 収納日 */}
        <div className="flex space-x-2 items-center my-2">
          <label className="font-medium">収納日:</label>
          <input type="date" className="border rounded p-1"/>
          <span>〜</span>
          <input type="date" className="border rounded p-1"/>
        </div>
        {/* 所属 */}
        <div className="flex space-x-2 items-center my-2">
          <label className="font-medium">所属:</label>
          <input type="text" className="border rounded p-1" defaultValue="0000000"/>
          <span>〜</span>
          <input type="text" className="border rounded p-1" defaultValue="9999999"/>
        </div>
        {/* 改頁 */}
        <div className="flex space-x-4 my-2">
          <label className="font-medium">改頁:</label>
          <label><input type="radio" name="page" value="節"/>節</label>
          <label><input type="radio" name="page" value="細部"/>細部</label>
        </div>
        {/* 発行区分 */}
        <div className="flex space-x-4 my-2">
          <label className="font-medium">発行区分:</label>
          <label><input type="radio" name="issue" value="新規"/>新規</label>
          <label><input type="radio" name="issue" value="再発行"/>再発行</label>
        </div>
      </div>
      <div className="border-2 border-gray-300 p-4 my-4">
        <h2 className="text-lg font-medium">節計印字</h2>
        {/* 節計印字 */}
        <div className="flex space-x-4 my-2">
          <label><input type="radio" name="calc" value="節別年度別計" defaultChecked/>節別年度別計</label>
          <label><input type="radio" name="calc" value="年度別計"/>年度別計</label>
        </div>
      </div>
      <div className="flex justify-end space-x-4 my-4">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReceiptEntry;
