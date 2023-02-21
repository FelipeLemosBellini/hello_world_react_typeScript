const EventButton = () => {
    const onClick = () => {
        console.log("vc clicou")
    }

    const renderStatusButton = ({ isVibility }) => {

        return isVibility
            ? <h3>Botão is visibility {isVibility.toString()}</h3>
            : <h3> Botão is visibility {isVibility.toString()}</h3>

    }

    const firstButton = ({ labelButton }) => {
        return <button onClick={onClick}>
            {labelButton}
        </button>
    }

    const secondButton = ({ labelButton }) => {
        return <button onClick={() => { console.log("clicou aqui tb") }}>
            {labelButton}
        </button>
    }

    return (
        <div>
            <div>
                {firstButton({ labelButton: "First Button" })}
            </div>
            <div>
                {secondButton({ labelButton: "Second button click" })}
            </div>
            {renderStatusButton({ isVibility: true })}
            {renderStatusButton({ isVibility: false })}
        </div>
    )
}

export default EventButton