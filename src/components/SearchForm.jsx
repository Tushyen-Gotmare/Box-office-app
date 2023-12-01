
import { useState } from 'react';
import CustomRadio from './CustomRadio';

import {useSearchStr} from "../lib/useSearchStr"
const SearchForm = ({onSearch}) => {

    const [searchStr, setSearchStr] = useSearchStr();
    const [searchOption, setSearchOption] = useState('shows');
    

    

    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value);
      };
    
      const onRadioChange = ev => {
         
        setSearchOption(ev.target.value)
      }

      const onSubmit = (ev) => {
       
        ev.preventDefault()

        const option = {
            q: searchStr,
            searchOption
        }
        onSearch(option);
      }
  return (
    <>

    <form onSubmit={onSubmit}>
    <input type="text" value={searchStr} onChange={onSearchInputChange} />

    <CustomRadio
     label="Shows" type="radio" name="search-option" value="shows" checked={ searchOption === 'shows'} onChange={onRadioChange}
    />
    <CustomRadio
    
  label="Actors"
  name="search-option" value="actors" checked={ searchOption === 'actors'} onChange={onRadioChange}/>
    
    <button type="submit">Search</button>
  </form>
  </>
  );
}

export default SearchForm ;