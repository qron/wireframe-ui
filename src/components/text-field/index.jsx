import { StyleSheet, css } from 'aphrodite/no-important';
import { DEFAULT_SIZE, SIZE } from '../../constants/ui/size';
import { Icon } from '../icon';
import { Text } from '../text';
import { View } from '../view';
import { TextFieldLabel } from './text-field-label';

const styles = StyleSheet.create({
	textField: {
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
	textFieldS: {
		height: 'var(--wireframe-dimension-s)',
		paddingLeft: 'var(--wireframe-spacing-element)',
		paddingRight: 'var(--wireframe-spacing-element)',
		fontSize: 'var(--wireframe-font-size-m-s)',
	},
	textFieldM: {
		height: 'var(--wireframe-dimension-m)',
		paddingLeft: 'var(--wireframe-spacing-element)',
		paddingRight: 'var(--wireframe-spacing-element)',
		fontSize: 'var(--wireframe-font-size-m-m)',
	},
	textFieldL: {
		height: 'var(--wireframe-dimension-l)',
		paddingLeft: 'var(--wireframe-spacing-element)',
		paddingRight: 'var(--wireframe-spacing-element)',
		fontSize: 'var(--wireframe-font-size-m-l)',
	},

	textFieldWithBeforeIconS: {
		paddingLeft: 'var(--wireframe-dimension-s)',
	},
	textFieldWithBeforeIconM: {
		paddingLeft: 'var(--wireframe-dimension-m)',
	},
	textFieldWithBeforeIconL: {
		paddingLeft: 'var(--wireframe-dimension-l)',
	},

	textFieldWithAfterIconS: {
		paddingRight: 'var(--wireframe-dimension-s)',
	},
	textFieldWithAfterIconM: {
		paddingRight: 'var(--wireframe-dimension-m)',
	},
	textFieldWithAfterIconL: {
		paddingRight: 'var(--wireframe-dimension-l)',
	},

	textFieldIcon: {
		color: 'var(--wireframe-foreground-color)',
		position: 'absolute',
		bottom: 0,
	},
	textFieldBeforeIcon: {
		left: 0,
	},
	textFieldAfterIcon: {
		position: 'absolute',
		right: 0,
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
	BeforeIcon,
	AfterIcon,
	list,
}) => {
	return (
		<View style={style} styleDefinitions={styleDefinitions}>
			{!!label && (
				<TextFieldLabel fieldId={id} size={size}>
					{label}
				</TextFieldLabel>
			)}
			<input
				id={id}
				type="text"
				className={css(
					styles.textField,
					styles[`textField${SIZE[size]}`],
					!!BeforeIcon && styles[`$textFieldWithBeforeIcon${SIZE[size]}`],
					!!AfterIcon && styles[`$textFieldWithAfterIcon${SIZE[size]}`]
				)}
				value={value}
				list={list}
				onChange={onChange}
			/>
			{!!BeforeIcon && (
				<Icon
					Icon={BeforeIcon}
					size={size}
					styleDefinitions={[styles.textFieldIcon, styles.textFieldBeforeIcon]}
				/>
			)}
			{!!AfterIcon && (
				<Icon
					Icon={AfterIcon}
					size={size}
					styleDefinitions={[styles.textFieldIcon, styles.textFieldAfterIcon]}
				/>
			)}
		</View>
	);
};
