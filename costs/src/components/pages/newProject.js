import Link from '../layout/link';
import styles from './styles/newproject.module.css';
import Form from '../project/projectForm';

function newproject(){
    return(
        <section className={styles.sectionNewproject}>
            <div>
                <h1>Create Project</h1>
                <p>Crie seu projeto para depois adicionar os seviços</p>
                <Form/>
                <Link text="Criar Projeto"/>
            </div>
        </section>
    )
}

export default newproject;