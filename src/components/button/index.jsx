import { css, StyleSheet } from 'aphrodite/no-important';
import { DEFAULT_VARIANT } from '../../constants/ui/button';
import { DEFAULT_COLOR, COLORS } from '../../constants/ui/colors';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { useTheme } from '../../context/theme-context';

const styles = StyleSheet.create({
	button: {
		all: 'unset',
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 'var(--wireframe-border-radius)',
		borderWidth: 'var(--wireframe-border-width)',
		':disabled': {
			borderColor: 'var(--wireframe-color-disabled-foreground)',
			color: 'var(--wireframe-color-disabled-foreground)',
		},
	},

	buttonS: {
		minWidth: 'var(--wireframe-dimension-s)',
		height: 'var(--wireframe-dimension-s)',
	},

	buttonM: {
		minWidth: 'var(--wireframe-dimension-m)',
		height: 'var(--wireframe-dimension-m)',
	},

	buttonL: {
		minWidth: 'var(--wireframe-dimension-l)',
		height: 'var(--wireframe-dimension-l)',
	},

	contained: {
		borderStyle: 'solid',
		boxShadow: 'var(--wireframe-elevation-1)',
		borderColor: 'var(--wireframe-foreground-color)',
		backgroundColor: 'var(--wireframe-button-color)',
		':disabled': {
			backgroundColor: 'var(--wireframe-color-disabled-background)',
		},
		color: 'var(--wireframe-foreground-color)',
	},

	outlined: {
		borderStyle: 'solid',
		borderColor: 'var(--wireframe-button-color)',
		color: 'var(--wireframe-button-color)',
	},

	text: {
		borderStyle: 'none',
		color: 'var(--wireframe-button-color)',
	},
});

export const Button = ({
	children,
	onClick,
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
	variant = DEFAULT_VARIANT,
	style,
	styleDefinitions = [],
	isDisabled,
	// name,
	// id,
	// value
	// autoFocus
}) => {
	const { theme } = useTheme();
	return (
		<button
			type="button"
			disabled={isDisabled}
			className={css(
				styles.button,
				styles[variant],
				styles[`button${SIZE[size]}`],
				...styleDefinitions
			)}
			style={{
				'--wireframe-button-color': theme.colors[COLORS[color]],
				...style,
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
