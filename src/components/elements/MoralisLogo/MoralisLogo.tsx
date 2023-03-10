import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return <Image src={colorMode === 'dark' ? '/4.png' : '/4.png'} height={65} width={150} alt="Moralis" />;
};

export default MoralisLogo;
