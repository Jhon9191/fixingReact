import './styles.css'
export const TextInput = ({ search, handleChange }) => ( 
    <input
      className="text-input"
      onChange={handleChange}
      value={search}
      type="search"
      placeholder="Type your search"
    />
)