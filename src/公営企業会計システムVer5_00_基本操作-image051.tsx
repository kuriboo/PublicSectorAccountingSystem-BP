import React from 'react';

type CSVExportProps = {
  separator: 'comma' | 'tab';
  quotes: boolean;
  includeHeaders: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const CSVExportModal: React.FC<CSVExportProps> = ({
  separator,
  quotes,
  includeHeaders,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">CSV出力</h2>
          <button onClick={onCancel} className="text-gray-500">&times;</button>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <span className="font-bold">区切り文字</span>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="separator"
                  value="comma"
                  checked={separator === 'comma'}
                  readOnly
                />{' '}
                カンマ
              </label>
              <label>
                <input
                  type="radio"
                  name="separator"
                  value="tab"
                  checked={separator === 'tab'}
                  readOnly
                />{' '}
                タブ
              </label>
            </div>
          </div>
          <div className="mb-2">
            <span className="font-bold">"の有無</span>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="quotes"
                  value="true"
                  checked={quotes}
                  readOnly
                />{' '}
                あり
              </label>
              <label>
                <input
                  type="radio"
                  name="quotes"
                  value="false"
                  checked={!quotes}
                  readOnly
                />{' '}
                なし
              </label>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold">項目名術行</span>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="includeHeaders"
                  value="true"
                  checked={includeHeaders}
                  readOnly
                />{' '}
                あり
              </label>
              <label>
                <input
                  type="radio"
                  name="includeHeaders"
                  value="false"
                  checked={!includeHeaders}
                  readOnly
                />{' '}
                なし
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            OK
          </button>
          <button onClick={onCancel} className="border px-4 py-2 rounded">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSVExportModal;