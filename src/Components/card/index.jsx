import './card.css'

export default function Card(props) {
    return (
        <div className='cardColaborador'>
            <div className='card_header' style={{background: props.colorCard}}>
                <img src={props.imagem} alt="FotoPerfil" />
            </div>
            <div className='card_footer'>
                <h4>{props.name}</h4>
                <p>{props.cargo}</p>
            </div>
        </div>
    )
}