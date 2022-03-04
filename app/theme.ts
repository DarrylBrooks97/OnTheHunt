import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				textStyle: {
					color: '#000',
					fontFamily: 'Oswald',
					fontSize: '1.6rem',
				},
			},
		},
		fonts: {
			heading: 'oswald',
			body: 'Alegreya SC',
		},
	},
});
