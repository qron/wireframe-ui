import { css, StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
	image: {
		backgroundColor: 'var(--wireframe-color-layer)',
	},
});

export const Image = ({ alt, src, styleDefinitions = [], style }) => {
	return (
		<img
			alt={alt}
			src={src}
			style={style}
			className={css(styles.image, ...styleDefinitions)}
		/>
	);
};
