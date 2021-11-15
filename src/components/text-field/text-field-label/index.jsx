import { Text } from '../../text';

export const TextFieldLabel = ({ fieldId, children, size }) => {
	return (
		<label for={fieldId}>
			<Text size={size} small>
				{children}
			</Text>
		</label>
	);
};
