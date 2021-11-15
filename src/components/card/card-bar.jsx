import { HeaderBar } from '../header-bar';

export const CardBar = ({
	size,
	CardBarTitleIcon,
	cardBarTitle,
	color,
	children,
	style,
	styleDefinitions,
}) => {
	return (
		<HeaderBar
			size={size}
			TitleIcon={CardBarTitleIcon}
			title={cardBarTitle}
			color={color}
			style={style}
			styleDefinitions={styleDefinitions}
		>
			{children}
		</HeaderBar>
	);
};
