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
	Box
} from "@mui/material";

function Banner() {
	return (
		<Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
			<img
				src={BannerImg}
				alt=""
				width="500px"
				height=""
				style={{ marginTop: "30px" }}
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
            <Box className="indicator-one"></Box>
            <Box className="indicator-two"></Box>
            <Box className="indicator-three"></Box>
            </center>
		</Box>
	);
}

export default Banner;
