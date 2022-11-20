import Card from '../../Components/Card/index'
import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"


const Products = () => {
    return (
        <>


            <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                <Card />
                <Card />
                <Card />
                
            </Grid>

        </>
    )
}

export default Products