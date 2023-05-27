export default function Filter({ value, handleChange }) {
  return (
    <div>
      Filter shown with <input value={value} onChange={handleChange} />
    </div>
  );
}
