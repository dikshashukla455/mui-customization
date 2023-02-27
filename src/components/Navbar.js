import React, { useState } from "react";
import {
	AppBar,
	Tab,
	Tabs,
	Toolbar,
	useMediaQuery,
	useTheme,
	MenuItem,
	FormControl,
	Select,
} from "@mui/material";
import LogoImg from "../images/Logo.jpg";
import DrawerComp from "./Drawer";
import { ThemeProvider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Navbar = () => {
	const [value, setValue] = useState();
	const [language, setLanguage] = useState("");
	const theme = useTheme();
	console.log(theme);
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));
	console.log(isMatch);
	const handleChange = (event) => {
		setLanguage(event.target.value);
	};
	

	return (
		<>
			<AppBar
				sx={{
					background: "transparent",
					padding: `${isMatch ? "0" : "0 100px"}`,
					color: "black",
					boxShadow: "none",
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
								sx={{
									marginLeft: "auto",
									color: "#ffffff",
									textTransform: "Capitalize",
									fontWeight: "400",
								}}
								indicatorColor="secondary"
								textColor="primary"
								value={value}
								onChange={(e, value) => setValue(value)}
							>
								<Tab label="Products" sx={{}} />
								<Tab
									label="Features"
									sx={{
										textTransform: "Capitalize",
										fontWeight: "400",
										fontSize: "18px",
									}}
								/>
								<Tab
									label="Pricing"
									sx={{
										textTransform: "Capitalize",
										fontWeight: "400",
										fontSize: "18px",
									}}
								/>
								<Tab
									label="FAQ"
									sx={{
										textTransform: "Capitalize",
										fontWeight: "400",
										fontSize: "18px",
									}}
								/>
								{/* <Button
									color="primary"
									variant="contained"
									sx={{ fontSize: "16px", fontWeight: "400" }}
								>
									EN<KeyboardArrowDownIcon/> 
								</Button>*/}
								<FormControl>
									<Select
									sx={{ "& .MuiSvgIcon-root": { color: "white" } }}
										value={language}
										onChange={handleChange}
										displayEmpty
										inputProps={{ "aria-label": "Without label" }}
										IconComponent={ExpandMoreIcon}
									>
										<MenuItem value="">EN</MenuItem>
										<MenuItem value={10}>HI</MenuItem>
									</Select>
								</FormControl>
							</Tabs>
						</>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
