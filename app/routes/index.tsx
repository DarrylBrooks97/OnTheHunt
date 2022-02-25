import type { MetaFunction } from 'remix';
import { Button, Center, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const meta: MetaFunction = () => {
	return {
		title: 'On The Hunt',
		description: "Product Hunt's daily newspaper",
	};
};

export default function Index(): JSX.Element {
	return (
		<>
			<Image position="absolute" top="25%" src="/red-circle.png" />
			<Image
				position="absolute"
				top="45%"
				right="0%"
				src="/blue-circle.png"
			/>
			<Image position="absolute" top="55%" src="/yellow-circle.png" />
			<Stack
				padding="6"
				w="full"
				alignContent="center"
				justify="center"
				spacing={10}
			>
				<Center>
					<Center
						w={330}
						h={298}
						borderRadius={20}
						bgColor="rgba(255,255,255,0.55)"
						backdropFilter={`blur(10px)`}
					>
						<Text fontSize="3rem" fontWeight="bold">
							On The Hunt
						</Text>
					</Center>
				</Center>
				<Center>
					<Button
						bgColor="black"
						color="white"
						width={150}
						rightIcon={<ArrowRightIcon />}
					>
						View
					</Button>
				</Center>
			</Stack>
		</>
	);
}
