```tsx
import { FC } from 'react';

// TypeScriptの型定義
type ComponentProps = {
  processingYear: string;
  selectYear: string;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント定義
const MasterSettingsComponent: FC<ComponentProps> = ({
  processingYear,
  selectYear,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <header className="flex justify-between items-center bg-purple-200 p-2 rounded-md">
        <h1 className="text-lg">科目別振替性質マスター一括編集</h1>
        <div>
          <p>決算統計処理年度: {processingYear}</p>
          <p>年度: {selectYear}</p>
        </div>
      </header>

      <section className="mt-4">
        <h2 className="text-md font-bold">処理概要</h2>
        <p className="mt-2">決算統計処理年度における科目別振替性質マスター～</p>
      </section>

      <section className="mt-4">
        <h2 className="text-md font-bold">マスターデータ出力</h2>
        <p className="mt-2">「科目別振替性質細… すべての科目の細…</p>
        <div className="mt-2">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            振替・性質分類マスタ
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            予算・仕訳科目マスタ
          </label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="radio" className="mr-2" name="output" />
              する
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="radio" className="mr-2" name="output" />
              しない
            </label>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-md font-bold">マスターデータ取り込み</h2>
        <p className="mt-2">「科目別振替性質～</p>
        <div className="mt-2">
          <button className="px-4 py-2 bg-gray-300 rounded-md">取り込</button>
        </div>
      </section>

      <footer className="flex justify-end mt-4">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md">終了</button>
      </footer>
    </div>
  );
};

export default MasterSettingsComponent;
```