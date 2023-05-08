import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import MuiNavBar from "./components/MuiNavBar";
import Toolbar from "@mui/material/Toolbar";
import Colors from "./MuiComponents/Colors";
import MuiSideBar from "./components/MuiSideBar";
const drawerWidth = 240;
function Overview(props) {
	/*const [dropvalue, setDropvalue] = React.useState();
	const [value, setValue] = React.useState("1");
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};*/
	// implementation of the responsive sidebar
	return (
		<div>
			<MuiNavBar />
			<Box sx={{ display: "flex" }}>
				<MuiSideBar />
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 2,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					<div style={{ margin: "1rem 0 0 3rem" }}>
						{/***********************COLORS***********************/}
						<Colors />
					</div>
				</Box>
			</Box>
		</div>
	);
}
Overview.propTypes = {
	window: PropTypes.func,
};

export default Overview;
