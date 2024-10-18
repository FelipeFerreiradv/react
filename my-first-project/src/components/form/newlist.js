function NewList({ items }){
    return(
        <>
            <h3>Lista de coisas</h3>
            {items.lenght > 0 ?(
                items.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                    <p>Não há itens na lista</p>
                )}
        </>
    )
}

export default NewList;