import { StyleSheet, css } from 'aphrodite/no-important';
import { useTheme } from '../../context/theme-context';
import { View } from '../view';
import { SIZE } from '../../constants/ui/size';
import { COLORS } from '../../constants/ui/colors';

const styles = StyleSheet.create({
	iconView: {
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
	},
	iconViewS: {
		width: 'var(--wireframe-dimension-s)',
		height: 'var(--wireframe-dimension-s)',
	},
	iconViewM: {
		width: 'var(--wireframe-dimension-m)',
		height: 'var(--wireframe-dimension-m)',
	},
	iconViewL: {
		width: 'var(--wireframe-dimension-l)',
		height: 'var(--wireframe-dimension-l)',
	},
	iconS: { fontSize: 'var(--wireframe-font-size-m-s)' },
	iconM: { fontSize: 'var(--wireframe-font-size-m-m)' },
	iconL: { fontSize: 'var(--wireframe-font-size-m-l)' },
	icon: {
		color: 'var(--wireframe-icon-color)',
	},
});

export const Icon = ({
	Icon,
	size,
	color,
	style,
	styleDefinitions = [],
	iconStyleDefinitions = [],
}) => {
	const { theme } = useTheme();
	return (
		<View
			styleDefinitions={[
				styles.iconView,
				styles[`iconView${SIZE[size]}`],
				...styleDefinitions,
			]}
			style={style}
		>
			<Icon
				className={css(
					styles.icon,
					styles[`icon${SIZE[size]}`],
					...iconStyleDefinitions
				)}
				style={{
					'--wireframe-icon-color': theme.colors[COLORS[color]],
				}}
			/>
		</View>
	);
};
