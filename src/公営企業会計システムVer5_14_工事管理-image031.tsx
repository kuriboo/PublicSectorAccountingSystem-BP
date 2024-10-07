// Import necessary modules from React and Next.js
import React from 'react';

// Define the types for the component's props
type Project {
  number: number;
  name: string;
  location: string;
  flag: string;
  fiscalYear: string;
}

type ProjectInputProps = {
  title: string;
  fiscalYearLabel: string;
  editButtonLabel: string;
  projects: Project[];
  onEditClick: () => void;
  onSelectFiscalYear: (year: string) => void;
};

// Define the ProjectInput component
const ProjectInput: React.FC<ProjectInputProps> = ({
  title,
  fiscalYearLabel,
  editButtonLabel,
  projects,
  onEditClick,
  onSelectFiscalYear,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <header className="bg-blue-900 text-white p-2">
        <h1>{title}</h1>
      </header>
      <div className="flex items-center mt-2">
        <label className="mr-2">{fiscalYearLabel}:</label>
        <select
          className="p-1 border"
          onChange={(e) => onSelectFiscalYear(e.target.value)}
        >
          <option>平成29</option>
          {/* Add more options as necessary */}
        </select>
        <button className="ml-4 bg-gray-300 p-1" onClick={onEditClick}>
          {editButtonLabel}
        </button>
      </div>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-1">工事台帳番号</th>
            <th className="border p-1">工事名称</th>
            <th className="border p-1">工事場所</th>
            <th className="border p-1">フラグ</th>
            <th className="border p-1">按分年度</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.number}>
              <td className="border p-1">{project.number}</td>
              <td className="border p-1">{project.name}</td>
              <td className="border p-1">{project.location}</td>
              <td className="border p-1">{project.flag}</td>
              <td className="border p-1">{project.fiscalYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectInput;
