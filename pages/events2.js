import { Box, Heading, Flex, SimpleGrid, TableCaption, Table, Thead, TableContainer} from "@chakra-ui/react"
import Head from "next/head"
import CECard from "@components/events/CurrentEventsCard"
import currentEvents from "@components/events/currentEventsData"
import UECard from "@components/events/UpcomingEventsCard"
import upcomingEvents from "@components/events/upcomingEventsData"
import PECard from "@components/events/PastEventsCard"
import pastEvents from "@components/events/pastEventsData"
import "@fontsource/tangerine"


export default function Events2Page() {

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

            <TableContainer maxW={550} mt={10}>
                <Table variant='simple'>
                <Thead>
                    <TableCaption textStyle="primary" fontSize="20">Ongoing</TableCaption>
                </Thead>
                </Table>
            </TableContainer>

            <Box pt={5} pb={20} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {currentEvents.map((currentEvent, i) => (
                    <Flex key={i}>
                        <CECard currentEvent={currentEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>

            <TableContainer maxW={550} mt={10}>
                <Table variant='simple'>
                <Thead>
                    <TableCaption textStyle="primary" fontSize="20">Upcoming</TableCaption>
                </Thead>
                </Table>
            </TableContainer>

            <Box pt={5} pb={20} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {upcomingEvents.map((upcomingEvent, i) => (
                    <Flex key={i}>
                        <UECard upcomingEvent={upcomingEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>

            <TableContainer maxW={550} mt={10}>
                <Table variant='simple'>
                <Thead>
                    <TableCaption textStyle="primary" fontSize="20">Past</TableCaption>
                </Thead>
                </Table>
            </TableContainer>

            <Box pt={5} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {pastEvents.map((pastEvent, i) => (
                    <Flex key={i}>
                        <PECard pastEvent={pastEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}