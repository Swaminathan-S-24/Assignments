export default function Delete({ deleteTask }) {
  return (
    <button onClick={deleteTask} className="small-button">
      {" "}
      Delete{" "}
    </button>
  );
}
