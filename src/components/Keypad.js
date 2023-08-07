// Code Keypad Component Here

function Keypad (){

    function handleInput() {
        console.log('Entering password...')
    }

    return (
        <div>
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={ handleInput } />
        </div>
    )
}

export default Keypad;