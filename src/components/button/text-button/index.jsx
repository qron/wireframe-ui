import { StyleSheet } from 'aphrodite/no-important';
import { useTheme } from '../../../context/theme-context';
import { COLORS } from '../../../constants/ui/colors';
import { DEFAULT_SIZE, SIZE } from '../../../constants/ui/size';
import { DEFAULT_VARIANT } from '../../../constants/ui/button';
import { Button } from '..';
import { TextButtonLabel } from './text-button-label';
import { Icon } from '../../icon';

const styles = StyleSheet.create({
	textButtonLabel: {
		color: 'currentColor',
	},
	textButtonPaddingLeftS: {
		paddingLeft: 'var(--wireframe-dimension-s)',
	},
	textButtonPaddingLeftM: {
		paddingLeft: 'var(--wireframe-dimension-m)',
	},
	textButtonPaddingLeftL: {
		paddingLeft: 'var(--wireframe-dimension-l)',
	},
	textButtonPaddingRightS: {
		paddingRight: 'var(--wireframe-dimension-s)',
	},
	textButtonPaddingRightM: {
		paddingRight: 'var(--wireframe-dimension-m)',
	},
	textButtonPaddingRightL: {
		paddingRight: 'var(--wireframe-dimension-l)',
	},
	textButtonIcon: {
		color: 'currentColor',
		flexShrink: 0,
	},
});

export const TextButton = ({
	children,
	color,
	BeforeIcon,
	AfterIcon,
	onClick,
	size = DEFAULT_SIZE,
	variant = DEFAULT_VARIANT,
	style,
	isDisabled,
	styleDefinitions = [],
}) => {
	const { theme } = useTheme();
	return (
		<Button
			style={style}
			styleDefinitions={[
				!BeforeIcon && styles[`textButtonPaddingLeft${SIZE[size]}`],
				!AfterIcon && styles[`textButtonPaddingRight${SIZE[size]}`],
				...styleDefinitions,
			]}
			size={size}
			variant={variant}
			color={color}
			isDisabled={isDisabled}
			onClick={onClick}
		>
			{!!BeforeIcon && (
				<Icon
					Icon={BeforeIcon}
					size={size}
					iconStyleDefinitions={[styles.textButtonIcon]}
				/>
			)}

			<TextButtonLabel size={size} styleDefinitions={[styles.textButtonLabel]}>
				{children}
			</TextButtonLabel>

			{!!AfterIcon && (
				<Icon
					Icon={AfterIcon}
					size={size}
					iconStyleDefinitions={[styles.textButtonIcon]}
				/>
			)}
		</Button>
	);
};
