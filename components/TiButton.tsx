type tiButtonType = {
	type: 'button' | 'submit' | 'reset';
	title: string;
};

function TiButton({ type, title, ...props }: tiButtonType) {
	return (
		<button type={type} {...props}>
			{title}
		</button>
	);
}
