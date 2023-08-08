const Forth = ({ isTabletOrMobile }) => {
	return (
		<div
			className={
				"flex flex-row-reverse items-end  gap-10 " +
				(isTabletOrMobile
					? "justify-center mt-4  flex-wrap"
					: "justify-start translate-y-[-30px]")
			}
		>
			<div className='flex items-end'>
				{isTabletOrMobile ? (
					<img className='w-[20rem] h-[11.45rem]' src={`/722173_mobile.png`} />
				) : (
					<img className='w-[38.25rem] h-[21.89813rem]' src={`/assets/722173.png`} />
				)}
				{isTabletOrMobile ? (
					<></>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='119'
						height='454'
						viewBox='0 0 119 454'
						fill='none'
					>
						<path d='M0 104.139L119 0V344.595L0 454V104.139Z' fill='#2B769E' />
					</svg>
				)}
			</div>
			<div className='flex flex-col gap-3 justify-center my-auto mx-auto'>
				<div className={isTabletOrMobile ? "" : "w-[38vw]"}>
					<div className='p-3 text-neutral-800 text-xl font-semibold leading-normal'>
						Corporate Governance
					</div>
					<div className='p-3 text-neutral-500 text-sm font-normal leading-normal'>
						PVV Infra Limited believes in conducting its affairs with the
						highest level of integrity, with proper authorizations,
						professionalism, accountability and transparency. The business
						operations of PVV Infra Limited are conducted not to benefit any
						particular interest group but for the benefit of all stakeholders.
						All matters of strategy, annual budgets, significant developments
						etc., are routinely placed before the Board. The Audit and Share
						Transfer and Grievance Committees regularly meet to consider aspects
						relevant to each committee whereas the Remuneration Committee meets
						based on need.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forth;
