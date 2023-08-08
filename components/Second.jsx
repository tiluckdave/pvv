const Second = ({ isTabletOrMobile }) => {
	return (
		<div>
			<div className='mt-[108.5px] mb-[13px] mx-auto text-center'>
				<span className='text-cyan-700 text-[32px] font-normal uppercase leading-10'>
					Compliance and{" "}
				</span>
				<span className='text-cyan-700 text-[32px] font-semibold uppercase leading-10'>
					Shareholders Value
				</span>
			</div>
			<div className='mx-auto w-[180px] h-[5px] mb-8 relative'>
				<div className='w-[180px] h-[0px] left-0 top-[3px] absolute border border-neutral-500'></div>
				<div className='w-20 h-[5px] left-[50px] top-0 absolute bg-amber-500 rounded-[28px]' />
			</div>
			{isTabletOrMobile ? (
				<></>
			) : (
				<div className='mx-[155px] text-center text-neutral-500 text-sm font-normal leading-normal'>
					The Company has at all times maintained and upheld the highest
					possible governance practices and procedures by way of timely
					disclosures of applicable laws and regulations. Shareholders’
					interests are always treated as top priority. The response time to any
					complaint or query raised by shareholder is solved within the possible
					stipulated time frame. The Company in the last 3 years has received no
					shareholders complaint on SEBI SCORES portal. The Company emphasizes
					on building trust and integrity through transparent and accountable
					communication with the internal and external stakeholders which
					involves keeping the stakeholders of the Company informed via stock
					exchange mechanism on a timely basis about the development, the plans
					and the performance of the Company with a view to establish long term
					affiliation.
				</div>
			)}{" "}
		</div>
	);
};

export default Second;
