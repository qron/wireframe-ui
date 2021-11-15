import { MdClose } from 'react-icons/md';
import { StyleSheet } from 'aphrodite/no-important';
import { Card } from '../card';
import { Overlay } from '../overlay';
import { CardBar } from '../card/card-bar';
import { CardContent } from '../card/card-content';
import { IconButton } from '../button/icon-button';
import { VARIANT } from '../../constants/ui/button';

const styles = StyleSheet.create({
	modal: {
		marginTop: 'calc(var(--wireframe-dimension-m) * 2)',
		marginBottom: 'calc(var(--wireframe-dimension-m) * 2)',
	},
});

export const Modal = ({
	size,
	style,
	styleDefinitions,
	children,
	onClose,
	modalTitle,
	ModalTitleIcon,
}) => {
	return (
		<Overlay>
			<Card elevation={4} styleDefinitions={[styles.modal]} style={style}>
				<CardBar
					size={size}
					CardBarTitleIcon={ModalTitleIcon}
					cardBarTitle={modalTitle}
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
				</CardBar>
				<CardContent>{children}</CardContent>
			</Card>
		</Overlay>
	);
};
