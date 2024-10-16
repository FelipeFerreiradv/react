import styles from './styles/phrase.module.css'

function Person({name, age, work, photo}){
    return(
        <div className={styles.frase_container}>
            <div>
                <img src={photo} alt={name}/>
                <h2>Nome: {name}</h2>
                <p>Idade: {age}</p>
                <p>Profissão: {work}</p>
            </div>
        </div>
    )
}

export default Person;