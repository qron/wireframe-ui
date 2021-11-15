import { StyleSheet } from 'aphrodite/no-important';
import { View } from '../view';

const styles = StyleSheet.create({
	layer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'var(--wireframe-color-layer)',
	},
});

export const Layer = ({ children, styleDefinitions = [], style }) => {
	return (
		<View style={style} styleDefinitions={[styles.layer, ...styleDefinitions]}>
			{children}
		</View>
	);
};
