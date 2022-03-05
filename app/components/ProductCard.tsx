import { Product } from '~/types';
import { convertNum } from '~/utils';
import { GoTriangleUp } from 'react-icons/go';
import { ArrowTopRightIcon, Share2Icon } from '@radix-ui/react-icons';
import {
	HStack,
	Image,
	Stack,
	Text,
	Link,
	Center,
	Box,
} from '@chakra-ui/react';

export interface ProductCardProps {
	product: Product;
}

export default function ProductCard({
	product,
}: ProductCardProps): JSX.Element {
	const { name, url, image_url, tagline, topic, upvotes }: Product = product;

	return (
		<Stack
			p="4"
			h="auto"
			w="315px"
			pos="relative"
			borderRadius="20px"
			border="2px solid black"
			bgColor="rgba(255,255,255,0.55)"
		>
			<Stack
				h="auto"
				spacing={0}
				pos="absolute"
				alignSelf="start"
				alignItems="center"
			>
				<GoTriangleUp
					style={{
						color: 'green',
						fill: 'green',
						width: '25px',
						height: '25px',
					}}
				/>
				<Text fontWeight="semibold">{convertNum(upvotes)}</Text>
			</Stack>
			<HStack w="full" justify="center">
				<Stack alignSelf="start" alignItems="center">
					<Image
						src={`${image_url}`}
						boxSize="60px"
						borderRadius="50%"
						objectFit="fill"
						boxShadow={`0px 4px 15px 0px rgba(0,0,0,0.25)`}
					/>
					<Text>{name}</Text>
				</Stack>
				<Center
					p="0.5"
					top="5"
					right="5"
					bg="#F4A261"
					w="80px"
					h="18px"
					pos="absolute"
					alignSelf="start"
					borderRadius={4}
				>
					<Text color="white" isTruncated fontSize="sm">
						{topic['node']['name'].charAt(0).toUpperCase() +
							topic['node']['name'].slice(1)}
					</Text>
				</Center>
			</HStack>
			<Text color="black">{tagline}</Text>
			<Box w="full" p="2">
				<HStack justify="center">
					<Link href={url} target="_blank">
						<HStack
							w="auto"
							h="36px"
							bgColor="black"
							borderRadius="5"
							p="3"
							shouldWrapChildren
						>
							<Text color="white">Check out</Text>
							<ArrowTopRightIcon color="white" />
						</HStack>
					</Link>
					<Share2Icon
						width={20}
						height={20}
						onClick={() =>
							navigator.share({ url: url, title: name })
						}
					/>
				</HStack>
			</Box>
		</Stack>
	);
}
