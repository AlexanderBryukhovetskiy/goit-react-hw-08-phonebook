import React from "react";
import css from "./Filter.module.css";
import { filterChange } from "redux/filter/filterSlice";
import { useDispatch } from "react-redux";


const Filter = () => {

  const dispatch = useDispatch();

  const handleChange = (event) =>{
 
    const filterValue = event.currentTarget.value.trim();
    console.log("filterValue :" , filterValue);

    dispatch(filterChange(filterValue));
  }

  return (
    <div className={css.searchInput}>
      <label>Find contact by name
        <input
        type="text"
        onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default Filter;


