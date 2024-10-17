import { useState } from 'react';

function Form(){
    function cadaster_user(event){
        event.preventDefault();
        console.log(name);
        console.log('cadastrou');
        console.log(`Usuario ${name} foi cadastradi com a senha: ${password}`);
    }
    
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    
    return(
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadaster_user}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type='text' name="text" id="text" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type='password' name="password" id="password" 
                    placeholder="Digite seu senha"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type='submit' value="Cadastre-se"/>
                </div>
            </form>
        </>
    )
}

export default Form;