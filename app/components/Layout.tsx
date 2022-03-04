import Header from './Header';
import { motion } from 'framer-motion';
import { Stack, Flex, ImageProps, Image, Box } from '@chakra-ui/react';

const MotionImage = motion<ImageProps>(Image);

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Box>
			<Stack
				spacing={0}
				pos="relative"
				w="100vw"
				h="100vh"
				overflowX="hidden"
			>
				<Header />
				<Flex flexGrow={1}>{children}</Flex>
			</Stack>
			<MotionImage
				position="absolute"
				top="20%"
				left="-5%"
				zIndex={-1}
				src="/red-circle.png"
				animate={{
					x: ['0%', '100%', '50%', '0%', '0%'],
					y: ['0%', '100%', '0%', '100%', '0%'],
				}}
				//@ts-ignore
				transition={{
					type: 'easeInOut',
					repeat: Infinity,
					repeatType: 'mirror',
					duration: 15,
				}}
			/>
			<MotionImage
				position="absolute"
				top="35%"
				right="0%"
				zIndex={-1}
				src="/blue-circle.png"
				animate={{
					x: ['0%', '-130%', '-130%', '0%', '0%'],
					y: ['100%', '-100%', '100%', '-100%', '100%'],
				}}
				//@ts-ignore
				transition={{
					type: 'easeInOut',
					repeat: Infinity,
					repeatType: 'mirror ',
					duration: 15,
				}}
			/>
			<MotionImage
				position="absolute"
				top="50%"
				left="0%"
				zIndex={-1}
				src="/yellow-circle.png"
				animate={{
					x: ['0%', '100%', '0%', '100%', '0%'],
					y: ['0%', '-100%', '-100%', '0%', '0%'],
				}}
				//@ts-ignore
				transition={{
					type: 'spring',
					repeat: Infinity,
					repeatType: 'mirror ',
					duration: 15,
				}}
			/>
		</Box>
	);
}
