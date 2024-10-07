// Import necessary packages
import { useState } from 'react'

// Define TypeScript types for props
type SearchFormProps = {
  onSubmit: (data: SearchData) => void;
}

// Define TypeScript type for form data
type SearchData = {
  year: string;
  invoiceNumber: string;
  section: string;
  subSection: string;
  details: string;
  creditor: string;
  appointmentDate: string;
  constructionStore: string;
  summary: string;
  status: Status;
}

// Define TypeScript enum for status
enum Status {
  NotPaid = '未入金',
  Paid = '入金済',
  All = 'すべて'
}

// Functional component
const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  // State for form data
  const [formData, setFormData] = useState<SearchData>({
    year: '',
    invoiceNumber: '',
    section: '',
    subSection: '',
    details: '',
    creditor: '',
    appointmentDate: '',
    constructionStore: '',
    summary: '',
    status: Status.All,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 border border-gray-300 rounded-md">
      {/* Input fields and labels */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">年度</label>
          <input 
            type="text" 
            name="year" 
            value={formData.year} 
            onChange={handleChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">調定番号</label>
          <input 
            type="text" 
            name="invoiceNumber" 
            value={formData.invoiceNumber} 
            onChange={handleChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">節</label>
          <input 
            type="text" 
            name="section" 
            value={formData.section} 
            onChange={handleChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">細節</label>
          <input 
            type="text" 
            name="subSection" 
            value={formData.subSection} 
            onChange={handleChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">明細</label>
          <input 
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">債務者</label>
          <input
            type="text"
            name="creditor"
            value={formData.creditor}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">調定日</label>
          <input
            type="text"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">工事店</label>
          <input
            type="text"
            name="constructionStore"
            value={formData.constructionStore}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">摘要</label>
          <input
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="col-span-2 flex items-center space-x-4">
          <span className="block text-sm font-medium">区分</span>
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value={Status.NotPaid}
              checked={formData.status === Status.NotPaid}
              onChange={handleChange}
              className="form-radio"
            />
            <span>未入金</span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value={Status.Paid}
              checked={formData.status === Status.Paid}
              onChange={handleChange}
              className="form-radio"
            />
            <span>入金済</span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value={Status.All}
              checked={formData.status === Status.All}
              onChange={handleChange}
              className="form-radio"
            />
            <span>すべて</span>
          </label>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
        >
          表示
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-md shadow hover:bg-gray-400"
        >
          クリア
        </button>
      </div>
    </form>
  )
}

export default SearchForm;
