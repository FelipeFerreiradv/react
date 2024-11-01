import styles from './style/submit.module.css';

function Submit({ value }){
    return <input type="submit" value={value} className={styles.submit}/>
}

export default Submit;