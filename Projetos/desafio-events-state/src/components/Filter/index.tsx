import { useState } from 'react';
import IFilterProps from '../../interfaces/IFilterProps';
import './styles.css';

function Filter({ onSearch }: IFilterProps) {
  const [filterValues, setFilterValues] = useState<{ min: number | ""; max: number | "" }>({
    min: "",
    max: ""
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(Number(filterValues.min), Number(filterValues.max));
    
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFilterValues({ ...filterValues, [name]: value });
  }

  return (
    <form className="filter-container" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="filter-input"
        type="text"
        placeholder="Preço mínimo"
        name="min"
        onChange={handleChange}
        value={filterValues.min || ""}
      />
      <input
        autoComplete="off"
        className="filter-input"
        type="text"
        placeholder="Preço máximo"
        onChange={handleChange}
        name="max"
        value={filterValues.max || ""}
      />
      <button
        className="filter-btn"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
