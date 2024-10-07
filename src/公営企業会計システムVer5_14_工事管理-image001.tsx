import { FC } from 'react';

type FormProps = {
  工事種目分類コード: string;
  システム工事種目分類コード: string;
  財源コード: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const FormComponent: FC<FormProps> = ({
  工事種目分類コード,
  システム工事種目分類コード,
  財源コード,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="border rounded p-4 bg-white">
        {/* Form Title */}
        <h2 className="text-xl font-semibold mb-4">システム工事種目分類マスタ保守</h2>
        <div className="mb-2">
          <table className="w-full mb-4">
            <thead>
              <tr>
                <th>工事種目分類名称</th>
                <th>システム工事種目分類名称</th>
                <th>財源名称</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-200">
                <td>本工事費</td>
                <td>本工事費</td>
                <td>自己財源</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="space-y-4">
          {/* 工事種目分類コード */}
          <div className="flex items-center">
            <label className="w-1/4">工事種目分類コード</label>
            <input
              type="text"
              value={工事種目分類コード}
              readOnly
              className="w-1/2 p-2 border rounded bg-blue-100"
            />
          </div>
          {/* システム工事種目分類コード */}
          <div className="flex items-center">
            <label className="w-1/4">システム工事種目分類コード</label>
            <input
              type="text"
              value={システム工事種目分類コード}
              readOnly
              className="w-1/2 p-2 border rounded bg-blue-100"
            />
          </div>
          {/* 財源コード */}
          <div className="flex items-center">
            <label className="w-1/4">財源コード</label>
            <input
              type="text"
              value={財源コード}
              readOnly
              className="w-1/2 p-2 border rounded bg-blue-100"
            />
          </div>
          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              確定
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
