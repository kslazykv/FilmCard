import { Circle, Flex, Image } from "@chakra-ui/react"

export const BackgroundElementLeft = ()=>(
    <>
        <Image
           zIndex={{base:0,md:1}}
           src={'obraz1.png'}
           objectPosition={{base:'30%',md:'20%'}}
            objectFit='cover'
            maxW={{md:'60%'}}
           ml={{md:'40%'}}

        />
         <Flex 
            pos={'relative'} 
            w={'80%'}
            top={{base:32,md:'4%'}}
            ml={'-100%' }
            mb={6}
            mt={20}
            overflow='hidden'
            borderRadius={'xl'}
        >
        <Circle 
            size={'lg'} 
            pos={'absolute'} 
            top={'5%'}
            ml='35%'
            zIndex={'10%'}
            shadow='2xl'
        />
          <Circle 
            size={'3xl'} 
            pos={'absolute'} 
            top={'-10%'}
            ml='10%' 
            zIndex={0}
            shadow='2xl'
        />
        </Flex>
     </>
 
)