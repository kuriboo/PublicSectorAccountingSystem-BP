import React from 'react';

// 型定義
type YosanFormProps = {
  initialDate?: string;
  initialYosanNoStart?: string;
  initialYosanNoEnd?: string;
  onSubmit: (data: {
    date: string;
    yosanNoStart: string;
    yosanNoEnd: string;
    kettei: boolean;
    tekikaku: 'zenbu' | 'block' | 'segment';
    segmentValue?: string;
  }) => void;
};

const YosanForm: React.FC<YosanFormProps> = ({
  initialDate = '',
  initialYosanNoStart = '',
  initialYosanNoEnd = '',
  onSubmit,
}) => {
  // フォームの状態管理
  const [date, setDate] = React.useState(initialDate);
  const [yosanNoStart, setYosanNoStart] = React.useState(initialYosanNoStart);
  const [yosanNoEnd, setYosanNoEnd] = React.useState(initialYosanNoEnd);
  const [kettei, setKettei] = React.useState(false);
  const [tekikaku, setTekikaku] = React.useState<'zenbu' | 'block' | 'segment'>('zenbu');
  const [segmentValue, setSegmentValue] = React.useState('');

  // フォームの送信時処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date,
      yosanNoStart,
      yosanNoEnd,
      kettei,
      tekikaku,
      segmentValue: tekikaku === 'zenbu' ? undefined : segmentValue,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg space-y-4">
      <div className="flex flex-col">
        <label className="mb-2">作表日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-2 py-1 border rounded"
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col mb-4 md:mb-0">
          <label className="mb-2">予算科目</label>
          <input
            type="text"
            value={yosanNoStart}
            onChange={(e) => setYosanNoStart(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">～</label>
          <input
            type="text"
            value={yosanNoEnd}
            onChange={(e) => setYosanNoEnd(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <label>
          <input
            type="radio"
            checked={kettei}
            onChange={() => setKettei(true)}
            className="mr-2"
          />
          する
        </label>
        <label>
          <input
            type="radio"
            checked={!kettei}
            onChange={() => setKettei(false)}
            className="mr-2"
          />
          しない
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <label>
          <input
            type="radio"
            value="zenbu"
            checked={tekikaku === 'zenbu'}
            onChange={() => setTekikaku('zenbu')}
            className="mr-2"
          />
          全体
        </label>
        <label>
          <input
            type="radio"
            value="block"
            checked={tekikaku === 'block'}
            onChange={() => setTekikaku('block')}
            className="mr-2"
          />
          ブロック
        </label>
        <label>
          <input
            type="radio"
            value="segment"
            checked={tekikaku === 'segment'}
            onChange={() => setTekikaku('segment')}
            className="mr-2"
          />
          セグメント
        </label>
      </div>
      {tekikaku !== 'zenbu' && (
        <div className="flex flex-col">
          <label className="mb-2">選択</label>
          <input
            type="text"
            value={segmentValue}
            onChange={(e) => setSegmentValue(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
      )}
      <div className="flex justify-end space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button type="reset" className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </form>
  );
};

export default YosanForm;
```