import { StyleSheet } from 'aphrodite/no-important';
import { View } from '../view';
import { Chip } from '../chip';

const styles = StyleSheet.create({
	badgeChip: {
		position: 'absolute',
		top: 'calc(var(--wireframe-spacing-element) * -1)',
		right: 'calc(var(--wireframe-spacing-element) * -1)',
	},
});

export const Badge = ({
	children,
	size,
	color,
	style,
	styleDefinitions,
	chipStyleDefinitions = [],
	BadgeIcon,
	badgeContent,
}) => {
	return (
		<View style={style} styleDefinitions={styleDefinitions}>
			{children}
			<Chip
				size={size}
				color={color}
				ChipIcon={BadgeIcon}
				styleDefinitions={[styles.badgeChip, ...chipStyleDefinitions]}
			>
				{badgeContent}
			</Chip>
		</View>
	);
};
