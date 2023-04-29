import React, { FormEvent, ReactNode, useState } from 'react';
import { TiFormContext } from '../lib/Context';

type TiFormProps = {
	initialValues: Record<string, string>;
	className: string;
	onSubmit: (values: Record<string, string>) => void;
	children: ReactNode;
	action: string;
	method: string;
};

export function TiForm({
	initialValues = {},
	className,
	onSubmit = () => {},
	children,
	action,
	method,
	...rest
}: TiFormProps): JSX.Element {
	const [values, setValues] = useState<Record<string, string>>(initialValues);
	const [submit, setSubmit] = useState<boolean>(false);
	// const [valid, setValid] = useState<Array<boolean | null>>([]);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (action && method) {
			await fetch(action, {
				method: method,
				body: JSON.stringify(values),
			});
		}
		setSubmit(true);
		onSubmit(values);
		setTimeout(() => {
			setSubmit(false);
		}, 2000);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={className}
			action={action}
			method={method}
			{...rest}
		>
			<TiFormContext.Provider
				value={{
					values,
					setValues,
					submit,
					setSubmit,
					// valid,
					// setValid,
				}}
			>
				{children}
			</TiFormContext.Provider>
		</form>
	);
}
