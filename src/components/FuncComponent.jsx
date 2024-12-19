import { useState } from "react"

function FuncComponent() {
    const [contador, setContador] = useState(0)

    return (
        <div>
            <h2>Funtional Component</h2>
            <h3>
                <button onClick={() => setContador(contador - 1)} >-</button>
                {contador}
                <button onClick={() => setContador(contador + 1)} >+</button>
            </h3>
        </div>
    )
}

export default FuncComponent