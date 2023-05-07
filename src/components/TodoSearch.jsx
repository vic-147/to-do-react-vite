import "../styles/TodoSearch.css";

function TodoSearch({ search, setSearch, loading }) {
  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <input
      className="td-search"
      placeholder="Buscar 🍳"
      minLength={"3"}
      maxLength={"30"}
      value={search}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
