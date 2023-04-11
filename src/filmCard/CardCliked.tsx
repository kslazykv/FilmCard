import { 
    Flex, 
    Stack, 
    Text, 
    VStack, 
    useDisclosure, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    ModalFooter, 
    Button 
} from "@chakra-ui/react"

type PropsCardCliked ={
    title: string
    description:string
    bg:string
    film:string
}

export const CardCliked = ({item,index}:{item:PropsCardCliked,index:any}) =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div key={index}>
            <Stack  
                direction={{base:'column', md:'row'}}  
                my={2} 
                spacing={{base:1,md:5}} 
                justifyContent='space-between' 
                alignItems='flex-end'
                onClick={onOpen}
                cursor='pointer'
            >
                <VStack align={'end'} spacing={'-5px'}>
                    <Text>0{index+1}</Text>
                    <Text whiteSpace={'nowrap'}>{item.title}</Text>
                </VStack>
                
                <Flex 
                  w={{base:'100%',md:'300px'}} 
                  h='150px' 
                  bgColor='gray.300'
                  bgImage={item.bg}
                  bgPos='center'
                  bgSize='cover'
                  bgRepeat='no-repeat'
                  border='1px solid black'
                />
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={5}>{item.description}</Text>
              <iframe
                width="100%"
                height='250px'
                src={item.film}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    )
}