import React from 'react';

interface FormProps {
  collectionNumber?: number;
  itemName?: string;
  cfDivision?: string;
  totalAmountSymbol?: string;
  modificationDivision?: string;
  indent?: number;
  outputCheckbox?: boolean;
  onOkClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  collectionNumber = 0,
  itemName = '',
  cfDivision = '',
  totalAmountSymbol = '',
  modificationDivision = '',
  indent = 0,
  outputCheckbox = false,
  onOkClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-blue-100">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">
            集計番号:
            <input type="number" value={collectionNumber} className="form-input mt-1 block w-full" />
          </label>
          <label className="block mt-2">
            項目名1:
            <input type="text" value={itemName} className="form-input mt-1 block w-full" />
          </label>
          <label className="block mt-2">
            CF区分:
            <input type="text" value={cfDivision} className="form-input mt-1 block w-full" />
          </label>
          <label className="block mt-2">
            金額印字区分:
            <input type="text" value={totalAmountSymbol} className="form-input mt-1 block w-full" />
          </label>
          <label className="block mt-2">
            改行区分:
            <input type="text" value={modificationDivision} className="form-input mt-1 block w-full" />
          </label>
          <label className="block mt-2">
            インデント:
            <input type="number" value={indent} className="form-input mt-1 block w-full" />
          </label>
          <label className="block mt-2">
            <input type="checkbox" checked={outputCheckbox} />
            帳票出力無し
          </label>
        </div>

        <div className="border p-4">
          <div className="flex justify-between mb-2">
            <button className="bg-gray-300 px-4 py-2">編集</button>
            <button className="bg-red-300 px-4 py-2">行削除</button>
          </div>
          <table className="w-full text-center border">
            <thead>
              <tr>
                <th className="border px-4 py-2">集計先行番号</th>
                <th className="border px-4 py-2">加減区分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">250</td>
                <td className="border px-4 py-2">+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={onOkClick} className="bg-blue-500 text-white px-4 py-2 mr-2">OK</button>
        <button onClick={onClearClick} className="bg-gray-500 text-white px-4 py-2 mr-2">クリア</button>
        <button onClick={onCancelClick} className="bg-gray-700 text-white px-4 py-2">キャンセル</button>
      </div>
    </div>
  );
};

export default FormComponent;