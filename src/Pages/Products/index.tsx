import Card from '../../Components/Card/index'
import React from 'react'
import { Grid, GridItem, Toast } from "@chakra-ui/react"
import { useQuery } from 'react-query'

const Products = () => {

    const { isLoading, error, data, isError } = useQuery<Error>('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/users').then(res =>
            res.json()
        )
    )

    if (isLoading) return <><p>Loading...</p></>

    if (error instanceof Error) <>{error.message}</>

    console.log(data)



    return (
        <>

            <Grid templateColumns='repeat(3, 1fr)' gap={3} >
                <Card />
                <Card />
                <Card />

            </Grid >

        </>
    )


}

export default Products