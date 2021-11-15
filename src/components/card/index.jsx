import { StyleSheet } from 'aphrodite/no-important';
import { ElevatedView } from '../elevated-view';
import { HeaderBar } from '../header-bar';
import { Image } from '../image';

export const Card = ({ elevation, children, style, styleDefinitions }) => {
	return (
		<ElevatedView
			elevation={elevation}
			styleDefinitions={styleDefinitions}
			style={style}
		>
			{children}
		</ElevatedView>
	);
};
