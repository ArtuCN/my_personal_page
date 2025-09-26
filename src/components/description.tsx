'use client'

import React from "react"
import { useEffect, useState, } from "react"

export default function Description()
{
    const [age, setAge] = useState(0)
    useEffect(() => {
        const bday = new Date(2004, 7, 10)
        setAge(new Date().getFullYear() - bday.getFullYear())   
    }, [])

    if (age === 0)
        return (<></>)
    return (      
        <main style={{ textAlign: "center", border: '1px solid white', marginTop: 16, background: 'rgba(255, 255, 255, 0.1)' }}>
        <p style={{ maxWidth: "300px", margin: "20px" }}>
            Ciao! Sono Arturo Conti, sono un programmatore e studente della scuola 42
            Ho {age} anni e vivo a Firenze
        </p>
      </main>
    )
}