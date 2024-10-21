function Hello( {name} ){
    function sayHello(event){
        return `Olá ${event}, tudo bem?`
    }

    return <>{name && <p>{sayHello(name)}</p>}</>
}

export default Hello;