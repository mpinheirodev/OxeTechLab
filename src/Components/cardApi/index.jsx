import './cardApi.css'


export default function CardApi({foto, nome, idade, sexo, email}) {

    return (
        <div className="card_api">
            <div className="img_perfil">
                <img src={foto} />
            </div>
            <h3>{nome}</h3>
            <p>{idade} anos</p>
            <p>{sexo}</p>
            <p>{email}</p>

        </div>
    )
}
