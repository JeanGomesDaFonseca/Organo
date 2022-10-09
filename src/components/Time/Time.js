import './Time.css'

const Time = (props) => {

    const fundoPrimario = {borderColor: props.corPrimaria}
    const fundoSecundario = {backgroundColor: props.corSecundaria}

    return (
        <section className='time' style={fundoSecundario}>

            <h3 style={fundoPrimario}>{props.nome}</h3>

        </section>
    )
}

export default Time