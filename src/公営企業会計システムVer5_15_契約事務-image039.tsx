import React from 'react';

type SelectionOption = {
  value: string;
  label: string;
};

type FormData = {
  era: string;
  year: string;
  division: string;
  items: string[];
  selectAll: boolean;
  startDate: string;
  decisionDate: string;
  initiator: string;
  attachmentType: string;
  notes: string[];
  remarks: string[];
};

type Props = {
  eraOptions: SelectionOption[];
  divisionOptions: SelectionOption[];
  items: SelectionOption[];
  initiatorOptions: SelectionOption[];
  attachmentTypeOptions: SelectionOption[];
  onSubmit: (data: FormData) => void;
};

const BidExecutionForm: React.FC<Props> = ({
  eraOptions,
  divisionOptions,
  items,
  initiatorOptions,
  attachmentTypeOptions,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    era: '',
    year: '',
    division: '',
    items: [],
    selectAll: false,
    startDate: '',
    decisionDate: '',
    initiator: '',
    attachmentType: '',
    notes: ['', '', ''],
    remarks: ['', '', ''],
  });

  const handleChange = (
    key: keyof FormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label className="block mb-2">年度</label>
        <select
          value={formData.era}
          onChange={(e) => handleChange('era', e.target.value)}
          className="border rounded p-2"
        >
          {eraOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={formData.year}
          onChange={(e) => handleChange('year', e.target.value)}
          className="border rounded p-2 ml-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">受付区分</label>
        <select
          value={formData.division}
          onChange={(e) => handleChange('division', e.target.value)}
          className="border rounded p-2"
        >
          {divisionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">物件</label>
        {items.map((item) => (
          <div key={item.value}>
            <input
              type="checkbox"
              value={item.value}
              checked={formData.items.includes(item.value)}
              onChange={() =>
                handleChange(
                  'items',
                  !formData.items.includes(item.value)
                    ? [...formData.items, item.value]
                    : formData.items.filter((i) => i !== item.value)
                )
              }
            />
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
        <div>
          <input
            type="checkbox"
            checked={formData.selectAll}
            onChange={() => handleChange('selectAll', !formData.selectAll)}
          />
          <span className="ml-2">全選択</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">起案年月日</label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) => handleChange('startDate', e.target.value)}
          className="border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">決裁年月日</label>
        <input
          type="date"
          value={formData.decisionDate}
          onChange={(e) => handleChange('decisionDate', e.target.value)}
          className="border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">起案者</label>
        <select
          value={formData.initiator}
          onChange={(e) => handleChange('initiator', e.target.value)}
          className="border rounded p-2"
        >
          {initiatorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">添付書類</label>
        <select
          value={formData.attachmentType}
          onChange={(e) => handleChange('attachmentType', e.target.value)}
          className="border rounded p-2"
        >
          {attachmentTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">特記事項</label>
        {formData.notes.map((note, index) => (
          <input
            key={index}
            type="text"
            value={note}
            onChange={(e) =>
              handleChange(
                'notes',
                formData.notes.map((n, i) => (i === index ? e.target.value : n))
              )
            }
            className="border rounded p-2 mb-2 w-full"
          />
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-2">備考</label>
        {formData.remarks.map((remark, index) => (
          <input
            key={index}
            type="text"
            value={remark}
            onChange={(e) =>
              handleChange(
                'remarks',
                formData.remarks.map((r, i) =>
                  i === index ? e.target.value : r
                )
              )
            }
            className="border rounded p-2 mb-2 w-full"
          />
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setFormData({
            ...formData,
            items: [],
            selectAll: false,
            notes: ['', '', ''],
            remarks: ['', '', ''],
          })}
        >
          クリア
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => console.log('閉じる')}
        >
          終了
        </button>
      </div>
    </form>
  );
};

export default BidExecutionForm;
```