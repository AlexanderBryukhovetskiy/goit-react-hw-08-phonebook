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
    <form className={css.filterForm}>
      <label className={css.filterLabel}>Find contact by name
        <input
        className={css.filterInput}
        type="text"
        onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default Filter;


