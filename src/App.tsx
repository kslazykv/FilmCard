import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { FilmCard } from "./filmCard/FilmCard"


export const App = () => (
  <ChakraProvider theme={theme}>
    <FilmCard/>
  </ChakraProvider>
)
