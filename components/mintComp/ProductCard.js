import { Box } from "@chakra-ui/react";
import Image from "next/image";
export default function ProductCard({ product, setModalData }) {
  const { imageUrl, info,imageAlt,Amenities, title, free, presalePrice, salePrice } = product;

  return (
    <Box
      maxW="350px"
      h="full"
      textAlign="left"
      cursor="pointer"
      bg="white"
      rounded="xl"
      boxShadow='dark-lg'
      filter='auto'
      brightness='90%'
      p={2}
      borderWidth="1px"
      onClick={() => setModalData(product)}
      _hover={{
        bg: "white",
        color: "purple.300",
        transition: "transform 0.15s ease-in-out",
        transform: "scale3d(1.05, 1.05, 1.05)",
        boxShadow: 'dark-lg',
        brightness: '100%'
      }}
      >
      <Box w="full" h="full">
        <Box
          w="100%"
          height="300px"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
        {/* <video
            autoPlay
            muted
            src={imageUrl}
            alt={imageAlt}
            objectfit="cover"
            layout="fill"
            /> */}
            <Image
                    // autoPlay
                    // muted
                    src={imageUrl}
                    alt={imageAlt}
                    objectfit="cover"
                    layout="fill"
                    // fill,fixed,intrinsic,responsive,undefined
                  />
        </Box>
        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight">
            {title}
          </Box>
            <Box>{free}</Box><br />
            <Box>{presalePrice}</Box><br />
            <Box>{salePrice}</Box><br />
            <Box>{Amenities}</Box><br />
            <Box>{info}</Box>
        </Box>
      </Box>
    </Box>
  );
}
