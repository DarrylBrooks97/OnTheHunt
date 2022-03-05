import { Link } from 'remix';
import { Box, HStack, Heading, Image } from '@chakra-ui/react';

export default function Header() {
	return (
		<HStack
			as="nav"
			w="full"
			top="0"
			position="sticky"
			alignItems="center"
			justifyContent="space-between"
			bgColor="rgba(255,255,255,0.20)"
			backdropFilter={`blur(10px)`}
			zIndex={1}
			p={4}
		>
			<Link to="/">
				<Heading fontSize="24px" fontWeight="bold">
					On The Hunt
				</Heading>
			</Link>
			<Box>
				<Link to="/products/menu">
					<Image src="/menu.svg" alt="Menu" w="full" h="full" />
				</Link>
			</Box>
		</HStack>
	);
}
