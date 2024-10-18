import Button from './button'

function event(){
    function myEvent(){
        console.log(`Passando o evento via props`)
    }

    function secondEvent(){
        console.log(`Passando o segundo evento via props`)
    }

    return(
        <>
            <Button event={myEvent} text="Primeiro Evento"/>
            <Button event={secondEvent} text="Second Evento"/>
        </>
    )
}

export default event