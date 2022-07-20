import Head from 'next/head'
import { Box, Text, Heading } from "@chakra-ui/react"

export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    YappolaAir | About
                </title>
            </Head>
            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                About
            </Heading>
            
            <Text pt={5}>
            <span style={{color: "black", fontWeight: "500"}}>YappolaAir</span>, <span style={{color: "black", fontWeight: "500"}}>YappolaAir</span>, and <span style={{color: "black", fontWeight: "500"}}>Yappola</span> YappolaAir is the future of vacation<br /><br />
About YappolaAir
            </Text>
        </Box>
    )
}