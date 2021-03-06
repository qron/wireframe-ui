import LightBlueprintPatternSVG from '../../assets/svg/pattern/light-blueprint.svg';
import DarkBlueprintPatternSVG from '../../assets/svg/pattern/dark-blueprint.svg';

import { SIZE } from './size';
import { COLORS } from './colors';

const DEFAULT_SHADOW_COLOR = 'rgba(0, 0, 0, 0.5)';
const DEFAULT_DARK_COLOR = '#111';
const DEFAULT_LIGHT_COLOR = '#eee';

const DEFAULT_THEME = {
	dimension: {
		[SIZE.S]: 24,
		[SIZE.M]: 40,
		[SIZE.L]: 64,
	},

	borderWidth: 3,
	borderRadius: 3,

	spacing: {
		element: 5,
		content: 40,
	},

	fontSize: {
		S: {
			[SIZE.S]: 10,
			[SIZE.M]: 16,
			[SIZE.L]: 22,
		},
		M: {
			[SIZE.S]: 12,
			[SIZE.M]: 18,
			[SIZE.L]: 24,
		},
		L: {
			[SIZE.S]: 14,
			[SIZE.M]: 20,
			[SIZE.L]: 26,
		},
	},

	fontFamily: 'monospace',
};

export const LIGHT_THEME = {
	...DEFAULT_THEME,
	colors: {
		[COLORS.PRIMARY]: '#9c9ccf',
		[COLORS.TRANSPARENT]: 'rgba(0, 0, 0, 0)',
		[COLORS.DARK]: '#333',
		[COLORS.LIGHT]: '#FAFAFA',
		[COLORS.INFO]: '#69CFFF',
		[COLORS.ERROR]: '#FF6969',
		[COLORS.WARNING]: '#FF9c69',
		[COLORS.SUCCESS]: '#69FF99',
		[COLORS.TIP]: '#FFFF69',
		[COLORS.DISABLED_BACKGROUND]: '#E0E0E0',
		[COLORS.DISABLED_FOREGROUND]: '#BDBDBD',
		[COLORS.SHADOW]: 'rgba(0, 0, 0, 0.5)',
		[COLORS.LAYER]: 'rgba(255, 255, 255, 0.75)',
	},
	borderColor: '#444',
	backgroundColor: '#FAFAFA',
	foregroundColor: '#333',
	backgroundImage: `url(.${LightBlueprintPatternSVG})`,
	elevation: [
		'0px 0px 0 0px rgba(0, 0, 0, 0.5)',
		'0px 4px 0 -2px rgba(0, 0, 0, 0.5)',
		'0px 10px 0 -5px rgba(0, 0, 0, 0.5)',
		'0px 24px 0 -12px rgba(0, 0, 0, 0.5)',
		'0px 48px 0 -24px rgba(0, 0, 0, 0.5)',
	],
};

export const DARK_THEME = {
	...DEFAULT_THEME,
	colors: {
		[COLORS.PRIMARY]: '#69699c',
		[COLORS.TRANSPARENT]: 'rgba(0, 0, 0, 0)',
		[COLORS.DARK]: '#212121',
		[COLORS.LIGHT]: '#EEE',
		[COLORS.INFO]: '#03639C',
		[COLORS.ERROR]: '#9c0303',
		[COLORS.WARNING]: '#9c6903',
		[COLORS.SUCCESS]: '#036966',
		[COLORS.TIP]: '#9c9c03',
		[COLORS.DISABLED_BACKGROUND]: '#424242',
		[COLORS.DISABLED_FOREGROUND]: '#616161',
		[COLORS.SHADOW]: 'rgba(0, 0, 0, 0.75)',
		[COLORS.LAYER]: 'rgba(0, 0, 0, 0.75)',
	},
	borderColor: '#CCC',
	backgroundColor: '#212121',
	foregroundColor: '#EEE',
	backgroundImage: `url(.${DarkBlueprintPatternSVG})`,
	elevation: [
		'0px 0px 0 0px rgba(0, 0, 0, 0.75)',
		'0px 4px 0 -2px rgba(0, 0, 0, 0.75)',
		'0px 10px 0 -5px rgba(0, 0, 0, 0.75)',
		'0px 24px 0 -12px rgba(0, 0, 0, 0.75)',
		'0px 48px 0 -24px rgba(0, 0, 0, 0.75)',
	],
};
