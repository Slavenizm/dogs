import { useState } from "react"
import { useEffect } from "react"


const MyComponent = () => {
   
 const [count1, setCount1]=useState(0)
 const [count2, setCount2]=useState(0)
    useEffect(()=>{
        console.log('ComponentDidMount');
        
    },[]) 
    useEffect(()=>{console.log('ComponentDidUpdate');
    },[count1])
    
    useEffect(()=>{
        console.log('blablabla');
        
    })

    useEffect(()=>{
        return ()=>{console.log('ComponentWillUnmount');
        }
    },[])

    console.log('render');
    
    return <><div>
        <h2>{count1}</h2>
        <h2>{count2}</h2>
        <button onClick={()=>setCount1((count)=>count+1)}>+1 первый</button>
        <button onClick={()=>setCount2((count)=>count+1)}>+1 второй</button>
    </div></>
}

export default MyComponent