import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
	view: {
		display: 'flex',
		flexDirection: 'column',
		boxSizing: 'border-box',
		position: 'relative',
	},
});

export const View = ({ children, style, styleDefinitions = [] }) => {
	return (
		<div className={css(styles.view, ...styleDefinitions)} style={style}>
			{children}
		</div>
	);
};
