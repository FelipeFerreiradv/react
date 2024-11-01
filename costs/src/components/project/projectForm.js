import { useState, useEffect } from 'react';
// import { method } from 'lodash';
import Input from '../form/input';
import Submit from '../form/submit';
import Select from '../form/select';
import styles from '../project/styles/projectForm.module.css';


function ProjectForm({ handleSubmit, btnText, projectData }){
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
 
    useEffect(() =>{
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategories(data);  
        })
        .catch((err) => console.log(err));
    }, []);

const submit = (e) =>{
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name] : e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.forNewProject}>
            <Input type="text" text="Nome do projeto" name="text" id="text" placeholder="Insira o nome do projeto" handleOnChange={handleChange}/>
            <Input type="number" text="Insira o orçamento do produto" name="number" id="number" placeholder="Insira o nome do projeto" handleOnChange={handleChange}/>

            <Select name="category_id" text="Selecione a Categoria" options={categories}/>
            <Submit value="Criar Projeto"/>
        </form>
    )
}

export default ProjectForm;