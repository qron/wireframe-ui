import { StyleSheet } from 'aphrodite/no-important';
import { DEFAULT_COLOR, COLORS } from '../../constants/ui/colors';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { View } from '../view';
import { useTheme } from '../../context/theme-context';

const styles = StyleSheet.create({
	bar: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'var(--wireframe-header-bar-background-color)',
		color: 'var(--wireframe-foreground-color)',
	},
	barS: {
		height: 'var(--wireframe-dimension-s)',
	},
	barM: {
		height: 'var(--wireframe-dimension-m)',
	},
	barL: {
		height: 'var(--wireframe-dimension-l)',
	},
});

export const Bar = ({
	size = DEFAULT_SIZE,
	color = DEFAULT_COLOR,
	children,
	styleDefinitions = [],
	style,
}) => {
	const { theme } = useTheme();
	return (
		<View
			styleDefinitions={[
				styles.bar,
				styles[`bar${SIZE[size]}`],
				...styleDefinitions,
			]}
			style={{
				'--wireframe-header-bar-background-color': theme.colors[COLORS[color]],
				...style,
			}}
		>
			{children}
		</View>
	);
};
