import { StyleSheet } from 'aphrodite/no-important';
import { ElevatedView } from '../elevated-view';
import { HeaderBar } from '../header-bar';
import { Image } from '../image';

const styles = StyleSheet.create({
	cardImage: {
		width: '100%',
		objectFit: 'cover',
		height: 'auto',
	},
});

export const CardImage = ({ src, styleDefinitions = [], style }) => {
	return (
		<Image
			src={src}
			style={style}
			styleDefinitions={[styles.cardImage, ...styleDefinitions]}
			style={style}
		/>
	);
};
