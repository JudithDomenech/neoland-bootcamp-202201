import './Select.sass'

function Select({ name = '', id = '', options = [], placeholder = 'Escoge una opción', required = false, label }) {

    return <>
        {label && <label htmlFor={name}>{label}</label>}
        <select name={name} id={id} required={required}>
            <option hidden selected>{placeholder}</option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>

    </>
}


export default Select