import searchIcon from './assets/searchIcon.svg';
import { ChangeEvent } from "react";
import { SearchFieldProps } from './interface';

import "./style.css";

function SearchField(props: SearchFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className='search-field'>
        <input
            type="text"
            placeholder="Search for Brewings"
            name="search"
            onChange={handleChange}
            className='search-field-input'
        />
        <img  src={searchIcon} className='search-field-icon' alt="" />
    </div>
  );
}

export default SearchField;
