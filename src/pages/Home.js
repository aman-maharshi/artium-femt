import { useState, useEffect } from "react"

import Header from "../components/Header"

function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getListingData()
    }, [])

    async function getListingData() {
        setLoading(true)
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ID}&s=marvel`
            )
            const data = await response.json()
            console.log(data.Search)
            setMovies(data.Search)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Header />
            <div className="p-4 md:w-8/12 m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    movies.map((item, index) => {
                        const { Poster, Title, Year, imdbId } = item
                        return (
                            <div
                                key={index}
                                className="p-4 rounded-md bg-gray-800"
                            >
                                <img
                                    src={Poster}
                                    alt={Title}
                                    className="h-64 w-full rounded-md object-cover"
                                />
                                <h3 className="font-bold my-4">{Title}</h3>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Home
