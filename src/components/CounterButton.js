const CounterButton = () => {

    let initialText = 0;

    const increment = () => {

        console.log(initialText)
        initialText++;
    }

    const textCounter = () => {
        return <h2>{initialText.toString()}</h2>
    }

    const buttonAdd = () => {
        return <div>
            <button onClick={increment}>
                increment
            </button>
        </div>
    }

    return (
        <div>
            {buttonAdd()}
            {textCounter()}
        </div>
    )
}

export default CounterButton