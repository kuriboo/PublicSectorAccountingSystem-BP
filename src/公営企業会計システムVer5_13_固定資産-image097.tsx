// imports and type definitions
import React from "react";

type AssetFormProps = {
  assetNumber: string;
  assetName: string;
  location: string;
  area: string;
  constructionYear: string;
  completionDate: string;
  department: string;
  constructionCode: string;
  summary: string;
  accountType: string;
  partnerType: "normal" | "temporary";
  partnerCode: string;
  partnerName: string;
  belonging: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber,
  assetName,
  location,
  area,
  constructionYear,
  completionDate,
  department,
  constructionCode,
  summary,
  accountType,
  partnerType,
  partnerCode,
  partnerName,
  belonging,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium">
          資産番号
          <input
            type="text"
            className="input"
            defaultValue={assetNumber}
          />
        </label>
        <label className="block text-sm font-medium">
          資産名称
          <input
            type="text"
            className="input"
            defaultValue={assetName}
          />
        </label>
        <label className="block text-sm font-medium">
          所在地
          <input
            type="text"
            className="input"
            defaultValue={location}
          />
        </label>
        <label className="block text-sm font-medium">
          地区
          <input
            type="text"
            className="input"
            defaultValue={area}
          />
        </label>
        <label className="block text-sm font-medium">
          施工年度
          <input
            type="text"
            className="input"
            defaultValue={constructionYear}
          />
        </label>
        <label className="block text-sm font-medium">
          竣工年月日
          <input
            type="text"
            className="input"
            defaultValue={completionDate}
          />
        </label>
        <label className="block text-sm font-medium">
          部門
          <input
            type="text"
            className="input"
            defaultValue={department}
          />
        </label>
        <label className="block text-sm font-medium">
          施設
          <input
            type="text"
            className="input"
            defaultValue={constructionCode}
          />
        </label>
        <label className="block text-sm font-medium">
          摘要
          <input
            type="text"
            className="input"
            defaultValue={summary}
          />
        </label>
        <label className="block text-sm font-medium">
          会計区分
          <select className="input" defaultValue={accountType}>
            <option value="実登録用">実登録用</option>
            <option value="その他">その他</option>
          </select>
        </label>
        <div className="block text-sm font-medium">
          業者
          <label>
            <input
              type="radio"
              name="partnerType"
              value="normal"
              defaultChecked={partnerType === "normal"}
            />
            通常相手先
          </label>
          <label>
            <input
              type="radio"
              name="partnerType"
              value="temporary"
              defaultChecked={partnerType === "temporary"}
            />
            一時相手先
          </label>
        </div>
        <label className="block text-sm font-medium">
          業者コード
          <input
            type="text"
            className="input"
            defaultValue={partnerCode}
          />
        </label>
        <label className="block text-sm font-medium">
          業者名
          <input
            type="text"
            className="input"
            defaultValue={partnerName}
          />
        </label>
        <label className="block text-sm font-medium">
          所属
          <input
            type="text"
            className="input"
            defaultValue={belonging}
          />
        </label>
      </div>

      <div className="flex justify-end space-x-4 mt-4">
        <button
          className="btn"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="btn"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="btn"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetForm;
```

```css
/* Assuming you are using Tailwind CSS */
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
}

.btn {
  background-color: #ddd;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}
```