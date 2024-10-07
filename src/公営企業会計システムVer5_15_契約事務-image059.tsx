import React from 'react';
import { useState } from 'react';

type Option = {
  id: string;
  label: string;
};

type ContractExecutionProps = {
  years: Option[];
  categories: Option[];
  projects: Option[];
  initiators: Option[];
  documents: Option[];
  notes: Option[];
};

const ContractExecution: React.FC<ContractExecutionProps> = ({
  years,
  categories,
  projects,
  initiators,
  documents,
  notes,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>(years[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [selectedInitiator, setSelectedInitiator] = useState<string>(initiators[0].id);
  const [selectedDocument, setSelectedDocument] = useState<string>(documents[0].id);
  const [selectedNote, setSelectedNote] = useState<string>(notes[0].id);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <label htmlFor="year" className="font-semibold">年度</label>
          <select id="year" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {years.map((year) => (
              <option key={year.id} value={year.id}>{year.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="category" className="font-semibold">受付区分</label>
          <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 border p-2">
        <p className="font-semibold">物件</p>
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox"
            onChange={(e) => setSelectedProjects(e.target.checked ? projects.map(p => p.id) : [])}
          />
          <span>全選択</span>
        </div>
        <select
          multiple
          value={selectedProjects}
          onChange={(e) => setSelectedProjects(Array.from(e.target.selectedOptions, option => option.value))}
          className="w-full"
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>{project.label}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 space-y-2">
        <div>
          <label htmlFor="initiator" className="font-semibold">起案者</label>
          <select id="initiator" value={selectedInitiator} onChange={(e) => setSelectedInitiator(e.target.value)}>
            {initiators.map((initiator) => (
              <option key={initiator.id} value={initiator.id}>{initiator.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="document" className="font-semibold">添付書類</label>
          <select id="document" value={selectedDocument} onChange={(e) => setSelectedDocument(e.target.value)}>
            {documents.map((doc) => (
              <option key={doc.id} value={doc.id}>{doc.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="note" className="font-semibold">備考</label>
          <select id="note" value={selectedNote} onChange={(e) => setSelectedNote(e.target.value)}>
            {notes.map((note) => (
              <option key={note.id} value={note.id}>{note.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-3">
        <button className="bg-gray-300 px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ContractExecution;
