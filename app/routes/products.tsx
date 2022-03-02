import ProductCard from '~/components/ProductCard';
import { supabase } from '../server/supabase.server';
import type { Product } from '../types';
import { motion } from 'framer-motion';
import { Box, BoxProps, Image, ImageProps, Stack } from '@chakra-ui/react';
import { LoaderFunction, useLoaderData, redirect } from 'remix';

const MotionBox = motion<BoxProps>(Box);

export const loader: LoaderFunction = async (): Promise<Product[]> => {
	const { data: products, error } = await supabase
		.from('products')
		.select('*');

	if (error || !products) {
		throw redirect('/500');
	}

	return products.map((product: Product) => {
		if (product.image_url.includes('.gif')) {
			product.image_url =
				'data:image/png;base64,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';
		}
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
