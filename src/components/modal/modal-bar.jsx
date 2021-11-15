import { MdClose } from 'react-icons/md';
import { VARIANT } from '../../constants/ui/button';
import { HeaderBar } from '../header-bar';
import { IconButton } from '../button/icon-button';

export const ModalBar = ({
	size,
	color,
	ModalTitleIcon,
	modalTitle,
	onClose,
	style,
	styleDefinitions,
}) => {
	return (
		<HeaderBar
			size={size}
			color={color}
			TitleIcon={ModalTitleIcon}
			title={modalTitle}
			style={style}
			styleDefinitions={styleDefinitions}
		>
			{onClose && (
				<IconButton
					variant={VARIANT.TEXT}
					ButtonIcon={MdClose}
					onClick={onClose}
					style={{
						'--wireframe-button-color': 'var(--wireframe-foreground-color)',
					}}
				/>
			)}
		</HeaderBar>
	);
};
