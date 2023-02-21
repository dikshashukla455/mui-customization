import React, { useState } from "react";
import {
	AppBar,
	Button,
	Tab,
	Tabs,
	Toolbar,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import LogoImg from "../images/Logo.jpg";
import DrawerComp from "./Drawer";
import {ThemeProvider} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
					background: "transparent",
					padding: `${isMatch ? "0" : "0 100px"}`,
					color: "black",
					boxShadow:"none"
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
								<Tab
									label="FAQ"
									sx={{ textTransform: "Capitalize", fontWeight: "400" }}
								/>
								<Button
									color="primary"
									variant="contained"
									sx={{ fontSize: "12px", fontWeight: "400" }}
								>
									EN<KeyboardArrowDownIcon/>
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
