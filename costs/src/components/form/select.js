import styles from './style/select.module.css'

function Select({ name, text, options, handleChange, value }){
    return(
        <div className={styles.forNewProject}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>    
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))};
            </select>
        </div>
    )
}

export default Select;