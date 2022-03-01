import { Product } from '~/types';
import { ArrowTopRightIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import {
	Box,
	Button,
	HStack,
	Image,
	Stack,
	Text,
	Link,
} from '@chakra-ui/react';

export interface ProductCardProps {
	product: Product;
}

export default function ProductCard({
	product,
}: ProductCardProps): JSX.Element {
	const { name, url, imageUrl, tagline, topic, upvotes }: Product = product;

	return (
		<Stack
			pos="relative"
			border="2px solid black"
			w="315px"
			h="auto"
			p="4"
			borderRadius="20px"
			bgColor="rgba(255,255,255,0.55)"
		>
			<HStack w="full" justify="space-between" align="center">
				<Stack
					h="auto"
					alignSelf="start"
					alignItems="center"
					spacing={0}
					shouldWrapChildren
				>
					<VercelLogoIcon />
					<Text fontWeight="semibold">{upvotes}</Text>
				</Stack>
				<Stack alignSelf="start" alignItems="center">
					<Image
						src={`${imageUrl}`}
						boxSize="60px"
						borderRadius="50%"
						boxShadow={`0px 4px 15px 0px rgba(0,0,0,0.25)`}
					/>
					<Text>{name}</Text>
				</Stack>
				<Box bg="#F4A261" borderRadius={4} alignSelf="start">
					<Text color="white">
						{topic.charAt(0).toUpperCase() + topic.slice(1)}
					</Text>
				</Box>
			</HStack>
			<Text noOfLines={2}>{tagline}</Text>
			<HStack justify="center">
				<Button
					bgColor="black"
					w="auto"
					h="36px"
					borderRadius="5"
					rightIcon={<VercelLogoIcon />}
				>
					<Text color="white">Upvote</Text>
				</Button>
				<Button
					bgColor="black"
					w="auto"
					h="36px"
					borderRadius="5"
					rightIcon={<ArrowTopRightIcon />}
				>
					<Link as="a" href={url} target="_blank">
						<Text color="white">Check out</Text>
					</Link>
				</Button>
			</HStack>
		</Stack>
	);
}
