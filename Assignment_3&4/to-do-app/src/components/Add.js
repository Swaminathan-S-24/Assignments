export default function Add({ onAdd }) {
  return (
    <>
      <button onClick={onAdd} className="big-button">
        + Add Task
      </button>
    </>
  );
}
