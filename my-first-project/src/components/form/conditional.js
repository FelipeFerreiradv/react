import {useState} from 'react'

function Conditional(){
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function send_email(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function cleanEmail(){
        setUserEmail('');
    }

    return(
        <>
            <h1>Cadastre-se seu email:</h1>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type='email' name="email" id="email" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <button onClick={send_email}>Enviar email</button>
                    {userEmail &&(
                        <div>
                            <p>O email do usuário é: {userEmail}</p>
                            <button onClick={cleanEmail}>Limpar email:</button>
                        </div>
                    )}
                </div>
            </form>
        </>
    )
}

export default Conditional;