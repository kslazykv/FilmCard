import { FC, useEffect, useState } from "react"
import { 
    Container, 
    Flex, 
    HStack, 
    Stack, 
    Text, 
    useBreakpointValue, 
    VStack
} from "@chakra-ui/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BackgroundElementLeft } from "./BackgroundElementLeft"
import { CardCliked } from "./CardCliked"
import { Menu } from "./Menu"
import { getFilmData } from "../mockServer"


// https://www.react-reveal.com/examples/common/zoom/

const menu1 = [
    {
        title: 'HD',
        pass: 'hd',
    },
    {
        title: '18+',
        pass: 'forAdults'
    },{
        title: '|||',
        pass: 'all'
    }
]

type PropsFilmCard ={
    cta?: string
    title?: string
    description?: string
    date?: {
        num: string | number
        text: string
    }
    menu?:{
        title: string
        pass: string
    }[]

}
type PropsData = {
        title: string
        description:string
        bg: string
        hd: boolean
        forAdults: boolean
        film: string
}

export const FilmCard:FC<PropsFilmCard>=({  
    cta='HBO',
    title='Chernobyl',
    description="In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    date={
        num:1,
        text:'date ->'
    },
    menu=menu1,
    }) => {

    const [data, setData]= useState<PropsData[]>([])
    const [filter, setFliter]=useState('all')
    const [list, setList]= useState(data)

    const isMobile = useBreakpointValue({base:true, md:false})
    const amountSlide = isMobile? 1 : 3
    const orientation = isMobile? false : true

    const settings = {
        infinite: true,
        slidesToShow: amountSlide,
        slidesToScroll: 1,
        vertical: orientation,
        verticalSwiping: true,
        swipeToSlide: true,
      };

    const getData =  async () =>{
        const dataFromServer = await getFilmData()
        setData(dataFromServer.elements)
        setList(dataFromServer.elements)
    }

    useEffect(()=>{
        getData()
    
    },[])
  
        
    useEffect(()=>{
     const filteredList = data.filter(item =>{
            if(filter==='hd'){return item.hd}
            else if(filter==='forAdults'){return item.forAdults}
            else{return item}
            })
            setList(filteredList)
    
    },[filter,data])


    const onChangeFilter = (pass:string)=>setFliter(pass)

    
    
    return(

    <Flex
        w='100vw'
        minH='100vh'
        bgGradient='linear(to-b, #719897 30%, #505A52)'
    >
        <Container maxW={'container.xl'} alignItems='center' justifyContent={'center'} display='flex'>
        <Flex 
            pos='relative'
            w={{base:'100%',md:'80%'}}
            h={{base:'80%',md:'70%'}}
            position={'relative'}
            bgGradient={{base:'linear(to-b, #505A52 40%, #719897 55%)',md:'linear(to left, #505A52 40%, #719897 55%)'}}
            borderRadius={'xl'}
            boxShadow='dark-lg'
            overflowY={{base:'hidden',md:'visible'}}
         >
             <Flex
                pos='absolute'
                bottom={0}
                left={{md:'0%'}}
                h='120%'  
            >
                <BackgroundElementLeft/>
                </Flex>
            <Stack 
                direction={{base:'column', md:'row'}} 
                w={'100%'}
                p={{base:2,md:10}}
                zIndex={1}
                position={'relative'}
            >
                
                <VStack 
                    w={{base:'100%',md:'50%' }}
                    h={{base:'50%',md:'100%' }}
                    alignItems={'start'} 
                    justifyContent={'space-between'}
                     
                >
                <Text  fontSize={{base:'3xl',md:'6xl'}} fontWeight={'extrabold'}>{cta}</Text>
                <VStack spacing={5} alignItems='start' pl={10} zIndex={3}>
                    <Text fontSize={{base:'xl',md:'3xl'}} fontWeight={'extrabold'}>{title}</Text>
                    <Text>{description}</Text>
                </VStack>
                <HStack spacing={5} alignItems= 'baseline'>
                    <Text fontSize={{base:'3xl',md:'6xl'}} fontWeight={'extrabold'}>{date.num}</Text>
                    <Text fontSize={'xl'} fontWeight={'bold'}>{date.text}</Text>
                </HStack>

                </VStack>


                <VStack 
                    w={{base:'100%',md:'50%' }} 
                    h={{base:'50%',md:'100%' }}
                    alignItems={'end'} 
                    justifyContent={'space-between'} 
                >
                    <HStack spacing={5}  >
                        {menu.map((item,index)=> 
                            <Menu 
                                key={`Menu - ${index}`} 
                                title={item.title} 
                                pass={item.pass} 
                                filter={filter}
                                onClick={onChangeFilter}
                            />
                        )}
                       
                    </HStack>
                    <Stack  
                        h='100%' 
                        w={{base:'90%',md:'270px'}} 
                        pos={'relative'} 
                        right={{base:0,md:-28}} 
                        alignSelf={{base:'center',md:'self-end'}}
                    >

                    <Slider {...settings}  >
                        {list.map((item ,index)=>(
                            <CardCliked key={`CardCliked - ${index}`} index={index} item={item}/>
                        
                        ))}
                       
                    </Slider>
                        
                    </Stack>
                    <Text>{list.length}/{data.length}</Text>
                </VStack>
            </Stack>

        </Flex>
    </Container>

    </Flex> 
)

} 








