```tsx
import React from 'react';

type KeiyakuDetailProps = {
  nendo: string;
  futanBango: number;
  henkokan: number;
  shiharaiShubetsu: string;
  nendoYotei: string;
  hofuDate: string;
  seikyuYearMonth: string;
  keisaiShutsui: string;
  seikyusha: string;
  kojmei: string;
  summary: string;
  chakushuDate: string;
  aitesaki: string;
  nohinDate: string;
  keiyakuDate: string;
  jikan: string;
  keiyakuHoho: string;
  keiyakuBango: string;
  maeBunrui: string;
  hoshonin: string;
  bunkazu: number;
  kosuto: number;
  honWakaba: number;
  zeinashi: number;
};

const KeiyakuDetail: React.FC<KeiyakuDetailProps> = ({
  nendo,
  futanBango,
  henkokan,
  shiharaiShubetsu,
  nendoYotei,
  hofuDate,
  seikyuYearMonth,
  keisaiShutsui,
  seikyusha,
  kojmei,
  summary,
  chakushuDate,
  aitesaki,
  nohinDate,
  keiyakuDate,
  jikan,
  keiyakuHoho,
  keiyakuBango,
  maeBunrui,
  hoshonin,
  bunkazu,
  kosuto,
  honWakaba,
  zeinashi
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">契約詳細</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p>年度: {nendo}</p>
          <p>負担番号: {futanBango}</p>
          <p>変更回数: {henkokan}</p>
          <p>支払種別: {shiharaiShubetsu}</p>
          <p>予定年度: {nendoYotei}</p>
          <p>負担処理日: {hofuDate}</p>
          <p>起案所属: {seikyuYearMonth}</p>
          <p>起案者: {keisaiShutsui}</p>
          <p>工事名場所: {kojmei}</p>
        </div>
        <div>
          <p>摘要: {summary}</p>
          <p>着手年月日: {chakushuDate}</p>
          <p>相手先: {aitesaki}</p>
          <p>納期年月日: {nohinDate}</p>
          <p>契約年月日: {keiyakuDate}</p>
          <p>期間: {jikan}</p>
          <p>契約方法: {keiyakuHoho}</p>
          <p>契約番号: {keiyakuBango}</p>
          <p>前私分類: {maeBunrui}</p>
          <p>契約保証人: {hoshonin}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">支払詳細</h3>
      <ul className="mb-4">
        <li>予算分節数: {bunkazu}</li>
        <li>合計負担額: {kosuto}</li>
        <li>合計本体額: {honWakaba}</li>
        <li>合計消費税額: {zeinashi}</li>
      </ul>
    </div>
  );
};

export default KeiyakuDetail;
```