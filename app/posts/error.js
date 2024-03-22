"use client"

import { useEffect } from "react"

const Error = ({ error, reset }) => {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <>
        <h2>Something went wrong</h2>
        <button onClick={() => reset} >Try again</button>
        </>
    )

}