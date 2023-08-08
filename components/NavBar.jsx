import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const ShareButton = ({ href }) => {
	return (
		<Link
			href={href}
			style={{
				textDecoration: "none",
				color: "#232323",
				borderRadius: "0.5rem",
				background: "#F0A31E",
				display: "flex",
				padding: "0.84rem 2.72rem",
				justifyContent: "center",
				alignItems: "center",
				gap: "0.625rem",
				flexShrink: 0,
			}}
		>
			SHARE PRICE
		</Link>
	);
};

const MenuItems = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	// a is for the Link
	a {
		font-family: Roboto;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 0.9375rem; /* 93.75% */
		letter-spacing: 0.00844rem;
		text-decoration: none;
	}
	.activeLink {
		color: #232323;
	}
	.notActiveLink {
		color: #767676;
	}
	@media screen and (max-width: 1160px) {
		position: absolute;
		flex-direction: column;
		top: 0;
		right: 0;
		background-color: #f0f0f0;
		height: 100%;
		width: 60%;
		padding: 3rem 2rem 0 2rem;
		a {
			color: black;
			font-size: 1.3rem;
		}
	}
	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

const IconBox = styled.div`
	display: flex;
	align-items: center;
	/// Logo size
	img {
		height: 32px;
		width: 90px;
	}
`;

const MainDiv = styled.div`
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.25rem 6rem 1rem 6rem;
	border-bottom: 1px solid #e3e3e3;
	.menu-icon {
		border: none;
		background-color: transparent;
		font-size: 3rem;
		color: rgba(240, 163, 30, 1);
		margin: 0.5rem 0 0 0;
	}
	.close-icon {
		position: absolute;
		top: 2.1rem;
		right: 2rem;
		border: none;
		background-color: transparent;
		font-size: 2rem;
		color: rgba(240, 163, 30, 1);
	}
	@media screen and (max-width: 1160px) {
		padding: 0rem 1rem;
		.menu-icon {
			margin: 1rem 0 0 0;
		}
	}
`;

const NavBar = () => {
	const router = useRouter();
	const { width } = useWindowDimensions();
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<MainDiv>
			<IconBox>
				<img src='assets/logo.gif' alt='logo' />
			</IconBox>
			{width < 1160 && (
				<button
					type='button'
					onClick={() => setIsNavOpen(!isNavOpen)}
					className='menu-icon'
				>
					<HiMenu />
				</button>
			)}
			{width > 1160 && (
				<MenuItems>
					<Link
						href={"/"}
						className={router.pathname === "/" ? "activeLink" : "notActiveLink"}
					>
						HOME
					</Link>
					<Link
						href={"/about-us"}
						className={
							router.pathname.includes("about-us")
								? "activeLink"
								: "notActiveLink"
						}
					>
						ABOUT US
					</Link>
					<Link
						href={"/investor-relations"}
						className={
							router.pathname.includes("investor-relations")
								? "activeLink"
								: "notActiveLink"
						}
					>
						INVESTOR RELATIONS
					</Link>
					<Link
						href={"/contact-us"}
						className={
							router.pathname.includes("contactus")
								? "activeLink"
								: "notActiveLink"
						}
					>
						CONTACT US
					</Link>
					<ShareButton href={"#"} />
				</MenuItems>
			)}
			{width < 1160 && isNavOpen && (
				<MenuItems>
					<button onClick={() => setIsNavOpen(false)} className='close-icon'>
						<IoClose />
					</button>
					<Link
						href={"/"}
						className={router.pathname === "/" ? "activeLink" : "notActiveLink"}
						onClick={() => setIsNavOpen(false)}
					>
						HOME
					</Link>
					<Link
						href={"/about-us"}
						className={
							router.pathname.includes("aboutus")
								? "activeLink"
								: "notActiveLink"
						}
						onClick={() => setIsNavOpen(false)}
					>
						ABOUT US
					</Link>
					<Link
						href={"/investor-relations"}
						className={
							router.pathname.includes("investor-relations")
								? "activeLink"
								: "notActiveLink"
						}
						onClick={() => setIsNavOpen(false)}
					>
						INVESTOR RELATIONS
					</Link>
					<Link
						href={"/contact-us"}
						className={
							router.pathname.includes("contactus")
								? "activeLink"
								: "notActiveLink"
						}
						onClick={() => setIsNavOpen(false)}
					>
						CONTACT US
					</Link>
					<ShareButton href={"#"} onClick={() => setIsNavOpen(false)} />
				</MenuItems>
			)}
		</MainDiv>
	);
};

export default NavBar;
