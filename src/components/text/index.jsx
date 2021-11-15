import { StyleSheet, css } from 'aphrodite/no-important';
import { useTheme } from '../../context/theme-context';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { COLORS } from '../../constants/ui/colors';

const styles = StyleSheet.create({
	text: {
		fontFamily: 'var(--wireframe-font-family)',
		color: 'var(--wireframe-text-color)',
	},
	textSS: {
		fontSize: 'var(--wireframe-font-size-s-s)',
	},
	textSM: {
		fontSize: 'var(--wireframe-font-size-s-m)',
	},
	textSL: {
		fontSize: 'var(--wireframe-font-size-s-l)',
	},
	textMS: {
		fontSize: 'var(--wireframe-font-size-m-s)',
	},
	textMM: {
		fontSize: 'var(--wireframe-font-size-m-m)',
	},
	textML: {
		fontSize: 'var(--wireframe-font-size-m-l)',
	},
	textLS: {
		fontSize: 'var(--wireframe-font-size-l-s)',
	},
	textLM: {
		fontSize: 'var(--wireframe-font-size-l-m)',
	},
	textLL: {
		fontSize: 'var(--wireframe-font-size-l-l)',
	},
});

const getFontSizeStyleDefinition = ({ size, small, large }) => {
	if (small) {
		return styles[`textS${SIZE[size]}`];
	}
	if (large) {
		return styles[`textL${SIZE[size]}`];
	}
	return styles[`textM${SIZE[size]}`];
};

export const Text = ({
	children,
	size = DEFAULT_SIZE,
	small,
	large,
	color,
	style,
	styleDefinitions = [],
}) => {
	const { theme } = useTheme();

	const fontSizeStyleDefinition = getFontSizeStyleDefinition({
		size,
		small,
		large,
	});
	return (
		<span
			className={css(styles.text, fontSizeStyleDefinition, ...styleDefinitions)}
			style={{
				'--wireframe-text-color': color
					? theme.colors[COLORS[color]]
					: theme.foregroundColor,
				...style,
			}}
		>
			{children}
		</span>
	);
};
