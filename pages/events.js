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
                        Event 1 (Las Vegas)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 2 (California)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                         Event 3 (Florida)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 4 (New York)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 5 (Arizona)
                    </ListItem>
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Event 6 (Wen Moon)
                    </ListItem>
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