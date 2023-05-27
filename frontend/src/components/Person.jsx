export default function Person({ person, deleteNumber }) {
  return (
    <p>
      {person.name} {person.number} <button onClick={() => deleteNumber(person)}>Delete</button>
    </p>
  );
}
