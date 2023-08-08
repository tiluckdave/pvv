import Row from "./Row";

const PdfComponents = () => {
	const array = [
		{
			title: "Corrigendum to AGM Notice",
			date: "24th September, 2022",
		},
		{
			title: "Valuation Report",
			date: " ",
		},
		{
			title: "Outcome of Board Meeting",
			date: "08 Jun 2019",
		},
		{
			title: "Reg.24(A)-Annual Secretarial Compliance",
			date: "30 May 2019",
		},
		{
			title:
				"Outcome Of Board Meeting Under Regulation 30 Read With 33 (3) (C) Of SEBI (Listing Obligations And Disclosure Requirements) Regulations,2015.",
			date: "29 May 2019",
		},
		{
			title:
				"Format of Initial Disclosure to be made by an entity identified as a Large Corporate",
			date: "27 May 2019",
		},
		{
			title:
				"Board Meeting Intimation for Intimation Of Board Meeting Under Regulation 29(1) (A) Of SEBI (Listing Obligations And Disclosure Requirements) Regulations, 2015.",
			date: "20 May 2019",
		},
	];

	return (
		<div className='pdf-container'>
			{array.map((row, index) => {
				return <Row key={index} row={row} />;
			})}
			<button>Show more</button>
		</div>
	);
};

export default PdfComponents;
