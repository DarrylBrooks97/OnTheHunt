import { Link, NavLink } from 'remix';
import { Box, HStack, Heading, Image } from '@chakra-ui/react';

export default function Header() {
	return (
		<HStack
			as="nav"
			w="full"
			alignItems="center"
			justifyContent="space-between"
			p={4}
		>
			<Link to="/">
				<Heading fontSize="24px" fontWeight="bold">
					On The Hunt
				</Heading>
			</Link>
			<Box>
				<NavLink to="/menu">
					<Image src="/menu.svg" alt="Menu" w="full" h="full" />
				</NavLink>
			</Box>
		</HStack>
	);
}
