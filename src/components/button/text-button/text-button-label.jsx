import { StyleSheet } from 'aphrodite/no-important';
import { Text } from '../../text';

const styles = StyleSheet.create({
	textButtonLabel: {
		flexGrow: 1,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});

const TextButtonLabel = ({ children, size, color, styleDefinitions = [] }) => {
	return (
		<Text
			color={color}
			size={size}
			styleDefinitions={[styles.textButtonLabel, ...styleDefinitions]}
		>
			{children}
		</Text>
	);
};
