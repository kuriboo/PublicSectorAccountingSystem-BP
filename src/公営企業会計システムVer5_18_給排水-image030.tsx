import React from 'react';

type FormProps = {
  yearOptions: string[];
  paymentDivisions: { code: string; name: string }[];
  paymentTypes: { code: string; label: string }[];
  outputPositions: string[];
  slipContent: string;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const PaymentForm: React.FC<FormProps> = ({
  yearOptions,
  paymentDivisions,
  paymentTypes,
  outputPositions,
  slipContent,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">納付分類マスタ</h2>
      <form className="space-y-4">
        <div className="flex items-center space-x-4">
          <label>
            受付年度:
            <select className="ml-2 border" defaultValue={yearOptions[0]}>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label>
            納付分類区分:
            <input type="text" className="ml-2 border" />
          </label>
        </div>

        <label>
          納付分類区分名:
          <select className="ml-2 border">
            {paymentDivisions.map((division) => (
              <option key={division.code} value={division.code}>
                {division.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          納付書区分:
          <select className="ml-2 border">
            {paymentTypes.map((type) => (
              <option key={type.code} value={type.code}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center space-x-4">
          <label>
            帳票出力区分:
            <input type="radio" name="outputDiv" value="0" /> 0条予算
            <input type="radio" name="outputDiv" value="4" className="ml-2" /> 4条予算
          </label>

          <label>
            帳票出力位置:
            <select className="ml-2 border" defaultValue={outputPositions[0]}>
              {outputPositions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <button type="button" className="bg-blue-500 text-white px-3 py-1" onClick={onSubmit}>
            OK
          </button>
          <button type="button" className="bg-gray-500 text-white px-3 py-1" onClick={onClear}>
            クリア
          </button>
          <button type="button" className="bg-red-500 text-white px-3 py-1" onClick={onEnd}>
            終了
          </button>
        </div>
      </form>
      <div className="mt-4 bg-white border p-4">
        <p>仕訳コード: 000005</p>
        <p>仕訳内容: {slipContent}</p>
      </div>
    </div>
  );
};

export default PaymentForm;
```