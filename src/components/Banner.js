import React from "react";
import BannerImg from "../images/Screenshot (1220).png";
import {
	AppBar,
	Button,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

function Banner() {
	return (
		<div>
			<img
				src={BannerImg}
				alt=""
				width="500px"
				height=""
				style={{ margin: "100px 0 0 110px" }}
			/>
			<Typography
				color="white"
				variant="h2"
				align="center"
				sx={{ margin: "40px 0 20px 0" }}
			>
				The perfect analytics tool <br /> for your business
			</Typography>
			<Typography
				color="interfaceThree.main"
				variant="bodyLarge"
			>
            <center>
				Create an ecommerce website backed by powerful tools <br /> that help
				you find customers, drive sales, and manage your <br /> day-to-day.</center>
			</Typography>
            <center>
            <div className="indicator-one"></div>
            <div className="indicator-two"></div>
            <div className="indicator-three"></div>
            </center>
		</div>
	);
}

export default Banner;
