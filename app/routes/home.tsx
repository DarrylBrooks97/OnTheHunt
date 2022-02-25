import { Center, Image, Button, Stack, Text } from '@chakra-ui/react';

export default function Home(): JSX.Element {
	return (
		<>
			<Center
				w="full"
				bgColor="red.300"
				justifyContent="center"
				alignItems="center"
			>
				<Text fontSize="4xl">Home Page</Text>
			</Center>
		</>
	);
}
