import { Link } from 'remix';
import type { MetaFunction } from '@remix-run/react/routeModules';
import { Box, HStack, Center, Stack, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const meta: MetaFunction = () => {
	return {
		title: 'On The Hunt',
		description: 'View the latest products from Product Hunt',
		'twitter:card': 'summary_large_image',
		'twitter:site': '@darryl_codes',
		'twitter:creator': '@darryl_codes',
		'twitter:title': 'On The Hunt',
		'twitter:description': 'View the latest products from Product Hunt',
		'twitter:image': 'https://oth-prod.vercel.app/SEO.png',
		'og:title': 'On The Hunt',
		'og:description': 'View the latest products from Product Hunt',
		'og:image': 'https://oth-prod.vercel.app/SEO.png',
		'og:url': 'https://oth-prod.vercel.app/',
		'og:site_name': 'On The Hunt',
		'og:type': 'website',
	};
};

export default function Index(): JSX.Element {
	return (
		<>
			<Stack
				pos="relative"
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
								<Text fontSize="3rem" fontWeight="bold">
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
						</Box>
						<Text fontSize="20px" color="#636363">
							View the latest best products
						</Text>
					</Center>
				</Center>
				<Center>
					<Link
						to="/products"
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						<HStack
							bgColor="black"
							color="white"
							width="153px"
							height="60px"
							borderRadius="15px"
							justify="center"
						>
							<Text fontSize="22px" fontFamily="Roboto">
								View
							</Text>
							<ArrowRightIcon />
						</HStack>
					</Link>
				</Center>
			</Stack>
		</>
	);
}
