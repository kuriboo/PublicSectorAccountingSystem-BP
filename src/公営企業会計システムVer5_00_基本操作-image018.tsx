import React from 'react';

type NoticeProps = {
  mainOfficeNotice: string;
  managementNotice: string;
  schedule: string[];
};

const Notice: React.FC<NoticeProps> = ({ mainOfficeNotice, managementNotice, schedule }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">お知らせ情報</h2>
      <div className="mb-4">
        <h3 className="font-semibold">会計担当からお知らせ</h3>
        <p className="text-sm">{mainOfficeNotice}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">管理課からのお知らせ</h3>
        <p className="text-sm">{managementNotice}</p>
        <ul className="list-disc list-inside mt-2">
          {schedule.map((item, index) => (
            <li key={index} className="text-sm">{item}</li>
          ))}
        </ul>
      </div>
      <button className="mt-4 px-4 py-2 bg-gray-300 text-black rounded">終了</button>
    </div>
  );
};

export default Notice;

// 使用例（プロパティの例）
/*
<Notice
  mainOfficeNotice="今月の会計締処理は〇日（△）となります。伝票提出漏れがないようよろしくお願いいたします。"
  managementNotice="電気設備点検を、以下の日程で実施いたします。"
  schedule={[
    '9月2日（土）　　本庁舎 3日（日）を予備日とします。',
    '9月9日（土）　　西庁舎 10日（日）を予備日とします。',
    '9月16日（土）　 東庁舎 17日（日）を予備日とします。',
    '9月23日（土）　 上記以外の庁舎 24日（日）を予備日とします。'
  ]}
/>
*/
```