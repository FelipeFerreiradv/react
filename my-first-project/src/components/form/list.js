import styles from './styles/list.module.css'
import Item from './item'

function List(){
    return(
        <div className={styles.list_module}>
            <p>Minha lista</p>
            <ul>
                <Item marca='Ferraria'/>
                <Item marca='Fiat'/>
                <Item marca='Renault'/>
                <Item marca='Citroen'/>
            </ul>
            <ul>
                <Item work='Programador'/>
                <Item work='Programador'/>
                <Item work='Programador'/>
                <Item work='Programador'/>
                <Item work='Programador'/>
            </ul>
        </div>
    )
}

export default List