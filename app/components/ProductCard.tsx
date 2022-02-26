import { Avatar, Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { ArrowTopRightIcon, VercelLogoIcon } from '@radix-ui/react-icons';

export default function ProductCard(): JSX.Element {
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
					<Text fontWeight="semibold">1.7K</Text>
				</Stack>
				<Stack alignSelf="start" alignItems="center">
					<Avatar
						src="https://ph-files.imgix.net/fe5c5a34-f8f2-4f54-950d-7c0156d225b9.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&bg=0fff&dpr=1"
						boxSize="60px"
						boxShadow={`0px 4px 15px 0px rgba(0,0,0,0.25)`}
					/>
					<Text>Notion</Text>
				</Stack>
				<Box bg="#F4A261" borderRadius={4} alignSelf="start">
					<Text color="white">Productivity</Text>
				</Box>
			</HStack>
			<Text noOfLines={2}>
				The all-in-one workspace - notes, tasks, wikis & databases.
			</Text>
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
					<Text color="white">Check out</Text>
				</Button>
			</HStack>
		</Stack>
	);
}
