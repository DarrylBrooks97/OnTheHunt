import ProductCard from '~/components/ProductCard';
import { Box, Center, Image, Stack } from '@chakra-ui/react';
import type { Product } from '../types';
import { LoaderFunction, useLoaderData } from 'remix';
import { supabase } from '../server/supabase.server';

export const loader: LoaderFunction = async () => {
	const products = await supabase.from('products').select('*');
	return products.data;
};

export default function Products(): JSX.Element {
	const products: Product[] = useLoaderData();

	return (
		<Box pos="relative" w="full">
			<Image
				position="absolute"
				top="10%"
				left="-5%"
				zIndex={-1}
				src="/red-circle.png"
			/>
			<Image
				position="absolute"
				top="35%"
				right="0%"
				zIndex={-1}
				src="/blue-circle.png"
			/>
			<Image
				position="absolute"
				top="40%"
				left="0%"
				zIndex={-1}
				src="/yellow-circle.png"
			/>
			<Stack
				w="full"
				h="full"
				justify="center"
				alignItems="center"
				spacing={3}
			>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Stack>
		</Box>
	);
}
