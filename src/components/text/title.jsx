import { StyleSheet } from 'aphrodite/no-important';
import { Text } from '.';

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export const Title = ({
	children,
	size,
	small,
	large,
	style,
	styleDefinitions = [],
}) => {
	return (
		<Text
			small={small}
			large={large}
			size={size}
			styleDefinitions={[styles.title, ...styleDefinitions]}
			style={style}
		>
			{children}
		</Text>
	);
};
