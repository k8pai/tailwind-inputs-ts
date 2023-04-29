import { Dispatch, SetStateAction, createContext } from 'react';

// Context for managing form state
export type TiFormContextType = {
	values: Record<string, string>;
	setValues: Dispatch<SetStateAction<Record<string, string>>>;
	submit: Boolean;
	setSubmit: Dispatch<SetStateAction<boolean>>;
	valid?: Array<Boolean | null>;
	setValid?: (value: Boolean) => void;
};

export const TiFormContext = createContext<TiFormContextType>({
	values: {},
	setValues: () => {},
	submit: false,
	setSubmit: () => {},
	valid: [],
	setValid: () => {},
});

type TiCheckboxContextType = {
	checked: Array<String>;
	setChecked: () => void;
};
export const TiCheckboxContext = createContext<TiCheckboxContextType>({
	checked: [],
	setChecked: () => {},
});

export const TiSelectContext = createContext({
	selected: '',
	setSelected: () => {},
	isOpen: false,
	setIsOpen: () => {},
});

export const TiMultiselectContext = createContext({
	selected: [],
	setSelected: () => {},
	isOpen: false,
	setIsOpen: () => {},
});

export const TiInputContext = createContext({
	value: '',
	setValue: () => {},
	valid: null,
	setValid: () => {},
});

export const TiFileContext = createContext({
	name: '',
	file: '',
	setFile: () => {},
});
