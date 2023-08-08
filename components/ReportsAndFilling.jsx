const ReportsAndFilling = () => {
	return (
		<>
			<div id='holding-box' className='container'>
				<div className='top'>
					<p className='heading'>Reports and Fillings</p>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='180'
						height='5'
						viewBox='0 0 180 5'
						fill='none'
					>
						<line y1='2.5' x2='180' y2='2.5' stroke='#6F6F6F' />
						<rect x='50' width='80' height='5' rx='2.5' fill='#F0A31E' />
					</svg>
				</div>

				<div className='financialYear'>
					<label htmlFor='financial-year'>
						Add your Financial year for Better Result
					</label>
					<select name='' id='financial-year'>
						<option value='FY 24'>FY 24</option>
					</select>
				</div>

				<div className='btn_s'>
					<button
						className='one'
						style={{ backgroundColor: "#2B769E", color: "#fff" }}
					>
						Investor Relations
					</button>
					<button className='two'>Annual Reports</button>
					<button className='three'>Share Holding Patterns</button>
				</div>
			</div>
		</>
	);
};

export default ReportsAndFilling;
