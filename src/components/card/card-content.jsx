import { StyleSheet } from 'aphrodite/no-important';
import { View } from '../view';

const styles = StyleSheet.create({
	cardContent: {
		flexGrow: 1,
		overflow: 'hidden',
	},
});

export const CardContent = ({ children, styleDefinitions = [], style }) => {
	return (
		<View
			style={style}
			styleDefinitions={[styles.cardContent, ...styleDefinitions]}
		>
			{children}
		</View>
	);
};
