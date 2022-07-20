import Head from 'next/head'
import { Box, Text, Heading } from "@chakra-ui/react"

export default function ApplicationPage() {
    return (
        <Box>
            <Head>
                <title>
                    YappolaAir | Apply
                </title>
            </Head>
            <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Apply
            </Heading>
            <Text>
                Apply To Become A Hosted member of YappolaAir
            </Text>
        </Box>
    )
}