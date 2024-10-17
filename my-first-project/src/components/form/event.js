function event({ number }){
    function myEvent(){
        console.log(`Hello world ${number}`)
    }

    return(
        <>
            <button onCLick={myEvent()}>Ativar!</button>
        </>
    )
}

export default event