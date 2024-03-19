export default function EditTaskvalue({ task, handleEdit, handleCancel }) {
  return (
    <>
      <input type="text" defaultValue={task} />
      <button onClick={() => handleEdit()}>Save</button>
      <button onClick={() => handleCancel()}>Cancel</button>
    </>
  );
}
