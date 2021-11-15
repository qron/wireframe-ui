import { StyleSheet, css } from 'aphrodite/no-important';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { Text } from '../text';
import { View } from '../view';
import { TextFieldLabel } from './text-field-label';

const styles = StyleSheet.create({
	input: {
		all: 'unset',
		display: 'flex',
		alignItems: 'center',
		borderStyle: 'solid',
		borderWidth: 'var(--wireframe-border-width)',
		borderColor: 'var(--wireframe-border-color)',
		borderRadius: 'var(--wireframe-border-radius)',
		fontFamily: 'var(--wireframe-font-family)',
		boxSizing: 'border-box',
		color: 'var(--wireframe-foreground-color)',
	},
	inputS: {
		height: 'var(--wireframe-dimension-s)',
		paddingLeft: 'var(--wireframe-dimension-s)',
		paddingRight: 'var(--wireframe-dimension-m)',
		fontSize: 'var(--wireframe-font-size-m-s)',
	},
	inputM: {
		height: 'var(--wireframe-dimension-m)',
		paddingLeft: 'var(--wireframe-dimension-m)',
		paddingRight: 'var(--wireframe-dimension-m)',
		fontSize: 'var(--wireframe-font-size-m-m)',
	},
	inputL: {
		height: 'var(--wireframe-dimension-l)',
		paddingLeft: 'var(--wireframe-dimension-l)',
		paddingRight: 'var(--wireframe-dimension-l)',
		fontSize: 'var(--wireframe-font-size-m-l)',
	},
});

export const TextField = ({
	id,
	value,
	onChange,
	label,
	size = DEFAULT_SIZE,
	style,
	styleDefinitions,
}) => {
	return (
		<View style={style} styleDefinitions={styleDefinitions}>
			<FieldLabel fieldId={id} size={size}>
				{label}
			</FieldLabel>
			<input
				id={id}
				type="text"
				className={css(styles.textInput, styles[`input${SIZE[size]}`])}
				value={value}
				onChange={onChange}
			/>
		</View>
	);
};
