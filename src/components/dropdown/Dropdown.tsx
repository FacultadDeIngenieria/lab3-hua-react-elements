import React, { useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';

interface DropdownProps {
  options: Option[];
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  name?: string;
  defaultValue?: any;
  placeholder?: string;
  multi?: boolean;
}

export type Option = {
  value: string;
  label: string;
};

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: '#2E3092',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#2E3092',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: '#2E3092',
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: '#2E3092',
  }),
};

const Dropdown = (props: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  return (
    <div className="dropdownContainer">
      <Select
        className="select"
        classNamePrefix="select"
        placeholder={props.placeholder}
        value={selectedOption}
        onChange={(selected) => setSelectedOption(selected as Option | null)}
        options={props.options}
        isDisabled={props.disabled}
        isLoading={props.loading}
        isClearable={props.clearable}
        isSearchable={props.searchable}
        name={props.name}
        defaultValue={props.defaultValue}
        isMulti={props.multi}
        styles={customStyles}
      />
    </div>
  );
};

export default Dropdown;
