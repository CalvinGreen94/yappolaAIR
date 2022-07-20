import Head from 'next/head'
import { Box, Center, Image, Text, List, ListItem, ListIcon, Heading } from "@chakra-ui/react"
import { ImEarth } from 'react-icons/im'

export default function EstatesPage() {
            
    return (
        <Box>
            <Head>
                <title>
                    YappolaAir | Hosts
                </title>
            </Head>
            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Hosts
            </Heading>

            <Text pt={5}>
                Current Hosts that accept YappolaAir
            </Text>

                <List py={5} ml={5} spacing="2">
                    <ListItem>
                        <ListIcon as={ImEarth} />
                        Host1 (Las Vegas)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Host2 (California)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                         Host3 (Florida)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Host5 (New York)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Host6 (Arizona)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Host7 (Wen Moon)
                    </ListItem>
                </List>

            <Text>
                Current YappolaAir Hosts/ Locations
            </Text>
            
            <Center>
                {/* <Image src="images/Merca_City.png" alt="Merca-City-Map" /> */}
            </Center>
        </Box>
    )
}