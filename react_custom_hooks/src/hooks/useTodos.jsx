import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const useTodos= ()=>{

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState("true")

    useEffect(()=>{
        setLoading("true")
        async function fetch() {
            const response = await axios.get("http://localhost:3000/");
            setTodos(response.data)
            setLoading("false")
        }
        fetch()
    },[])

    return {todos,loading};
}