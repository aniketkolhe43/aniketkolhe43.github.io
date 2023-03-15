import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,  DrawerOverlay, Stack,  useDisclosure } from "@chakra-ui/react"
import React from "react"
import {HamburgerIcon } from '@chakra-ui/icons'
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <Box  > 
        <Button  colorScheme='none' textAlign="center" onClick={onOpen}><HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={"white"} />
           
            <DrawerBody  bg={"black"} color="white">
              <Stack spacing='24px'>
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={20} gap={10} >
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Project" >Project</a>
        <a href="#Contact">Contact</a>
        <a href="#Resume">Resume</a>
      </Box>

              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  export default DrawerExample