import { stringify } from 'querystring';
import { useHistory } from 'react-router-dom';
import styles from './styles/newproject.module.css';
import Form from '../project/projectForm';

function Newproject(){
    const history = useHistory();

    function createPost(project){
        // inicalze cosrts nad services
        project.cost = 0
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((responso) => responso.json())
        .then((data) =>{
            console.log(data)
            // redirect
        })
        .catch()(err => console.log(err));
    }

    return(
        <section className={styles.sectionNewproject}>
            <div>
                <h1>Create Project</h1>
                <p>Crie seu projeto para depois adicionar os seviços</p>
                <Form handleSubmit={createPost}/>
            </div>
        </section>
    )
}

export default Newproject;