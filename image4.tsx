import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-1 border rounded bg-blue-500 text-white hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
        className="form-checkbox"
      />
      <span>{label}</span>
    </label>
  );
};

interface DropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  return (
    <select 
      value={selected} 
      onChange={(e) => onChange(e.target.value)} 
      className="form-select mt-1 block w-full"
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

interface SystemSettingProps {
  buttons: { label: string; onClick: () => void; }[];
  checkboxes: { label: string; checked: boolean; onChange: (checked: boolean) => void; }[];
  dropdowns: { options: string[]; selected: string; onChange: (value: string) => void; }[];
}

const SystemSetting: React.FC<SystemSettingProps> = ({ buttons, checkboxes, dropdowns }) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      {/* Buttons */}
      <div className="mb-4">
        {buttons.map((button, index) => (
          <Button key={index} label={button.label} onClick={button.onClick} />
        ))}
      </div>
      
      {/* Checkboxes */}
      <div className="mb-4">
        {checkboxes.map((checkbox, index) => (
          <Checkbox 
            key={index} 
            label={checkbox.label} 
            checked={checkbox.checked} 
            onChange={checkbox.onChange} 
          />
        ))}
      </div>

      {/* Dropdowns */}
      <div className="mb-4">
        {dropdowns.map((dropdown, index) => (
          <Dropdown 
            key={index} 
            options={dropdown.options} 
            selected={dropdown.selected} 
            onChange={dropdown.onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SystemSetting;