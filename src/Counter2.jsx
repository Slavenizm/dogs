import { useEffect, useState } from "react"

const Counter2 = ({title, step})=>{
const [count, setCount] = useState(0)
useEffect(()=>console.log("Компонента смонтирована")
,[])

useEffect(()=>console.log('Счётчик изменился:  → '),[count])

useEffect(()=>()=>console.log("Компонента удалена")
,[])
    
const increment = ()=>setCount((count)=>count+step)
const decrement = ()=>setCount((count)=>count-step)
    

    return <>
    {console.log('render')}
    <div>
        <h2>{title}</h2>
        <p>Счётчик: {count}</p>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
}
export default Counter2