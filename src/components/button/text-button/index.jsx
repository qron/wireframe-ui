import { StyleSheet } from 'aphrodite/no-important';
import { useTheme } from '../../../context/theme-context';
import { DEFAULT_COLOR, COLORS } from '../../../constants/ui/colors';
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
		paddingLeft: 'var(--wireframe-dimension-s)',
	},
	textButtonPaddingRightM: {
		paddingLeft: 'var(--wireframe-dimension-m)',
	},
	textButtonPaddingRightL: {
		paddingLeft: 'var(--wireframe-dimension-l)',
	},
	textButtonIcon: {
		color: 'currentColor',
	},
});

export const TextButton = ({
	children,
	color = DEFAULT_COLOR,
	BeforeIcon,
	AfterIcon,
	onClick,
	size = DEFAULT_SIZE,
	variant = DEFAULT_VARIANT,
	style,
	isDisabled,
	styleDefinitions = [],
}) => {
	const buttonContentColor = getButtonContentColorFromVariant({
		variant,
		theme,
		color,
		isDisabled,
	});
	const theme = useTheme();
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
