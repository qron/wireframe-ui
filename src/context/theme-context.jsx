import { createContext, useContext, useEffect, useState } from 'react';
import { COLORS } from '../constants/ui/colors';
import { SIZE } from '../constants/ui/size';
import { LIGHT_THEME, DARK_THEME } from '../constants/ui/theme';

const initialState = {
	darkMode: false,
	theme: LIGHT_THEME,
	toggleDarkMode: () => {},
};

export const ThemeContext = createContext(initialState);

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({
	children,
	theme: { light = LIGHT_THEME, dark = DARK_THEME } = {},
}) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		setIsDarkMode(!!localStorage.getItem('isDarkMode'));
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		localStorage.setItem('isDarkMode', !isDarkMode);
		setIsDarkMode((isDarkMode) => !isDarkMode);
	};

	const theme = isDarkMode ? dark : light;
	return (
		<ThemeContext.Provider value={{ theme, isDarkMode, toggleDarkMode }}>
			<style>
				{`
			:root {
				--wireframe-dimension-s: ${theme.dimension[SIZE.S]}px;
				--wireframe-dimension-m: ${theme.dimension[SIZE.M]}px;
				--wireframe-dimension-l: ${theme.dimension[SIZE.L]}px;

				--wireframe-spacing-element: ${theme.spacing.element}px;
				--wireframe-spacing-content: ${theme.spacing.content}px;

				--wireframe-foreground-color: ${theme.foregroundColor};
				--wireframe-background-color: ${theme.backgroundColor};
				--wirefram-=background-image: ${theme.backgroundImage};

				--wireframe-border-radius: ${theme.borderRadius}px;
				--wireframe-border-width: ${theme.borderWidth}px;
				--wireframe-border-color: ${theme.borderColor};

				--wireframe-font-family: ${theme.fontFamily};

				--wireframe-font-size-m-s: ${theme.fontSize[SIZE.M][SIZE.S]};
				--wireframe-font-size-m-m: ${theme.fontSize[SIZE.M][SIZE.M]};
				--wireframe-font-size-m-l: ${theme.fontSize[SIZE.M][SIZE.L]};

				--wireframe-font-size-s-s: ${theme.fontSize[SIZE.S][SIZE.S]};
				--wireframe-font-size-s-m: ${theme.fontSize[SIZE.S][SIZE.M]};
				--wireframe-font-size-s-l: ${theme.fontSize[SIZE.S][SIZE.L]};

				--wireframe-font-size-l-s: ${theme.fontSize[SIZE.L][SIZE.S]};
				--wireframe-font-size-l-m: ${theme.fontSize[SIZE.L][SIZE.M]};
				--wireframe-font-size-l-l: ${theme.fontSize[SIZE.L][SIZE.L]};

				--wireframe-elevation-0: ${theme.elevation[0]};
				--wireframe-elevation-1: ${theme.elevation[1]};
				--wireframe-elevation-2: ${theme.elevation[2]};
				--wireframe-elevation-3: ${theme.elevation[3]};
				--wireframe-elevation-4: ${theme.elevation[4]};

				--wireframe-color-primary: ${theme.colors[COLORS.PRIMARY]};
				--wireframe-color-transparent: ${theme.colors[COLORS.TRANSPARENT]};
				--wireframe-color-dark: ${theme.colors[COLORS.DARK]};
				--wireframe-color-light: ${theme.colors[COLORS.LIGHT]};
				--wireframe-color-info: ${theme.colors[COLORS.INFO]};
				--wireframe-color-error: ${theme.colors[COLORS.ERROR]};
				--wireframe-color-warning: ${theme.colors[COLORS.WARNING]};
				--wireframe-color-success: ${theme.colors[COLORS.SUCCESS]};
				--wireframe-color-tip: ${theme.colors[COLORS.TIP]};
				--wireframe-color-disabled-background: ${
					theme.colors[COLORS.DISABLED_BACKGROUND]
				};
				--wireframe-color-disabled-foreground: ${
					theme.colors[COLORS.DISABLED_FOREGROUND]
				};
				--wireframe-color-shadow: ${theme.colors[COLORS.SHADOW]};
				--wireframe-color-layer: ${theme.colors[COLORS.LAYER]};
				}	
				`}
			</style>
			{children}
		</ThemeContext.Provider>
	);
};
