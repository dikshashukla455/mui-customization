import React from "react";
import { Typography,Tab} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import tabImg from "../images/tabpanel.png";
function Tabs() {
	return (
		<div>
			<Typography variant="h3" my={2}>
				Navbars and Tabs
			</Typography>
			<Typography variant="bodyMedium">
				The Tabs can be customizable based on <br />
				using custom variants or using style overrides (MuiTab).
			</Typography>
			<br /> <br />
			<img src={tabImg} width="600px" alt="" />
			<br /> <br />
			<Box
				sx={{
					marginLeft: "auto",
					backgroundColor: "white",
					textTransform: "Capitalize",
					color: "black",
					fontWeight: "400",
				}}
			>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Products" value="1" variant="overviewTab" />
							<Tab label="Features" value="2" variant="overviewTab" />
							<Tab label="Pricing" value="3" variant="overviewTab" />
							<Tab label="FAQs" value="4" variant="overviewTab" />
						</TabList>
					</Box>
					<TabPanel value="1">Products</TabPanel>
					<TabPanel value="2">Features</TabPanel>
					<TabPanel value="3">Pricing</TabPanel>
					<TabPanel value="4">FAQs</TabPanel>
				</TabContext>
			</Box>
		</div>
	);
}

export default Tabs;
