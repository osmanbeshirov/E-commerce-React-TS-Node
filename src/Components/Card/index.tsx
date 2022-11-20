import React from 'react'

import { Box, Image, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3'>

                <Link to={'#'}>
                    <Image src='https://picsum.photos/id/8/400/200' alt='product' />

                    <Box p='6' >

                        <Flex>
                            <Box alignItems={'baseline'}>
                                12/12/2022
                            </Box>
                        </Flex>

                        <Box mt={'1'} fontWeight='semibold' as='h4' lineHeight={'tight'} >
                            MacBook Pro
                        </Box>

                        <Box>100 TL</Box>
                    </Box>
                </Link>

                <Button colorScheme={'blue'}>
                    Add to Basket
                </Button>

            </Box>
        </div>
    )
}

export default Card