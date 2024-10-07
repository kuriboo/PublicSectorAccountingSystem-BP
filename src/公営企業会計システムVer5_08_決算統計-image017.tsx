// types.ts
export interface HeaderProps {
  title: string;
  description: string;
  date: string;
}

export interface MainContentProps {
  fiscalYear: string;
  summary: string;
  buttonPrimaryLabel: string;
  buttonSecondaryLabel: string;
  buttonTertiaryLabel: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  onTertiaryClick: () => void;
}

// Header.tsx
import { FC } from 'react';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ title, description, date }) => (
  <div className="bg-indigo-100 py-4 px-6">
    <h1 className="text-xl font-semibold">{title}</h1>
    <p className="text-sm">{description}</p>
    <p className="text-right text-sm">{date}</p>
  </div>
);

// MainContent.tsx
import { FC } from 'react';
import { MainContentProps } from './types';

export const MainContent: FC<MainContentProps> = ({
  fiscalYear,
  summary,
  buttonPrimaryLabel,
  buttonSecondaryLabel,
  buttonTertiaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  onTertiaryClick
}) => (
  <div className="p-6">
    <div className="mb-4">
      <label htmlFor="fiscalYear" className="mr-2">集計年度</label>
      <input id="fiscalYear" type="text" value={fiscalYear} readOnly
        className="border border-gray-400 rounded p-1"/>
    </div>
    <div className="border p-4 mb-4">
      <h2 className="font-bold mb-2">処理概要</h2>
      <p className="text-sm">{summary}</p>
    </div>
    <div className="flex justify-end space-x-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={onPrimaryClick}>{buttonPrimaryLabel}</button>
      <button className="px-4 py-2 bg-gray-600 text-white rounded"
        onClick={onSecondaryClick}>{buttonSecondaryLabel}</button>
      <button className="px-4 py-2 bg-red-600 text-white rounded"
        onClick={onTertiaryClick}>{buttonTertiaryLabel}</button>
    </div>
  </div>
);

// App.tsx
import { FC } from 'react';
import { Header } from './Header';
import { MainContent } from './MainContent';

const App: FC = () => {
  return (
    <div className="font-sans">
      <Header 
        title="決算統計貸借対照表集計処理"
        description="行政市水道事業会計 総務課 予算・会計担当 さようせい太郎"
        date="平成29年08月06日" 
      />
      <MainContent
        fiscalYear="平成29年度"
        summary="決算統計貸借対照表を出力するための事前処理です。※あらかじめ損益計算書・貸借対照表マスタでの設定の確認、1000円丸め処理を行って下さい。"
        buttonPrimaryLabel="OK"
        buttonSecondaryLabel="クリア"
        buttonTertiaryLabel="終了"
        onPrimaryClick={() => alert('OK clicked')}
        onSecondaryClick={() => alert('クリア clicked')}
        onTertiaryClick={() => alert('終了 clicked')}
      />
    </div>
  );
};

export default App;
