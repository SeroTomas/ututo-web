import { Box, Button, ButtonGroup, Container, Flex, Image, Text } from '@chakra-ui/react'
import imageHero from '../../../assets/image-hero.png'
import { IoIosNotifications, IoMdCode } from "react-icons/io";
import ActionButtons from '../../Header/ActionButtons';
import useImageDisplay from '../../../hooks/useImageDisplay';

export default function Hero() {

  const display = useImageDisplay();
  
  return (
    <Box
      pt={"100px"}
      w="full"
      h={['100vh', '80vh']}
      bg="#BBA126"
      clipPath="ellipse(91% 54% at 50% 39%)"
    >

      <Container maxW={'7xl'} pt={['40px', '60px']}>

        <Flex direction={['column', 'row']} align={'center'} gap={'75px'}>

          <Box textAlign={['center', 'left']} position={['fixed', 'static']} flex={1}>

            <Text fontSize={['50px', '64px']} fontWeight={900}>UTUTO <span style={{ color: 'white' }}>11</span></Text>

            <Text fontSize={['16px']} lineHeight={'22.4px'} fontWeight={400} display={['none', 'block']}>
              Descubre UTUTO 11, la evolución de GNU/Linux donde cada elemento es completamente libre. Originaria de Argentina y dedicada a usuarios que buscan transparencia y control total, UTUTO es tu puente hacia una computación ética. Con UTUTO 11, disfruta de una tecnología que respeta tu libertad y fomenta una comunidad comprometida con el avance del software libre. Emprende tu viaje hacia la soberanía digital ahora.
            </Text>

            <Text fontSize={['16px']} lineHeight={'22.4px'} fontWeight={400} display={['block', 'none']}>
              La evolución de GNU/Linux donde cada elemento es completamente libre.
            </Text>

            <ButtonGroup my={3}>
              <Flex flexDir={['column', 'row']} gap={3}>
                <Button leftIcon={<IoIosNotifications />} size={'md'} bg={'#4A2554'} color={'white'} _hover={{ bg: '#5d3e65' }}>
                  <a href="https://forms.gle/zBbFvYgvL8Z1wn5V6" target='_blank'>Unirse a la lista de espera</a>
                </Button>
                <Button leftIcon={<IoMdCode />} size={['sm', 'md']}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrF6oUt8ejUiarBZEtuI1hjP1XvrTa8-MlIuXVSa2zybKSpA/viewform" target='_blank'>¡Quiero ser parte!</a>
                </Button>
              </Flex>

            </ButtonGroup>

            <ActionButtons responsive />


          </Box>

          <Box position={['fixed', 'static']} bottom={"20%"} display={display}>
            <Image src={imageHero} maxH={["250px", "500px"]} />
          </Box>

        </Flex>

      </Container>

    </Box>

  )
}