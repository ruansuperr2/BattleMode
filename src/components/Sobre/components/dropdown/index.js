import './index.css'

const Dropdown = ({ label, value, options, onChange }) => {
    return (
    <div className="dropDown">
        <p className="labelDropdown">{label}</p>
        
        <select className="selectDropdown" value={value} onChange={onChange}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>

      
    )
}

export { Dropdown }