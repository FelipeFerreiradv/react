import styles from './styles/list.module.css'
import Item from './item'

function List(){
    return(
        <div className={styles.list_module}>
            <p>Minha lista</p>
            <ul>
                <Item marca='Ferraria' ano_lancamento={1985}/>
                <Item marca='Fiat' ano_lancamento={1964}/>
                <Item marca='Renault'ano_lancamento={1950}/>
                <Item marca='Citroen' ano_lancamento={1980}/>
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