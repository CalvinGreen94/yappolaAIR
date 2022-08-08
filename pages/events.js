import Head from 'next/head'
import { Box, Center, Image, Text, List, ListItem, ListIcon, Heading } from "@chakra-ui/react"
import { ImEarth } from 'react-icons/im'

export default function EventsPage() {
            
    return (
        <Box>
            <Head>
                <title>
                    YappolaAir | Events
                </title>
            </Head>
            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Events
            </Heading>

            <Text pt={5}>
                {/* Current Events that accept YappolaAir */}
                Current YappolaAir Events / Locations
            </Text>

                <List py={5} ml={5} spacing="2">
                    <ListItem>
                        <ListIcon as={ImEarth} />
                        Event 1 <br />
                        Location: Virginia Beach, Virginia <br />
                        Artists: Lex Luger, Juicy J, Waka Flocka Flame
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 2 (California)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                         Event 3 (Florida)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 4 (New York)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 5 (Arizona)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 6 (Wen Moon)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                </List>
{/* 
            <Text>
                Current YappolaAir Eventss/ Locations
            </Text> */}
            
            <Center>
                {/* <Image src="images/Merca_City.png" alt="Merca-City-Map" /> */}
            </Center>
        </Box>
    )
}