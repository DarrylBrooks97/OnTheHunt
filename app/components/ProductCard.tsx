import { Product } from '~/types';
import {
	ArrowTopRightIcon,
	Share2Icon,
	VercelLogoIcon,
} from '@radix-ui/react-icons';
import {
	Button,
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
	const { name, url, image_url, tagline, topic, upvotes }: any = product;

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
				<VercelLogoIcon />
				<Text fontWeight="semibold">{upvotes}</Text>
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
					w="54px"
					h="18px"
					pos="absolute"
					alignSelf="start"
					borderRadius={4}
				>
					<Text color="white" isTruncated fontSize="sm">
						{topic.charAt(0).toUpperCase() + topic.slice(1)}
					</Text>
				</Center>
			</HStack>
			<Box w="full" p="2">
				<Text color="black">{tagline}</Text>
				<HStack justify="center">
					<Button
						w="auto"
						h="36px"
						bgColor="black"
						borderRadius="5"
						rightIcon={<VercelLogoIcon />}
					>
						<Text color="white">Upvote</Text>
					</Button>
					<Button
						w="auto"
						h="36px"
						bgColor="black"
						borderRadius="5"
						rightIcon={<ArrowTopRightIcon />}
					>
						<Link as="a" href={url} target="_blank">
							<Text color="white">Check out</Text>
						</Link>
					</Button>
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
