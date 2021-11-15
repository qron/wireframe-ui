import { MdSearch } from 'react-icons/md';
import { TextField } from '../text-field';

export const SearchField = ({
	id,
	value,
	onChange,
	label,
	size,
	style,
	styleDefinitions,
}) => {
	return (
		<TextField
			id={id}
			value={value}
			label={label}
			style={style}
			styleDefinitions={styleDefinitions}
			BeforeIcon={MdSearch}
			onChange={onChange}
			size={size}
		/>
	);
};
