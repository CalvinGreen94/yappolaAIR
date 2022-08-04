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
                Welcome To YappolaAir
            </Heading>
            
            <Text pt={5}>
            <span style={{color: "black", fontWeight: "500"}}>YappolaAir</span>, will be the official DAO for membership events utilizing Blockchain and Smart Contracts to allow members VIP access to YappolaAir events that include <span style={{color: "black", fontWeight: "500"}}>concerts, after parties,etc... </span> <br /><br /> Members will receive YappolaAir native token in return for purchasing a membership.<br /><br /><span style={{color: "black", fontWeight: "500"}}></span> Assets from the YappolaAir DAO will be shared across the DAO community via airdrops. <br /><span style={{color: "black", fontWeight: "500"}}> <br/>YappolaAir does not promise any profits to be made from the shared assets.</span>  <span style={{color: "black", fontWeight: "500"}}></span> <br /><br />

            </Text>
        </Box>
    )
}