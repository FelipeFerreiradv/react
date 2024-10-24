import styles from './styles/container.module.css'

function container(props){
    return <div className={styles.container}>{props.children}</div>
}  

export default container