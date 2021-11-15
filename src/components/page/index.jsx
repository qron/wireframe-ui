import { StyleSheet } from 'aphrodite/no-important';
import { View } from '../view';

const styles = StyleSheet.create({
	page: {
		width: '100vw',
		minHeight: '100vh',
		backgroundColor: 'var(--wireframe-background-color)',
		backgroundImage: 'var(--wireframe-background-image)',
	},
});

export const Page = ({ children, style, styleDefinitions = [] }) => {
	return (
		<View styleDefinitions={[styles.page, ...styleDefinitions]} style={style}>
			{children}
		</View>
	);
};
