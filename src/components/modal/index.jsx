import { StyleSheet } from 'aphrodite/no-important';
import { ElevatedView } from '../elevated-view';
import { Overlay } from '../overlay';

const styles = StyleSheet.create({
	modal: {
		marginTop: 'calc(var(--wireframe-dimension-m) * 2)',
		marginBottom: 'calc(var(--wireframe-dimension-m) * 2)',
	},
});

export const Modal = ({
	size,
	style,
	styleDefinitions = [],
	children,
	onClose,
	modalTitle,
	ModalTitleIcon,
}) => {
	return (
		<Overlay>
			<ElevatedView
				elevation={4}
				styleDefinitions={[styles.modal, ...styleDefinitions]}
				style={style}
			>
				{children}
			</ElevatedView>
		</Overlay>
	);
};
