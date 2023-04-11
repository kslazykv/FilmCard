import { FC } from "react"
import { Text } from "@chakra-ui/react"

type PropsMenu ={
    title: string
    pass: string
    onClick: any
    filter:string

}

export const Menu:FC<PropsMenu> =({title,pass,filter,onClick}) =>{

return(
    <Text
        border='2px solid #719897' 
        boxSize={10} 
        display='flex'
        justifyContent='center'
        alignItems='center'
        cursor={'pointer'}
        fontWeight={pass===filter?'extrabold':'normal'}
        bg={pass===filter?'#719897':'transparent'}
        color={pass===filter?'black':'white'}
        transition='0.2s all'
        _hover={{
            opacity:0.6
        }}
        onClick={()=>onClick(pass)}
    >
        {title}
    </Text>


)

}