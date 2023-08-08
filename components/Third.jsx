const Third = ({ isTabletOrMobile }) => {
	return (
		<div
			className={
				"flex mt-10 gap-10 " +
				(isTabletOrMobile ? " justify-center flex-wrap " : "justify-start")
			}
		>
			<div className={"flex justify-center"}>
				{isTabletOrMobile ? (
					<></>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='96'
						height='461'
						viewBox='0 0 96 461'
						fill='none'
					>
						<path
							d='M-23 105.745L96 0V349.909L-23 461V105.745Z'
							fill='#F0A31E'
						/>
					</svg>
				)}

				{isTabletOrMobile ? (
					<img className='w-[20rem] h-[11.45rem]' src={`/assets/722172_mobile.png`} />
				) : (
					<img className='w-[38.25rem] h-[21.89813rem]' src={`/assets/722172.png`} />
				)}
			</div>

			<div className='flex flex-col gap-3 justify-center my-auto mx-auto'>
				<div className={isTabletOrMobile ? "" : "w-[38vw]"}>
					<div className='p-3 text-neutral-800 text-xl font-semibold leading-normal'>
						Investor
					</div>
					<div className=' p-3 text-neutral-500 text-base font-normal leading-normal'>
						The Investor Relations function at PVV Infra Limited seeks to
						communicate with existing and potential investors. Company’s
						business operations and important financial information as given, it
						facilitates the investor to take informed decisions on their
						investment options.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Third;
