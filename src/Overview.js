import React from "react";
import { Typography, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MuiNavBar from "./components/MuiNavBar";
import Colors from "./MuiComponents/Colors";
import Heading from "./MuiComponents/Heading";
import Buttons from "./MuiComponents/Buttons";
import InputButton from "./MuiComponents/InputButton";
import InputField from "./MuiComponents/InputField";
import Dropdown from "./MuiComponents/Dropdown";
import DialogBox from "./MuiComponents/DialogBox";
import Tooltips from "./MuiComponents/Tooltips";
import Accordions from "./MuiComponents/Accordions";
import Switchs from "./MuiComponents/Switchs";
import {
	CustomizedSteppers,
	StandardStepper,
} from "./MuiComponents/CustomStepper";
import Spinner from "./MuiComponents/Spinner";
import MultiSelectDrop from "./MuiComponents/MultiSelectDrop";
import Ratings from "./MuiComponents/Ratings";
import Alerts from "./MuiComponents/Alerts";
import Paginations from "./MuiComponents/Paginations";
import MenuLists from "./MuiComponents/MenuLists";
import Tables from "./MuiComponents/Tables";
import MuiBreadcrumb from "./MuiComponents/MuiBreadcrumb";
import MuiCarousel from "./MuiComponents/MuiCarousel";
import Testimonials from "./MuiComponents/Testimonials";
import Snackbars from "./MuiComponents/Snackbars";
const drawerWidth = 240;
function Overview(props) {
	/*const [dropvalue, setDropvalue] = React.useState();
	const [value, setValue] = React.useState("1");
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};*/
// implementation of the responsive sidebar
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			
			<Divider />
			{/*** Nav links on sidebar (beginner and advanced) */}
			<List>
			<Typography variant = "h6" ml={2}>Beginner</Typography>
				{["Colors", "Typography", "Buttons", "Text fields","Checkbox and Radios", "Dropdown menu", "Dialog", "Tooltip", "Accordion","Switch","Spinner"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
							<ArrowCircleRightIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
			<Typography variant = "h6" ml={2}>Advanced</Typography>
				{["Multi select Dropdown", "Ratings", "Alerts","Pagination","MenuLists","Tables","Breadcrumbs","Carousel", "Snackbar","Stepper","Testimonials"].map((text, index) => (
				<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
							<ArrowCircleRightIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<div>
			<MuiNavBar />
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position="fixed"
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						ml: { sm: `${drawerWidth}px` },
					}}
				>
					<Toolbar>
						<IconButton
							color="White.main"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon style={{ color: "white" }}/>
						</IconButton>
						<Typography variant="h6" noWrap component="div" color="White.main">
							MUI Components
						</Typography>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label="mailbox folders"
				>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
						open
					>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					<Typography variant="h1">Overview</Typography>
					<br />
					<br />
					{/* ===========================COLORS============================= */}
					<Colors />
					<br />
					{/* ===========================TYPOGRAPHY============================= */}
					<Heading />
					<br />
					<br />
					{/* ===========================BUTTONS============================= */}
					<Buttons />
					<br />
					<br />
					<br />
					{/* ===========================TEXT FIELDS============================= */}
					<InputField />
					<br />
					<br />
					{/* ===========================CHECKBOX AND RADIO============================= */}
					<InputButton />
					<br />
					<br />
					{/* ===========================DROPDOWN MENU============================= */}
					<Dropdown />
					{/* ===========================DIALOG BOX============================= */}
					<DialogBox />
					{/* ===========================TABS============================= */}
					<Tabs />
					{/* ===========================TOOLTIPS============================= */}
					<Tooltips />
					<br />
					{/* ===========================ACCORDION============================= */}
					<Accordions />
					{/* ===========================SWITCH============================= */}
					<Switchs />
					{/* ===========================LOADING SPINNERS============================= */}
					<Spinner />
					{/* ===========================MULTI SELECT DROPDOWN============================= */}
					<MultiSelectDrop />
					{/* ===========================RATINGS============================= */}
					<Ratings />
					{/*******************ALERTS*********************************/}
					<Alerts />
					{/*******************PAGINATION*******************************/}
					<Paginations />
					{/************MENU LIST***************** */}
					<MenuLists />
					{/**********************TABLE*************************/}
					<Tables />
					{/**********************BREADCRUMBS*************************/}
					<MuiBreadcrumb />
					{/*********************CAROUSEL***********************/}
					<MuiCarousel />
					{/*********************SNACKBAR***********************/}
					<Snackbars />
					{/*********************STEPPER***********************/}
					<Typography variant="h3" mb={2} mt={3}>
						Stepper
					</Typography>
					<Typography variant="bodyMedium">
						The stepper can be customizable based on using style overrides
						<br />
						(MuiStepper) for the custom variants.
					</Typography>
					<br />
					<br />
					<CustomizedSteppers />
					<StandardStepper />
					{/**********************TESTIMONIALS*************************/}
					<Testimonials />
				</Box>
			</Box>
		</div>
	);
}
Overview.propTypes = {

	window: PropTypes.func,
};

export default Overview;
