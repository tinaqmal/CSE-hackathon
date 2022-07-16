import React from 'react';
import { Container } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import deepField from './Screenshot 2022-07-17 041026.jpg';
import comp from './Screenshot 2022-07-17 041027.jpg';
import quad from './webb-sheds-light-on-ga.jpg';
import cosmic from './STScI-01G7WD4Y58KCQD3XTACYE926WC.png';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

function Content() {
  return (
    <Box paddingLeft={'250px'} paddingRight={'250px'} paddingTop={'60px'}>
      <Box>
        <Flex>
          <Box
            textAlign={'left'}
            fontSize="20px"
            color="black"
            font="inter"
            fontWeight="500"
            fontStyle="italic"
          >
            By Brian Handwerk <br></br>Science Correspondent
          </Box>
          <Spacer />
          <Box
            verticalAlign={'text-bottom'}
            fontSize="20px"
            color="black"
            font="inter"
            fontWeight="500"
            fontStyle="italic"
          >
            July 16, 2022, 6 AM ET
          </Box>
        </Flex>
        <SimpleGrid columns={2} spacing={10} paddingTop={'40px'}>
          <Box textAlign={'justify'} fontSize="20px" color="black" font="inter">
            The deepest, sharpest infrared image ever captured of the distant
            universe was revealed last night—a stunning display of the galaxy
            cluster SMACS 0723 delivered by the recently launched James Webb
            Space Telescope. Just a century ago scientists believed there was
            only one galaxy, but this image reveals thousands—all found in a
            tiny speck of sky comparable in size to a single grain of sand held
            on a finger at arm’s length by someone standing on the ground. NASA
            Administrator Bill Nelson explained that images like this one,
            dubbed “Webb’s First Deep Field,” allow us to see the universe as it
            appeared far in the past—the light captured from these galaxies has
            been traveling through space for 4.6 billion years. <br></br>
            <br></br>The wait for Webb wasn't quite that long. But finally, more
            than three decades after its conception and after six months in
            orbit, the James Webb Space Telescope’s first full-color images are
            delivering an unprecedented look at our Universe. After the shot
            revealed last night by President Biden, scientists released four
            more amazing images today, the first of many incredible visuals to
            come.
          </Box>
          <Box>
            <Image
              marginLeft={'5px'}
              maxWidth="91%"
              height="auto"
              src={deepField}
              alt="Deep Field Image"
            />
            <Text
              marginLeft={'30px'}
              marginTop={'10px'}
              textAlign={'left'}
              fontSize="15px"
              color="black"
              font="inter"
              fontStyle="italic"
              fontWeight="300"
            >
              The first full-colour image from Nasa’s James Webb space telescope
              shows the galaxy cluster SMACS 0723. Photograph: EyePress
              News/REX/Shutterstock
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        marginTop={'30px'}
        textAlign={'justify'}
        fontSize="20px"
        color="black"
        font="inter"
      >
        Astrophysicist John Mather, senior project scientist for the Webb
        Telescope and a Nobel Prize winner, began work on Webb back in 1995 just
        after he helped to measure the Big Bang and determine the age of the
        universe “It’s the next question,” he said as the images were revealed,
        “after you know how it started, what happened then?” The telescope,
        Mather is certain, will help provide some answers. “This is our time
        machine, and I’m so thrilled that we got a chance to do it.” <br></br>
        <br></br>The wait for Webb wasn't quite that long. But finally, more
        than three decades after its conception and after six months in orbit,
        the James Webb Space Telescope’s first full-color images are delivering
        an unprecedented look at our Universe. After the shot revealed last
        night by President Biden, scientists released four more amazing images
        today, the first of many incredible visuals to come.
      </Box>
      <Image
        marginTop={'40px'}
        marginLeft={'5px'}
        maxWidth="100%"
        height="auto"
        src={comp}
        alt="JWST vs Hubble"
      />
      <Text
        marginTop={'10px'}
        textAlign={'left'}
        fontSize="15px"
        color="black"
        font="inter"
        fontStyle="italic"
        fontWeight="300"
      >
        Southern Ring Nebula imaged with two different Webb instruments. credit
        / NASA, ESA, CSA, and STScI
      </Text>
      <Box
        marginTop={'30px'}
        textAlign={'justify'}
        fontSize="20px"
        color="black"
        font="inter"
      >
        The initial images include the Carina Nebula, a dynamic region of new
        star birth with at least a dozen massive stars 50 to 100 times the size
        of our own Sun, and the Southern Ring Nebula, a huge and expanding cloud
        of gas surrounding a star in its death throes. Webb also captured images
        of Stephan’s Quintet, a compact group of five galaxies found in the
        constellation Pegasus, and of the intriguing planet WASP-96b, a gassy
        giant some 1,150 light-years from Earth. Astrophysicist John Mather,
        senior project scientist for the Webb Telescope and a Nobel Prize
        winner, began work on Webb back in 1995 just after he helped to measure
        the Big Bang and determine the age of the universe “It’s the next
        question,” he said as the images were revealed, “after you know how it
        started, what happened then?” The telescope, Mather is certain, will
        help provide some answers. <br></br>
        <br></br>“This is our time machine, and I’m so thrilled that we got a
        chance to do it.” The roughly $10 billion telescope allows us to see
        deeper into space, and farther back towards the origins of our universe,
        than humans have ever been able to see before. Webb can observe light
        from the universe’s very first stars and galaxies that formed 13.5
        billion years ago, just a few hundred million years after the Big Bang,
        and track those stars and galaxies’ evolution throughout the entire age
        of the universe. Though Webb will allow us to explore deeper into space
        than ever before, the telescope will do so much more. Webb will pull the
        curtain from nebulas to see where planetary systems and stars are born,
        which have previously been shielded from visible light observatories by
        dusty clouds. <br></br>
        <br></br>Infrared light observations allow Webb to peer through that
        dust to reveal the birth of stars, and even see through churning gasses
        to the black hole at the center of our own galaxy. The telescope will
        also offer clearer looks at exoplanets beyond our solar system, whose
        atmospheres are shrouded by clouds. That will enable scientists like
        Mercedes Lopez-Morales to study their composition and their atmospheres
        to see if any of them may be like Earth—and even if they might be
        suitable for life.
      </Box>

      <SimpleGrid columns={2} spacing={10} paddingTop={'40px'}>
        {' '}
        <Box>
          <Image marginLeft={'5px'} maxWidth="100%" height="auto" src={quad} />
          <Text
            // marginLeft={'30px'}
            marginTop={'10px'}
            textAlign={'left'}
            fontSize="15px"
            color="black"
            font="inter"
            fontStyle="italic"
            fontWeight="300"
          >
            The first full-colour image from Nasa’s James Webb space telescope
            shows the galaxy cluster SMACS 0723. Photograph: EyePress
            News/REX/Shutterstock
          </Text>
        </Box>
        <Box
          marginLeft={'20px'}
          textAlign={'justify'}
          fontSize="20px"
          color="black"
          font="inter"
        >
          The deepest, sharpest infrared image ever captured of the distant
          universe was revealed last night—a stunning display of the galaxy
          cluster SMACS 0723 delivered by the recently launched James Webb Space
          Telescope. <br></br>
          <br></br>Just a century ago scientists believed there was only one
          galaxy, but this image reveals thousands—all found in a tiny speck of
          sky comparable in size to a single grain of sand held on a finger at
          arm’s length by someone standing on the ground. NASA Administrator
          Bill Nelson explained that images like this one, dubbed “Webb’s First
          Deep Field,” allow us to see the universe as it appeared far in the
          past—the light captured from these galaxies has been traveling through
          space for 4.6 billion years. The wait for Webb wasn't quite that long.
          But finally, more than three decades after its conception and after
          six months in orbit, the James Webb Space Telescope’s first full-color
          images are delivering an unprecedented look at our Universe. After the
          shot revealed last night by President Biden, scientists released four
          more amazing images today, the first of many incredible visuals to
          come. The telescope, powered by a solar array, may be able to operate
          for 20 years or more. Unlike low-orbit Hubble, which can be serviced,
          Webb’s distance, orbiting beyond the Moon, means it has been designed
          to be self-sufficient during the life of the mission. Webb’s to-do
          list is extremely impressive.
        </Box>
      </SimpleGrid>

      <Box
        marginTop={'30px'}
        textAlign={'justify'}
        fontSize="20px"
        color="black"
        font="inter"
      >
        The initial images include the Carina Nebula, a dynamic region of new
        star birth with at least a dozen massive stars 50 to 100 times the size
        of our own Sun, and the Southern Ring Nebula, a huge and expanding cloud
        of gas surrounding a star in its death throes. Webb also captured images
        of Stephan’s Quintet, a compact group of five galaxies found in the
        constellation Pegasus, and of the intriguing planet WASP-96b, a gassy
        giant some 1,150 light-years from Earth. Astrophysicist John Mather,
        senior project scientist for the Webb Telescope and a Nobel Prize
        winner, began work on Webb back in 1995 just after he helped to measure
        the Big Bang and determine the age of the universe “It’s the next
        question,” he said as the images were revealed, “after you know how it
        started, what happened then?” The telescope, Mather is certain, will
        help provide some answers. <br></br>
        <br></br>“This is our time machine, and I’m so thrilled that we got a
        chance to do it.” The roughly $10 billion telescope allows us to see
        deeper into space, and farther back towards the origins of our universe,
        than humans have ever been able to see before. Webb can observe light
        from the universe’s very first stars and galaxies that formed 13.5
        billion years ago, just a few hundred million years after the Big Bang,
        and track those stars and galaxies’ evolution throughout the entire age
        of the universe. Though Webb will allow us to explore deeper into space
        than ever before, the telescope will do so much more. Webb will pull the
        curtain from nebulas to see where planetary systems and stars are born,
        which have previously been shielded from visible light observatories by
        dusty clouds. <br></br>
        <br></br>Infrared light observations allow Webb to peer through that
        dust to reveal the birth of stars, and even see through churning gasses
        to the black hole at the center of our own galaxy. The telescope will
        also offer clearer looks at exoplanets beyond our solar system, whose
        atmospheres are shrouded by clouds. That will enable scientists like
        Mercedes Lopez-Morales to study their composition and their atmospheres
        to see if any of them may be like Earth—and even if they might be
        suitable for life.
      </Box>
      <Image
        marginTop={'40px'}
        marginLeft={'5px'}
        maxWidth="100%"
        height="auto"
        src={cosmic}
      />
      <Text
        marginTop={'10px'}
        textAlign={'left'}
        fontSize="15px"
        color="black"
        font="inter"
        fontStyle="italic"
        fontWeight="300"
      >
        Astronomers using NASA’s James Webb Space Telescope combined the
        capabilities of the telescope’s two cameras to create a
        never-before-seen view of a star-forming region in the Carina Nebula
      </Text>
      <Box
        marginTop={'30px'}
        textAlign={'justify'}
        fontSize="20px"
        color="black"
        font="inter"
      >
        The initial images include the Carina Nebula, a dynamic region of new
        star birth with at least a dozen massive stars 50 to 100 times the size
        of our own Sun, and the Southern Ring Nebula, a huge and expanding cloud
        of gas surrounding a star in its death throes. Webb also captured images
        of Stephan’s Quintet, a compact group of five galaxies found in the
        constellation Pegasus, and of the intriguing planet WASP-96b, a gassy
        giant some 1,150 light-years from Earth. Astrophysicist John Mather,
        senior project scientist for the Webb Telescope and a Nobel Prize
        winner, began work on Webb back in 1995 just after he helped to measure
        the Big Bang and determine the age of the universe “It’s the next
        question,” he said as the images were revealed, “after you know how it
        started, what happened then?” The telescope, Mather is certain, will
        help provide some answers. <br></br>
        <br></br>“This is our time machine, and I’m so thrilled that we got a
        chance to do it.” The roughly $10 billion telescope allows us to see
        deeper into space, and farther back towards the origins of our universe,
        than humans have ever been able to see before. Webb can observe light
        from the universe’s very first stars and galaxies that formed 13.5
        billion years ago, just a few hundred million years after the Big Bang,
        and track those stars and galaxies’ evolution throughout the entire age
        of the universe. Though Webb will allow us to explore deeper into space
        than ever before, the telescope will do so much more. Webb will pull the
        curtain from nebulas to see where planetary systems and stars are born,
        which have previously been shielded from visible light observatories by
        dusty clouds. <br></br>
        <br></br>Infrared light observations allow Webb to peer through that
        dust to reveal the birth of stars, and even see through churning gasses
        to the black hole at the center of our own galaxy. The telescope will
        also offer clearer looks at exoplanets beyond our solar system, whose
        atmospheres are shrouded by clouds. That will enable scientists like
        Mercedes Lopez-Morales to study their composition and their atmospheres
        to see if any of them may be like Earth—and even if they might be
        suitable for life.
      </Box>
    </Box>
  );
}

export default Content;
