import React from 'react';

// 型定義
interface SearchFormProps {
  year: string;
  onSearch: (criteria: SearchCriteria) => void;
  onClear: () => void;
  onCancel: () => void;
}

interface SearchCriteria {
  section: string;
  subSection: string;
  detail: string;
  keyword: string;
}

// コンポーネント
const SearchForm: React.FC<SearchFormProps> = ({ year, onSearch, onClear, onCancel }) => {
  const [criteria, setCriteria] = React.useState<SearchCriteria>({
    section: '',
    subSection: '',
    detail: '',
    keyword: '',
  });

  // 入力変更ハンドラー
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <span className="mr-2">{`令和${year}年度`}</span>
        <button className="px-4 py-2 bg-gray-200 rounded">科目検索</button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <label className="mr-2">節</label>
          <input
            type="text"
            name="section"
            value={criteria.section}
            onChange={handleChange}
            className="w-20 p-1 border rounded"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">細節</label>
          <input
            type="text"
            name="subSection"
            value={criteria.subSection}
            onChange={handleChange}
            className="w-20 p-1 border rounded"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">明細</label>
          <input
            type="text"
            name="detail"
            value={criteria.detail}
            onChange={handleChange}
            className="w-20 p-1 border rounded"
          />
        </div>
        <div>
          <label className="block">名称/摘要検索文字</label>
          <input
            type="text"
            name="keyword"
            value={criteria.keyword}
            onChange={handleChange}
            className="w-full p-1 border rounded"
          />
        </div>
        <button
          onClick={() => onSearch(criteria)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          表示
        </button>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onClear} className="px-4 py-2 border rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 border rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
