import { HeaderBar } from '../header-bar';

export const CardBar = ({
	size,
	CardBarTitleIcon,
	cardBarTitle,
	color,
	children,
}) => {
	return (
		<HeaderBar
			size={size}
			TitleIcon={CardBarTitleIcon}
			title={cardBarTitle}
			color={color}
		>
			{children}
		</HeaderBar>
	);
};
