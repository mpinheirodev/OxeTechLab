import './team.css'
import Card from '../card'


export default function Team(props){
    
    const cssBg = {backgroundColor: props.colorBg}
    const cssCard = {borderColor: props.colorCard}

    return(
        
        (props.colaboradores.length > 0 ) ?

        <section className="team" style={cssBg}>
            <h2 style={cssCard}>{props.name}</h2>
            <div className='teamCards'>
                {props.colaboradores.map(colaborador => 
                <Card 
                key={colaborador.name}
                colorCard={props.colorCard}
                name={colaborador.name}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem} />)}
            </div>

        </section>
        : ''
    )
}
