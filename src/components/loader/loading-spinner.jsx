import { StyleSheet } from 'aphrodite';
import { useTheme } from '../../context/theme-context';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { View } from '../view';

const rotateKeyframes = {
	'0%': {
		transform: 'rotate(0deg)',
	},
	'100%': {
		transform: 'rotate(360deg)',
	},
};

const styles = StyleSheet.create({
	spinnerRing: {
		position: 'relative',
	},
	spinnerRingChild: {
		position: 'absolute',
		borderStyle: 'solid',
		animationName: [rotateKeyframes],
		animationDuration: '1.2s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'cubic-bezier(0.5, 0, 0.5, 1)',
	},
	spinnerRingChild1: {
		animationDelay: '-0.45s',
	},
	spinnerRingChild2: {
		animationDelay: '-0.3s',
	},
	spinnerRingChild3: {
		animationDelay: '-0.15s',
	},
});

export const LoadingSpinner = ({ size = DEFAULT_SIZE, color }) => {
	const { theme } = useTheme();
	const themeDimensionForSize = theme.dimension[SIZE[size]];
	const spinnerRingChildStyle = {
		width: themeDimensionForSize * 0.8,
		height: themeDimensionForSize * 0.8,
		margin: themeDimensionForSize * 0.1,
		borderRadius: themeDimensionForSize * 0.4,
		borderWidth: themeDimensionForSize * 0.1,
		borderColor: `${
			color ? theme.colors[color] : theme.foregroundColor
		} transparent transparent transparent`,
	};
	return (
		<View
			styleDefinitions={[styles.spinnerRing]}
			style={{
				width: themeDimensionForSize,
				height: themeDimensionForSize,
			}}
		>
			<View
				styleDefinitions={[styles.spinnerRingChild, styles.spinnerRingChild1]}
				style={spinnerRingChildStyle}
			></View>
			<View
				styleDefinitions={[styles.spinnerRingChild, styles.spinnerRingChild2]}
				style={spinnerRingChildStyle}
			></View>
			<View
				styleDefinitions={[styles.spinnerRingChild, styles.spinnerRingChild3]}
				style={spinnerRingChildStyle}
			></View>
			<View
				styleDefinitions={[styles.spinnerRingChild]}
				style={spinnerRingChildStyle}
			></View>
		</View>
	);
};
