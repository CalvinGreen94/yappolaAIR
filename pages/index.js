import { useState } from "react"
import { motion } from "framer-motion"
import { cardVariant, parentVariant } from "../motion"
import properties from "@components/data/properties/"
import ProductCard from "@components/mintComp/ProductCard"
import ProductModal from "@components/mintComp/ProductModal"
import { Box, Flex, Center, SimpleGrid, Text, Link, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import Head from "next/head"
import EstatesBalance from "@components/mintComp/EstatesBalance";
import EstatesClaimed from "@components/mintComp/EstatesClaimed";


const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const [modalData, setModalData] = useState(null)

  return (
    <Box>
      <Head>
          <title>
              YappolaAir | Dashboard
          </title>
      </Head>

      <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
        Welcome to YappolaAir
      </Heading>

      <Text pt={5}>
        What is YappolaAir<Link href="https://www.yappola.com/" target="_blank" rel="noreferrer" style={{color: "black", fontWeight: "500"}}>Yappola</Link>. For purposes of governance and other membership privileges, members need to hold at least one <span style={{color: "black", fontWeight: "500"}}>YappolaAir</span> token.
        <br /><br />
        <span style={{color: "black", fontWeight: "500"}}>YappolaAir Vacation DAO</span> Become a Member of the global vacation community<span style={{color: "black", fontWeight: "500"}}> Hosting Applications</span>  are available for submission&apos;.
        <br /><br />
        The Future of Vacations
      </Text>

      <TableContainer maxW={550} mt={10}>
        <Table variant='striped' colorScheme="#9A583">
          <Thead>
            <Tr>
              {/* <TableCaption as={Th}>Total Balance</TableCaption> */}
              {/* <TableCaption as={Th}>Unclaimed Estates</TableCaption> */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {/* <Td><EstatesBalance /></Td> */}
              {/* <Td><EstatesClaimed /></Td> */}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      

      <Box pt={10} pb={20} align="center">
        <MotionSimpleGrid
          mt="4"
          minChildWidth="250px"
          spacing="4em"
          minH="full"
          variants={parentVariant}
          initial="initial"
          animate="animate"
        >
          {properties.map((product, i) => (
            <MotionBox variants={cardVariant} key={i}>
              <ProductCard product={product} setModalData={setModalData} />
            </MotionBox>
          ))}
          </MotionSimpleGrid>
          <ProductModal
            isOpen={modalData ? true : false}
            onClose={() => setModalData(null)}
            modalData={modalData}
          />
      </Box>

      <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
        YappolaAir
      </Heading>

      <Text>
        Thank you for choosing YappolaAir as your ERC721 Booking service
        <br /><br />
        If you have any questions or concerns please reach out to us. Soon to take to the skies .
        <br /><br />
        <span style={{color: "black", fontWeight: "500"}}>Genesis Assets</span> Initital Holders will receive loyalty rewards in YappolaAir ERC20 tokens &apos; This will also Be a way users can exchange digital currency for real world experiences. &apos; YappolaAir is the future of group vacations.
      </Text>
    </Box>
  );
}
