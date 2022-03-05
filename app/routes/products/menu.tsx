import { useNavigate } from 'remix';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react';

export default function Menu(): JSX.Element {
	const navigate = useNavigate();

	return (
		<Drawer isOpen={true} placement="right" onClose={() => navigate(-1)}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Send me a wave if you see this!</DrawerHeader>

				<DrawerBody>
					<Button onClick={() => console.log('waved')}>Wave</Button>
				</DrawerBody>

				<DrawerFooter>
					<Button
						variant="outline"
						mr={3}
						onClick={() => navigate(-1)}
					>
						Close
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
