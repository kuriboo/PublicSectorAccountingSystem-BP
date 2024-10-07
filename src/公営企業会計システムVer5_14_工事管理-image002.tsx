import React, { FC } from 'react';

// 定義されるプロパティの型
interface ProjectFormProps {
  fiscalYear: string;
  projectNumber: string;
  projectName: string;
  location: string;
  onFiscalYearChange: (value: string) => void;
  onProjectNumberChange: (value: string) => void;
  onCompleteFlagChange: (complete: boolean) => void;
  onSubmissionFlagChange: (submitted: boolean) => void;
  onTemporaryConstructionFlagChange: (temporary: boolean) => void;
  onAmountsChange: (name: string, value: string) => void;
}

const ProjectForm: FC<ProjectFormProps> = ({
  fiscalYear,
  projectNumber,
  projectName,
  location,
  onFiscalYearChange,
  onProjectNumberChange,
  onCompleteFlagChange,
  onSubmissionFlagChange,
  onTemporaryConstructionFlagChange,
  onAmountsChange,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">工事台帳保守</h2>

      {/* 工事台帳年度 */}
      <div className="mb-4">
        <label className="mr-2">工事台帳年度</label>
        <select value={fiscalYear} onChange={(e) => onFiscalYearChange(e.target.value)} className="border p-1">
          <option value="平成29">平成29</option>
          {/* 他の選択肢を追加 */}
        </select>
      </div>

      {/* 工事台帳番号 */}
      <div className="mb-4">
        <label className="mr-2">工事台帳番号</label>
        <input
          type="text"
          value={projectNumber}
          onChange={(e) => onProjectNumberChange(e.target.value)}
          className="border p-1"
        />
      </div>

      {/* 工事名 */}
      <div className="mb-4">
        <label>工事名称: {projectName}</label>
      </div>

      {/* 工事場所 */}
      <div className="mb-4">
        <label>工事場所: {location}</label>
      </div>

      {/* 工事完成フラグ */}
      <div className="mb-4">
        <label>工事完成フラグ</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="completeFlag"
              checked={false}
              onChange={() => onCompleteFlagChange(false)}
            />
            未完成
          </label>
          <label>
            <input
              type="radio"
              name="completeFlag"
              checked={true}
              onChange={() => onCompleteFlagChange(true)}
            />
            完成
          </label>
        </div>
      </div>

      {/* 未工事完成移分フラグ */}
      <div className="mb-4">
        <label>未工事完成移分フラグ</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="submissionFlag"
              checked={false}
              onChange={() => onSubmissionFlagChange(false)}
            />
            移分無
          </label>
          <label>
            <input
              type="radio"
              name="submissionFlag"
              checked={true}
              onChange={() => onSubmissionFlagChange(true)}
            />
            移分有
          </label>
        </div>
      </div>

      {/* 建設仮勘定フラグ */}
      <div className="mb-4">
        <label>建設仮勘定フラグ</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="temporaryFlag"
              checked={false}
              onChange={() => onTemporaryConstructionFlagChange(false)}
            />
            資産
          </label>
          <label>
            <input
              type="radio"
              name="temporaryFlag"
              checked={true}
              onChange={() => onTemporaryConstructionFlagChange(true)}
            />
            建仮残
          </label>
        </div>
      </div>

      {/* 金額入力フィールド */}
      <div className="grid grid-cols-2 gap-2">
        {["直接計上額", "特定経費", "事務費1", "事務費2", "事務費3", "過年度移分対象額", "過年度事務費1", "過年度事務費2", "過年度事務費3", "固定資産計上済額"].map((label) => (
          <div key={label} className="mb-2">
            <label className="mr-2">{label}</label>
            <input
              type="text"
              onChange={(e) => onAmountsChange(label, e.target.value)}
              className="border p-1"
            />
          </div>
        ))}
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded mr-2">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ProjectForm;
