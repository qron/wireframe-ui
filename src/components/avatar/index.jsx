import { StyleSheet } from 'aphrodite/no-important';
import { View } from '../view';
import { Text } from '../text';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';

const styles = StyleSheet.create({
	avatarView: {
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderWidth: 'var(--wireframe-border-width)',
		borderColor: 'var(--wireframe-border-color)',
		backgroundColor: 'var(--wireframe-avatar-view-color)',
		flexShrink: 0,
	},
	avatarViewS: {
		width: 'var(--wireframe-dimension-s)',
		height: 'var(--wireframe-dimension-s)',
		borderRadius: 'calc(var(--wireframe-dimension-s) / 2)',
	},
	avatarViewM: {
		width: 'var(--wireframe-dimension-m)',
		height: 'var(--wireframe-dimension-m)',
		borderRadius: 'calc(var(--wireframe-dimension-m) / 2)',
	},
	avatarViewL: {
		width: 'var(--wireframe-dimension-l)',
		height: 'var(--wireframe-dimension-l)',
		borderRadius: 'calc(var(--wireframe-dimension-l) / 2)',
	},
	avatarText: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: 'var(--wireframe-foreground-color)',
	},
	avatarTextS: {
		fontSize: 'var(--wireframe-font-size-l-s)',
	},
	avatarTextM: {
		fontSize: 'var(--wireframe-font-size-l-m)',
	},
	avatarTextL: {
		fontSize: 'var(--wireframe-font-size-l-l)',
	},
});

const getColorFromString = (string) => {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}
	let color = '#';
	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xff;
		color += ('00' + value.toString(16)).substr(-2);
	}
	return color;
};

export const Avatar = ({
	size = DEFAULT_SIZE,
	userName,
	avatarViewBackgroundColor,
	style,
	styleDefinitions = [],
}) => {
	const userNameColor = userName && getColorFromString(userName);
	const userNameFirstLetter = userName && userName[0];

	return (
		<View
			styleDefinitions={[
				styles.avatarView,
				styles[`avatarView${SIZE[size]}`],
				...styleDefinitions,
			]}
			style={{
				'--wireframe-avatar-view-color':
					avatarViewBackgroundColor || userNameColor,
				...style,
			}}
		>
			<Text
				styleDefinitions={[
					styles.avatarText,
					styles[`avatarText${SIZE[size]}`],
				]}
			>
				{userNameFirstLetter}
			</Text>
		</View>
	);
};
