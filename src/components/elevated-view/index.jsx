import { StyleSheet } from 'aphrodite/no-important';
import { View } from '../view';

const styles = StyleSheet.create({
	elevatedView: {
		borderStyle: 'solid',
		borderWidth: 'var(--wireframe-border-width)',
		borderColor: 'var(--wireframe-border-color)',
		borderRadius: 'var(--wireframe-border-radius)',
		backgroundColor: 'var(--wireframe-background-color)',
		overflow: 'hidden',
	},
	elevatedView0: {
		boxShadow: 'var(--wireframe-elevation-0)',
	},
	elevatedView1: {
		boxShadow: 'var(--wireframe-elevation-1)',
	},
	elevatedView2: {
		boxShadow: 'var(--wireframe-elevation-2)',
	},
	elevatedView3: {
		boxShadow: 'var(--wireframe-elevation-3)',
	},
	elevatedView4: {
		boxShadow: 'var(--wireframe-elevation-4)',
	},
});

export const ElevatedView = ({
	elevation = 0,
	style,
	styleDefinitions = [],
	children,
}) => {
	return (
		<View
			styleDefinitions={[
				styles.elevatedView,
				styles[`elevatedView${elevation}`],
				...styleDefinitions,
			]}
			style={style}
		>
			{children}
		</View>
	);
};
