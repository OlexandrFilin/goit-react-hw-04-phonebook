import css from 'components/Filter/Filter.module.css';

export const Filter = ({ handleFilter, filter }) => {
  const onChange = event => {
    handleFilter(event);
  };
  return (
    <label className={css.labelFltr}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        className={css.inpfiltr}
        onChange={onChange}
        placeholder="Filter by name"
      />
    </label>
  );
};
