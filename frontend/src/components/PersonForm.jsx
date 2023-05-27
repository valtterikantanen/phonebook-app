export default function PersonForm(props) {
  const { handleSubmit, name, handleNameChange, number, handleNumberChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        Number: <input id="number" value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button id="add-number-btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
