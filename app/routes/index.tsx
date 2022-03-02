import { Link } from 'remix';
import type { MetaFunction } from '@remix-run/react/routeModules';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react';

export const meta: MetaFunction = () => {
	return {
		title: 'On The Hunt',
		description: "Product Hunt's daily newspaper",
	};
};

export default function Index(): JSX.Element {
	return (
		<>
			<Stack
				pos="relative"
				padding="6"
				w="full"
				alignContent="center"
				justify="center"
				spacing={10}
			>
				<Center>
					<Center
						bgColor="rgba(255,255,255,0.55)"
						backdropFilter={`blur(10px)`}
						flexDirection="column"
						w={330}
						h={298}
						borderRadius={20}
					>
						<Box w="230px">
							<Stack spacing={-5} w="full" shouldWrapChildren>
								<Text fontSize="48px" fontWeight="bold">
									On
								</Text>
								<Text
									fontSize="3rem"
									ml="25%"
									fontWeight="bold"
								>
									The
								</Text>
								<Text
									fontSize="3rem"
									ml="50%"
									fontWeight="bold"
								>
									Hunt
								</Text>
							</Stack>
							<Text fontSize="20px" color="#636363">
								View the latest best products
							</Text>
						</Box>
					</Center>
				</Center>
				<Center>
					<Button
						bgColor="black"
						color="white"
						width="153px"
						height="60px"
						borderRadius="15px"
						rightIcon={<ArrowRightIcon />}
					>
						<Text fontSize="22px" fontFamily="Roboto">
							<Link to="/products">View</Link>
						</Text>
					</Button>
				</Center>
			</Stack>
		</>
	);
}
