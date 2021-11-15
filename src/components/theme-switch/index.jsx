import { StyleSheet } from 'aphrodite/no-important';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from '../../context/theme-context';
import { IconButton } from '../button/icon-button';

const styles = StyleSheet.create({
	iconButton: {
		color: 'var(--wireframe-background-color)',
	},
});

export const ThemeSwitch = ({ style, styleDefinitions = [] }) => {
	const { toggleDarkMode, isDarkMode } = useTheme();

	return (
		<IconButton
			color={isDarkMode ? 'LIGHT' : 'DARK'}
			ButtonIcon={isDarkMode ? MdLightMode : MdDarkMode}
			onClick={toggleDarkMode}
			style={style}
			styleDefinitions={[styles.iconButton, ...styleDefinitions]}
		/>
	);
};
