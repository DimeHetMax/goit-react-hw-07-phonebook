import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
// import { filterChange } from 'redux/actions';
import { filterChange } from 'redux/filterSlice';
import css from "./Filter.module.css"

export const Filter = ()=>{
  const filter =  useSelector(getFilter)
  const dispatch = useDispatch()

  const handleFilterChange = (event) => {
    const handleFilter = event.target.value.toLowerCase();
    dispatch(filterChange(handleFilter))
  }
  return (
          <input
            className={css.inputs}
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search by name"
          />
        );
}

