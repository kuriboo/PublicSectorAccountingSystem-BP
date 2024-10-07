import React from 'react';

type ReportFormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit, onClear, onExit }) => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">未納品一覧表作成</h1>
      <div className="bg-gray-100 p-4 rounded border">
        <h2 className="font-semibold mb-2">未納品一覧表範囲入力</h2>
        <form>
          <div className="mb-2">
            <label className="block text-sm font-medium">決裁区分</label>
            <input type="text" className="border rounded w-full py-1 px-2" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">作表日付</label>
            <input type="text" value="平成29年08月14日" readOnly className="border rounded w-full py-1 px-2 bg-gray-200" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">保管場所</label>
            <div className="flex">
              <input type="text" className="border rounded py-1 px-2 mr-2 w-full" />
              <span className="text-lg">~</span>
              <input type="text" value="999999" readOnly className="border rounded py-1 px-2 ml-2 w-full bg-gray-200" />
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">業者コード</label>
            <div className="flex">
              <input type="text" className="border rounded py-1 px-2 mr-2 w-full" />
              <span className="text-lg">~</span>
              <input type="text" value="999999999999" readOnly className="border rounded py-1 px-2 ml-2 w-full bg-gray-200" />
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              業者が未入力のデータも印字する
            </label>
          </div>
          <div className="flex space-x-2">
            <button type="button" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
            <button type="button" onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
            <button type="button" onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportForm;
