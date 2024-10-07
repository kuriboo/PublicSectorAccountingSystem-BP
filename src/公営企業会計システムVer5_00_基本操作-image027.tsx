// components/FaqPage.tsx

import React from 'react';

type FaqPageProps = {
  title: string;
  searchPlaceholder: string;
  categories: {
    name: string;
    count: number;
  }[];
  commonQuestions: string[];
  noticeDate: string;
  noticeText: string;
  noticeDetails: string;
};

const FaqPage: React.FC<FaqPageProps> = ({
  title,
  searchPlaceholder,
  categories,
  commonQuestions,
  noticeDate,
  noticeText,
  noticeDetails,
}) => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">{title}</h1>
      </header>
      <main className="p-4 space-y-6">
        {/* Search Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold text-blue-600">疑問はこちらから</h2>
          <div className="mt-2 flex items-center border-b border-gray-300">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="flex-grow p-2 focus:outline-none"
            />
            <button className="p-2">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold text-blue-600">カテゴリから検索できます</h2>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {categories.map((category, index) => (
              <button key={index} className="border p-2 flex justify-between items-center">
                <span>{category.name}</span>
                <span>{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Common Questions Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold text-blue-600">よくある質問</h2>
          <ul className="mt-2 space-y-1">
            {commonQuestions.map((question, index) => (
              <li key={index} className="text-gray-700">
                {question}
              </li>
            ))}
          </ul>
        </div>

        {/* Notice Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold text-blue-600">お知らせ</h2>
          <div className="mt-2 flex justify-between items-center">
            <span>{noticeDate}</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded">{noticeText}</span>
          </div>
          <p className="mt-2 text-gray-700">{noticeDetails}</p>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
