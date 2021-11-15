import { StyleSheet, css } from 'aphrodite/no-important';
import { DEFAULT_SIZE } from '../../constants/ui/size';
import {
	FONT_SIZE,
	FONT_FAMILY,
	SMALLER_FONT_SIZE,
	FONT_COLOR_BY_THEME,
	COLORS,
} from '../theme';

const styles = StyleSheet.create({
	text: {
		fontFamily: FONT_FAMILY,
		boxSizing: 'border-box',
		color: 'var(--wireframe-text-color)',
	},
	textSS: {
		fontSize: '--wireframe-font-size-s-s',
	},
	textSM: {
		fontSize: '--wireframe-font-size-s-m',
	},
	textSL: {
		fontSize: '--wireframe-font-size-s-l',
	},
	textMS: {
		fontSize: '--wireframe-font-size-m-s',
	},
	textMM: {
		fontSize: '--wireframe-font-size-m-m',
	},
	textML: {
		fontSize: '--wireframe-font-size-m-l',
	},
	textLS: {
		fontSize: '--wireframe-font-size-l-s',
	},
	textLM: {
		fontSize: '--wireframe-font-size-l-m',
	},
	textLL: {
		fontSize: '--wireframe-font-size-l-l',
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
	const fontSizeStyleDefinition = getFontSizeStyleDefinition({
		size,
		small,
		large,
	});
	return (
		<span
			className={css(styles.text, fontSizeStyleDefinition, ...styleDefinitions)}
			style={{
				'--wireframe-text-color': COLORS[color || FONT_COLOR_BY_THEME[theme]],
				...style,
			}}
		>
			{children}
		</span>
	);
};
