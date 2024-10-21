function YourName({ setName }){
    return(
        <div>
            <p>Digite seu nome</p>
            <input type="text" plaholder="Qual é o seu nome?" 
            onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default YourName;