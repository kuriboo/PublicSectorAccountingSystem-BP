import React from 'react';

type UpdateHeaderProps = {
  departmentName: string;
  responsiblePerson: string;
  date: string;
};

type YearUpdateProps = {
  updateYear: string;
  updatePeriod: string;
  onOk: () => void;
  onCancel: () => void;
};

const UpdateHeader: React.FC<UpdateHeaderProps> = ({ departmentName, responsiblePerson, date }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 text-blue-900">
      <div className="text-2xl">年次更新</div>
      <div className="text-right">
        <div>{departmentName}</div>
        <div>{responsiblePerson}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

const YearUpdate: React.FC<YearUpdateProps> = ({ updateYear, updatePeriod, onOk, onCancel }) => {
  return (
    <div className="p-8">
      <div className="flex justify-center items-center text-xl text-blue-900 mb-10">
        <div>更新年度</div>
        <div className="mx-4">{updateYear}</div>
        <div>{updatePeriod}</div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-gray-300 text-black hover:bg-gray-400 rounded transition"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-black hover:bg-gray-400 rounded transition"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export { UpdateHeader, YearUpdate };
