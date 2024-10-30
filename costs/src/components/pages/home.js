import Link from '../layout/link.js';
import styles from './styles/home.module.css';
import savings from '../../images/savings.svg';

function home(){
    return(
        <>
            <section className={styles.sectionHome}>
                <h1>Bem vindo ao <b>Costs</b></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <Link to="/newproject" text="Criar Projeto"/>
                <img src={savings} alt="Costs"/>
            </section>
        </>
    )
}

export default home;