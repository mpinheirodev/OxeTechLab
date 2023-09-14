import './select.css'

function Select(props) {

    const Selecionado = (e) => {
        props.alterado(e.target.value)
    }


    return (
        <div className='select_time'>
            <label>{props.label}</label>
            <select required value={props.valor} onChange={Selecionado}>
                <option value="" disabled hidden>Selecione...</option>
                {props.teams.map(team => {
                    return <option key={team}>
                        {team}
                    </option>
                })}
            </select>
        </div>
    )
}

export default Select;