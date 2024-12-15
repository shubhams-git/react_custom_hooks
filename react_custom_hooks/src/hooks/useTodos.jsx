import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const useTodos= (n)=>{
 
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log("Triggered")

    useEffect(()=>{
        setLoading(true)
        const fetch =async function() {
            const response = await axios.get("http://localhost:3000/");
            setTodos(response.data)
            setLoading(false)
        }
        fetch();
        const interval = setInterval(fetch,n*1000)

        return ()=>{
            clearInterval(interval)
        }
    },[n])

    return {todos,loading};
}