import { StyleSheet } from 'aphrodite/no-important';
import { DEFAULT_VARIANT } from '../../constants/ui/button';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { Button } from '.';
import { Icon } from '../icon';

const styles = StyleSheet.create({
	iconButtonS: {
		width: 'var(--wireframe-dimension-s)',
	},
	iconButtonM: {
		width: 'var(--wireframe-dimension-m)',
	},
	iconButtonL: {
		width: 'var(--wireframe-dimension-l)',
	},
	iconButtonIcon: {
		color: 'currentColor',
	},
});

export const IconButton = ({
	color,
	ButtonIcon,
	size = DEFAULT_SIZE,
	variant,
	onClick,
	styleDefinitions = [],
	style,
	isDisabled,
}) => {
	return (
		<Button
			style={style}
			styleDefinitions={[
				styles[`iconButton${SIZE[size]}`],
				...styleDefinitions,
			]}
			size={size}
			variant={variant}
			color={color}
			isDisabled={isDisabled}
			onClick={onClick}
		>
			<Icon
				Icon={ButtonIcon}
				size={size}
				iconStyleDefinitions={[styles.iconButtonIcon]}
			/>
		</Button>
	);
};
