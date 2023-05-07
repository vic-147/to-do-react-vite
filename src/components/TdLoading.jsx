import "../styles/TdLoading.css";

function TdLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando ToDos...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TdLoading };
