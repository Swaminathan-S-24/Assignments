export default function ErrorPopUp({ closeTab }) {
  return (
    <>
      <p>Enter valid/Unique Task</p>
      <button onClick={closeTab} className="small-button">
        Close
      </button>
    </>
  );
}
