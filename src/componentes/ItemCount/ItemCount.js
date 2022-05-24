import { useState } from 'react'
import './ItemCount.css'


const ItemCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () =>{
        setCount((count) => count - 1)

    }

    const increment = () => {
        setCount (count + 1)
    }

    return(
        <div className='count' style={{display:'flex'}}>
            <button className = 'boton' onClick={decrement}>Quitar del Carrito</button>
            <h1>{count}</h1>
            <button className = 'boton' onClick={increment}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount

