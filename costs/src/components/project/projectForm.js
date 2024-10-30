import { Link } from "react-router-dom";
import styles from '../project/styles/projectForm.module.css';


function ProjectForm(){
    return(
        <form className={styles.forNewProject}>
            <label for="text">Name Project:</label>
            <input type="text" name="text" id="text" placeholder="Insira o nome do projeto"/>
            <label for="text">Orçamento do Projeto:</label>
            <input type="number" name="number" id="number" placeholder="Insira o nome do projeto"/>
            <label for="text">Selecione a Categoria:</label>
            <select id="Selecione uma Opção>">
                <option>Selecione uma opção</option>
            </select>
            <Link text="Criar Projeto"/>
        </form>
    )
}

export default ProjectForm;