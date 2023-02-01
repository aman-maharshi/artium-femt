import React from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

function SingleMovie() {
    let { movieId } = useParams()

    return (
        <>
            <Header />
            <div className="p-4 md:w-8/12 m-auto border">
                <div>SingleMovie</div>
                <div>{movieId}</div>
            </div>
        </>
    )
}

export default SingleMovie
