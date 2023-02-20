import React, { useState } from "react";
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
import LogoImg from "../images/Logo.jpg";
import DrawerComp from "./Drawer";
const Navbar = () => {
	const [value, setValue] = useState();
	const theme = useTheme();
	console.log(theme);
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));
	console.log(isMatch);

	return (
		<>
			<AppBar
				sx={{
					background: "#ffffff",
					paddingLeft: "100px",
					paddingRight: "100px",
					color: "black",
				}}
			>
				<Toolbar>
					<img src={LogoImg} alt="" />
					{isMatch ? (
						<>
							<DrawerComp />
						</>
					) : (
						<>
							<Tabs
								sx={{ marginLeft: "auto" }}
								indicatorColor="secondary"
								textColor="inherit"
								value={value}
								onChange={(e, value) => setValue(value)}
							>
								<Tab
									label="Products"
									sx={{ textTransform: "Capitalize", fontWeight: "400" }}
								/>
								<Tab
									label="Features"
									sx={{ textTransform: "Capitalize", fontWeight: "400" }}
								/>
								<Tab
									label="Pricing"
									sx={{ textTransform: "Capitalize", fontWeight: "400" }}
								/>
								3.
								<Tab
									label="FAQ"
									sx={{ textTransform: "Capitalize", fontWeight: "400" }}
								/>
								<Button
									color="success"
									variant="contained"
									sx={{ fontSize: "12px", fontWeight: "400" }}
								>
									EN
								</Button>
							</Tabs>
						</>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
