import { StyleSheet } from 'aphrodite/no-important';
import { useTheme } from '../../context/theme-context';
import { COLORS, DEFAULT_COLOR } from '../../constants/ui/colors';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { View } from '../view';
import { Text } from '../text';

const styles = StyleSheet.create({
	progressBarContainer: {
		flexDirection: 'row',
		backgroundColor: 'var(--wireframe-background-color)',
		borderStyle: 'solid',
		borderWidth: 'var(--wireframe-border-width)',
		borderColor: 'var(--wireframe-border-color)',
		borderRadius: 'var(--wireframe-border-radius)',
		overflow: 'hidden',
	},
	progressBarContainerS: {
		height: 'var(--wireframe-dimension-s)',
	},
	progressBarContainerM: {
		height: 'var(--wireframe-dimension-m)',
	},
	progressBarContainerL: {
		height: 'var(--wireframe-dimension-l)',
	},
	progressBarContent: {
		backgroundColor: 'var(--wireframe-progress-bar-content-background-color)',
		width: 'var(--wireframe-progress-bar-content-width)',
	},
	progressBarLabelView: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const ProgressBar = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
	style,
	styleDefinitions = [],
	progress = 0,
	label,
}) => {
	const { theme } = useTheme();
	return (
		<View
			style={style}
			styleDefinitions={[
				styles.progressBarContainer,
				styles[`progressBarContainer${SIZE[size]}`],
				...styleDefinitions,
			]}
		>
			<View
				styleDefinitions={[styles.progressBarContent]}
				style={{
					'--wireframe-progress-bar-content-background-color':
						theme.colors[COLORS[color]],
					'--wireframe-progress-bar-content-width': `${progress * 100}%`,
				}}
			/>
			{!!label && (
				<View styleDefinitions={[styles.progressBarLabelView]}>
					<Text size={size}>{label}</Text>
				</View>
			)}
		</View>
	);
};
