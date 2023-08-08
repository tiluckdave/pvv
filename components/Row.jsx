const Row = ({ row }) => {
	return (
		<div className='row-container'>
			<div className='flex flex-col w-[70%]'>
				<p className='title'>{row.title}</p>
				<p className='date'>{row.date}</p>
			</div>

			<div>
				<img src={`/assets/pdf.svg`} alt='Your SVG' />
			</div>
		</div>
	);
};

export default Row;
