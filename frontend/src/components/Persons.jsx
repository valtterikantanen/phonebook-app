import Person from './Person';

export default function Persons({ persons, filter, deleteNumber }) {
  return (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter))
        .map(person => (
          <Person key={person.name} person={person} deleteNumber={deleteNumber} />
        ))}
    </div>
  );
}
