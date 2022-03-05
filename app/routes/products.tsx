import ProductCard from '~/components/ProductCard';
import { supabase } from '../server/supabase.server';
import type { Product } from '../types';
import { motion } from 'framer-motion';
import { Box, BoxProps, Stack } from '@chakra-ui/react';
import { LoaderFunction, useLoaderData } from 'remix';

const MotionBox = motion<BoxProps>(Box);

export const loader: LoaderFunction = async (): Promise<Product[]> => {
	const { data: products, error } = await supabase
		.from('products')
		.select('*');

	if (error || !products) {
		throw new Response("Couldn't fetch products", { status: 500 });
	}

	return products.map((product: any) => {
		if (product.image_url.includes('.gif')) {
			product.image_url =
				'https://cdn-icons-png.flaticon.com/512/2111/2111556.png';
		}

		// Get the shortest topic
		product.topic = product.topics.reduce(
			(a: { node: { name: string } }, b: { node: { name: string } }) => {
				return a.node.name.length <= b.node.name.length ? a : b;
			}
		);
		return product;
	});
};

export default function Products(): JSX.Element {
	const products: Product[] = useLoaderData();

	return (
		<Box pos="relative" w="full" h="full">
			<Stack
				w="full"
				h="full"
				justify="center"
				alignItems="center"
				mt={9}
				spacing={5}
			>
				{products.map((product, index) => (
					<MotionBox
						initial="hidden"
						animate="visible"
						key={index}
						custom={index}
						variants={{
							hidden: {
								opacity: 0,
								x: index % 2 === 0 ? -100 : 100,
							},
							visible: (index) => ({
								opacity: 1,
								x: 0,
								transition: {
									delay: index * 0.35,
									duration: 0.9,
								},
							}),
						}}
					>
						<ProductCard key={product.id} product={product} />
					</MotionBox>
				))}
			</Stack>
		</Box>
	);
}
