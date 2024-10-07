import React from 'react';

interface FormProps {
    accountYear: string;
    registrationType: string;
    formNumber: string;
    itemName1: string;
    itemName2: string;
    onSubmit: () => void;
    onCancel: () => void;
}

const CustomForm: React.FC<FormProps> = ({
    accountYear,
    registrationType,
    formNumber,
    itemName1,
    itemName2,
    onSubmit,
    onCancel
}) => {
    return (
        <div className="p-4 bg-gray-100">
            <div className="text-lg font-bold">作表制御表集計科目登録</div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">会計年度</label>
                <input
                    type="text"
                    value={accountYear}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">作表制御表区分</label>
                <input
                    type="text"
                    value={formNumber}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">項目名称1</label>
                <input
                    type="text"
                    value={itemName1}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">項目名称2</label>
                <input
                    type="text"
                    value={itemName2}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    クリア
                </button>
                <button
                    onClick={onSubmit}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default CustomForm;