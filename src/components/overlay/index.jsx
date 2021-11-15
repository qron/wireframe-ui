import { StyleSheet } from 'aphrodite/no-important';
import { Layer } from '../layer';

const styles = StyleSheet.create({
	overlay: {
		position: 'fixed',
		overflow: 'auto',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});

export const Overlay = ({ children, style, styleDefinitions = [] }) => {
	return (
		<Layer
			styleDefinitions={[styles.overlay, ...styleDefinitions]}
			style={style}
		>
			{children}
		</Layer>
	);
};
