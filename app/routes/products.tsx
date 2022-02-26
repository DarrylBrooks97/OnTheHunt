import ProductCard from '~/components/ProductCard';
import { Center } from '@chakra-ui/react';

export default function Products(): JSX.Element {
	return (
		<Center w="full" h="full">
			<ProductCard />
		</Center>
	);
}
