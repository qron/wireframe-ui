import { StyleSheet } from 'aphrodite/no-important';
import { useTheme } from '../../context/theme-context';
import { DEFAULT_COLOR, COLORS } from '../../constants/ui/colors';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { Text } from '../text';
import { View } from '../view';
import { Icon } from '../icon';

const styles = StyleSheet.create({
	chip: {
		display: 'inline-flex',
		borderRadius: 'var(--wireframe-border-radius)',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 'var(--wireframe-spacing-element)',
		backgroundColor: 'var(--wireframe-chip-background-color)',
		color: 'var(--wireframe-foreground-color)',
	},
	chipS: {
		height: 'var(--wireframe-dimension-s)',
	},
	chipM: {
		height: 'var(--wireframe-dimension-m)',
	},
	chipL: {
		height: 'var(--wireframe-dimension-l)',
	},
	chipIcon: {
		// margin: 'var(--wireframe-spacing-element)',
		color: 'currentColor',
	},
	chipText: {
		margin: 'var(--wireframe-spacing-element)',
		color: 'currentColor',
	},
});

export const Chip = ({
	children,
	size = DEFAULT_SIZE,
	color = DEFAULT_COLOR,
	style,
	styleDefinitions = [],
	ChipIcon,
}) => {
	const { theme } = useTheme();
	return (
		<View
			styleDefinitions={[
				styles.chip,
				styles[`chip${SIZE[size]}`],
				...styleDefinitions,
			]}
			style={{
				'--wireframe-chip-background-color': theme.colors[COLORS[color]],
				...style,
			}}
		>
			{!!ChipIcon && (
				<Icon
					iconStyleDefinitions={[styles.chipIcon]}
					Icon={ChipIcon}
					size={size}
				/>
			)}
			<Text styleDefinitions={[styles.chipText]} size={size} small>
				{children}
			</Text>
		</View>
	);
};
