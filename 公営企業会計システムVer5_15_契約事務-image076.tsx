```tsx
import React from 'react'

// 型定義
type FormProps = {
  year: string
  section: string
  isEnvelopeMarked: boolean
  startNumber: string
  endNumber: string
  startDate: string
  endDate: string
  onSubmit: () => void
  onClear: () => void
  onClose: () => void
}

// コンポーネント定義
const ContractForm: React.FC<FormProps> = ({
  year,
  section,
  isEnvelopeMarked,
  startNumber,
  endNumber,
  startDate,
  endDate,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md space-y-4">
      {/* 年度と受付区分 */}
      <div className="flex space-x-4">
        <div>
          <label className="block">年度</label>
          <input
            type="text"
            value={year}
            className="border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>
        <div>
          <label className="block">受付区分</label>
          <select
            value={section}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="工事">工事</option>
            {/* 他の選択肢を追加可能 */}
          </select>
        </div>
      </div>

      {/* 落札率印字 */}
      <div className="flex space-x-4 items-center">
        <span>落札率印字</span>
        <label className="flex items-center">
          <input
            type="radio"
            name="isEnvelopeMarked"
            checked={isEnvelopeMarked}
            className="mr-2"
            readOnly
          />
          有
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="isEnvelopeMarked"
            checked={!isEnvelopeMarked}
            className="mr-2"
            readOnly
          />
          無
        </label>
      </div>

      {/* 受付番号 */}
      <div className="flex space-x-4">
        <div>
          <label className="block">受付番号</label>
          <input
            type="text"
            value={startNumber}
            className="border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>
        <span>〜</span>
        <div>
          <label className="block">受付番号</label>
          <input
            type="text"
            value={endNumber}
            className="border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>
      </div>

      {/* 契約年月日 */}
      <div className="flex space-x-4">
        <div>
          <label className="block">契約年月日</label>
          <input
            type="text"
            value={startDate}
            className="border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>
        <span>〜</span>
        <div>
          <label className="block">契約年月日</label>
          <input
            type="text"
            value={endDate}
            className="border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 py-2 px-4 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 py-2 px-4 rounded-md"
        >
          終了
        </button>
      </div>
    </div>
  )
}

export default ContractForm
```