import React from 'react';

type Props = {
  fiscalYear: string;
  migrationDate: string;
  filePath: string;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AssetImportComponent: React.FC<Props> = ({
  fiscalYear,
  migrationDate,
  filePath,
  onFileUpload,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-xl font-bold mb-4">固定資産コンパート</header>
      <div className="mb-2">
        <label className="mr-2 font-semibold">当期会計年度:</label>
        <span>{fiscalYear}</span>
      </div>
      <div className="mb-4">
        <label className="mr-2 font-semibold">異動年月日:</label>
        <span>{migrationDate}</span>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">ファイル:</label>
        <input
          type="file"
          className="border rounded p-1"
          onChange={onFileUpload}
        />
        <span className="ml-2">{filePath}</span>
      </div>
      <div className="border rounded p-4 bg-gray-100 text-sm mb-4">
        <p>固定資産情報をファイルから取込、登録を行います。</p>
        <p>ZIP圧縮されたファイルのみ取込めます。取込むファイルについては専用のEXCELファイル（原票）から作成してください。</p>
        {/* More instructions can be added here */}
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 rounded bg-blue-500 text-white" onClick={onOk}>
          OK
        </button>
        <button className="px-4 py-2 rounded bg-yellow-500 text-white" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 rounded bg-red-500 text-white" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetImportComponent;