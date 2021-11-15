import { StyleSheet } from 'aphrodite/no-important';
import { COLORS } from '../../constants/ui/colors';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { Title } from '../text/title';
import { Bar } from '../bar';
import { Icon } from '../icon';

const styles = StyleSheet.create({
	headerBarPaddingLeftS: {
		paddingLeft: 'var(--wireframe-dimension-s)',
	},
	headerBarPaddingLeftM: {
		paddingLeft: 'var(--wireframe-dimension-m)',
	},
	headerBarPaddingLeftL: {
		paddingLeft: 'var(--wireframe-dimension-l)',
	},

	headerBarPaddingRightS: {
		paddingRight: 'var(--wireframe-dimension-s)',
	},
	headerBarPaddingRightM: {
		paddingRight: 'var(--wireframe-dimension-m)',
	},
	headerBarPaddingRightL: {
		paddingRight: 'var(--wireframe-dimension-l)',
	},

	headerBarTitleIcon: {
		color: 'currentColor',
	},
	headerBarTitle: {
		flexGrow: 1,
		color: 'currentColor',
	},
	headerBarActionIconButton: {
		color: 'currentColor',
	},
});

export const HeaderBar = ({
	size = DEFAULT_SIZE,
	TitleIcon,
	title,
	color,
	children,
	style,
	styleDefinitions = [],
}) => {
	return (
		<Bar
			size={size}
			styleDefinitions={[
				!TitleIcon && styles[`headerBarPaddingLeft${SIZE[size]}`],
				!children && styles[`headerBarPaddingRight${SIZE[size]}`],
				...styleDefinitions,
			]}
			color={color}
		>
			{!!TitleIcon && (
				<Icon
					Icon={TitleIcon}
					size={size}
					iconStyleDefinitions={[styles.headerBarTitleIcon]}
				/>
			)}
			<Title styleDefinitions={[styles.headerBarTitle]} size={size}>
				{title}
			</Title>
			{children}
		</Bar>
	);
};
