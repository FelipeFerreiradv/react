import PropTypes from 'prop-types'

function item({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>  
        </>
    )
}

item.propTypes ={
    marca: PropTypes.string.isRequired,
    ano_lancamento : PropTypes.number
}

item.defaultProps ={
    marca: 'Type something',
    ano_lancamento: 0
}

export default item;