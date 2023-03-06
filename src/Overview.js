import React from "react";
import {
	Typography,
	Button,
	TextField,
	Checkbox,
	Radio,
	FormControl,
	FormControlLabel,
	Box,
	FormGroup,
	MenuItem,
	Select,
	Tab,
	Tabs,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Input from "@mui/material/Input";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseImg from "./images/cross.svg";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Switch from "@mui/material/Switch";
import LogoImg from "./images/Logo.jpg";
import colorImg from "./images/color.png";
import typoImg from "./images/typo.png";
import buttonImg from "./images/button.png";
import fieldImg from "./images/field.png";
import inputbtnImg from "./images/inputBtn.png";
import dropdownImg from "./images/dropdown.png";
import dialogImg from "./images/dialog.png";
import tooltipImg from "./images/tooltip.png";
import accordionImg from "./images/carbon (2).png";
import switchImg from "./images/carbon (3).png";
import tabImg from "./images/tabpanel.png";

const ariaLabel = { "aria-label": "description" };

function Overview() {
	const [dropvalue, setDropvalue] = React.useState();
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const [language, setLanguage] = React.useState("");
	// adding the functionality of open and close popup modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const DrophandleChange = (event) => {
		setLanguage(event.target.value);
	};

	return (
		<div style={{ margin: "2rem 0 0 3rem" }}>
			<Typography variant="h1">Overview</Typography>
			<br />
			<br />
			{/* ===========================COLORS============================= */}
			<Typography variant="h3" mb={2}>
				Colors
			</Typography>
			<Typography variant="bodyMedium">
				The color(text color and background color) can be customizable based on{" "}
				<br />
				<br />
				using color palette -
				<ul>
					<li>primary</li>
					<li>secondary</li>
					<li>info</li>
					<li>error</li>
					<li>success</li>
				</ul>{" "}
				or using custom variant props.{" "}
			</Typography>
			<br /> <br />
			<img src={colorImg} width="600px" alt="" />
			<br /> <br />
			<Typography variant="h5" color="primary">
				This is primary color.
			</Typography>
			<Typography variant="h5" color="interfaceThree.main">
				This is a custom color.
			</Typography>
			<Typography variant="h5" color="secondary">
				This is secondary color.
			</Typography>
			<Typography variant="h5" color="info">
				This is info color.
			</Typography>
			<Typography variant="h5" color="error">
				This is error color.
			</Typography>
			<br />
			{/* ===========================TYPOGRAPHY============================= */}
			<Typography variant="h3" mb={2}>
				Typography
			</Typography>
			<Typography variant="bodyMedium">
				the typography(size and font weight of the font) and heading can be
				customizable based on the variant prop having their names <br />
				<br />
				headings -
				<ul>
					<li>h1</li>
					<li>h2</li>
					<li>h3</li>
					<li>h4</li>
					<li>h5</li>
					<li>h6</li>
				</ul>
				size of text -
				<ul>
					<li>bodyLarge</li>
					<li>bodyMedium</li>
					<li>body1</li>
				</ul>
				font weight of text -
				<ul>
					<li>fontWeightLight</li>
					<li>fontWeightRegular</li>
					<li>fontWeightMedium</li>
					<li>fontWeightBold</li>
				</ul>
			</Typography>
			<br /> <br />
			<img src={typoImg} width="600px" alt="" />
			<br /> <br />
			<Typography variant="h1" mb={2}>
				This is an h1 heading.
			</Typography>
			<Typography variant="h2" mb={2}>
				This is an h2 heading.
			</Typography>
			<Typography variant="h3" mb={2}>
				This is an h3 heading.
			</Typography>
			<Typography variant="h4" mb={2}>
				This is an h4 heading.
			</Typography>
			<Typography variant="h5" mb={2}>
				This is an h5 heading.
			</Typography>
			<Typography variant="h6" mb={2}>
				This is an h6 heading.
			</Typography>
			<Typography variant="bodyLarge" fontWeight="fontWeightLight">
				This is an large font and light font weight of the text.
			</Typography>
			<br />
			<br />
			<Typography variant="bodyMedium" fontWeight="fontWeightMedium">
				This is an medium font and medium font weight of the text.
			</Typography>
			<br />
			<br />
			<Typography variant="bodySmall" fontWeight="fontWeightBold">
				This is an small font and large font weight of the text.
			</Typography>
			<br />
			<br />
			{/* ===========================BUTTONS============================= */}
			<Typography variant="h3" mb={2}>
				Buttons
			</Typography>
			<Typography variant="bodyMedium">
				The buttons can be customizable based on using style overrides or <br />
				<br />
				using color palette -
				<ul>
					<li>primary</li>
					<li>secondary</li>
					<li>info</li>
					<li>error</li>
					<li>success</li>
				</ul>
				using variants -
				<ul>
					<li>Contained</li>
					<li>Outlined</li>
				</ul>
				(MuiButton).
				<br /> <br />
				<img src={buttonImg} width="700px" alt="" />
				<br /> <br />
				<Button
					color="primary"
					variant="contained"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					primary-contained
				</Button>
				<Button
					color="primary"
					variant="outlined"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					primary-outlined
				</Button>
				<Button
					color="secondary"
					variant="contained"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					secondary-contained
				</Button>
				<Button
					color="secondary"
					variant="outlined"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					secondary-outlined
				</Button>
				<Button
					color="info"
					variant="contained"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					info-contained
				</Button>
				<Button
					color="info"
					variant="outlined"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					info-outlined
				</Button>
				<Button
					color="success"
					variant="contained"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					success-contained
				</Button>
				<Button
					color="success"
					variant="outlined"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					success-outlined
				</Button>
				<Button
					color="error"
					variant="contained"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					error-contained
				</Button>
				<Button
					color="error"
					variant="outlined"
					sx={{ padding: "14px 0", width: "20%", margin: "10px 15px 0 0" }}
				>
					error-outlined
				</Button>
			</Typography>
			<br />
			<br />
			<br />
			{/* ===========================TEXT FIELDS============================= */}
			<Typography variant="h3" mb={2}>
				Text Fields
			</Typography>
			<Typography variant="bodyMedium">
				The input fields can be customizable based on
				<br /> <br /> using variants -{" "}
				<ul>
					<li>Filled</li>
					<li>Outlined</li>
					<li>Standard</li>
				</ul>{" "}
				or using style overrides(MuiInput) for the custom variants .
			</Typography>
			<br /> <br />
			<img src={fieldImg} width="600px" alt="" />
			<br /> <br />
			<TextField
				id="outlined-basic"
				placeholder="Outlined"
				variant="outlined"
				disableUnderline={true}
				sx={{ marginRight: "15px", marginTop: "15px" }}
			/>
			<div className="" style={{ width: "14%", display: "inline-block" }}>
				<Input
					id="filled-basic"
					placeholder="Filled"
					variant="filled"
					disableUnderline={true}
					sx={{ marginRight: "15px", marginTop: "15px" }}
				/>
			</div>
			<TextField
				id="standard-basic"
				label="Standard"
				defaultValue="Hello World"
				placeholder="Standard"
				variant="standard"
				disableUnderline={true}
				sx={{ marginLeft: "15px", marginTop: "0px" }}
			/>
			<br />
			<br />
			{/* ===========================CHECKBOX AND RADIO============================= */}
			<Typography variant="h3" mb={2}>
				Checkbox and Radio buttons
			</Typography>
			<Typography variant="bodyMedium">
				The checkbox and radio buttons can be customizable(height, width, and
				color) based on
				<br /> label prop, value(position) prop and other default props or using
				style overrides.(MuiRadio and MuiCheckbox).
			</Typography>
			<br /> <br />
			<img src={inputbtnImg} width="600px" alt="" />
			<br /> <br />
			<FormControl>
				<FormControlLabel value="end" control={<Checkbox />} label="Checkbox" />
			</FormControl>
			<FormControl>
				<FormControlLabel value="end" control={<Radio />} label="Radio" />
			</FormControl>
			<br />
			<br />
			{/* ===========================DROPDOWN MENU============================= */}
			<Typography variant="h3" mb={2}>
				Dropdown down
			</Typography>
			<Typography variant="bodyMedium">
				The dropdown menu can be customizable based on the changes in menu
				component and <br /> other default props or using style
				overrides.(MuiSelect)
			</Typography>
			<br /> <br />
			<img src={dropdownImg} width="600px" alt="" />
			<br /> <br />
			<FormControl>
				<Select
					sx={{ "& .MuiSvgIcon-root": { color: "white" }, width: "130px" }}
					value={language}
					onChange={DrophandleChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
					IconComponent={ExpandMoreIcon}
				>
					<MenuItem value="">Numbers</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			{/* ===========================DIALOG BOX============================= */}
			<Typography variant="h3" mt={3} mb={2}>
				Dialog box
			</Typography>
			<Typography variant="bodyMedium">
				The Tabs can be customizable based on <br />
				using custom variants or using style overrides (MuiModal).
			</Typography>
			<br /> <br />
			<img src={dialogImg} width="600px" alt="" />
			<br /> <br />
			<Button
				color="secondary"
				fontWeight="fontWeightBold"
				variant="contained"
				onClick={handleOpen}
				sx={{ width: "30%", padding: "10px 0" }}
			>
				Click to see dialog box
			</Button>
			{/* ================VERIFICATION MODAL=============== */}
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				variant="dialogBox"
			>
				<div className="" style={{ width: "520px" }}>
					{/* adding the cross image for closing the popup */}
					<div className="close-img" onClick={handleClose}>
						<img src={CloseImg} alt="" width="12px" />
					</div>
					<img src={LogoImg} width="130px" alt="" class="logo" />
					{/* verification form */}
					<DialogTitle id="alert-dialog-title">
						<Typography variant="h5" fontWeight="fontWeightBold">
							Enter verification code
						</Typography>
					</DialogTitle>

					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<Typography color="interfaceTwo.main" variant="bodyMedium">
								We have just sent a verification code to tynisha*****@mail.com
							</Typography>
						</DialogContentText>
						{/* verification code input fields */}
						<Input
							placeholder=""
							inputProps={ariaLabel}
							disableUnderline={true}
							variant="popInput"
						/>

						<Input
							placeholder=""
							inputProps={ariaLabel}
							disableUnderline={true}
							variant="popInput"
						/>

						<Input
							placeholder=""
							inputProps={ariaLabel}
							disableUnderline={true}
							variant="popInput"
						/>

						<Input
							placeholder=""
							inputProps={ariaLabel}
							disableUnderline={true}
							variant="popInput"
						/>

						<Input
							placeholder=""
							inputProps={ariaLabel}
							disableUnderline={true}
							variant="popInput"
						/>

						<Typography
							variant="body1"
							color="primary.main"
							fontWeight="fontWeightBold"
							style={{
								display: "block",
								marginTop: "32px",
								marginBottom: "10px",
							}}
						>
							{" "}
							Send the code again
						</Typography>
						<br />
						{/* verify button */}
						<Button
							color="primary"
							fontWeight="fontWeightBold"
							variant="contained"
							fontSize="bodyMedium.fontSize"
							onClick={handleClose}
							sx={{ width: "100%", padding: "14px 0", marginBottom: "12px" }}
						>
							Verify
						</Button>
					</DialogContent>
				</div>
			</Dialog>
			{/* ===========================TABS============================= */}
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
			{/* <Tabs
				sx={{
					marginLeft: "auto",
					backgroundColor: "black",
					textTransform: "Capitalize",
					fontWeight: "400",
					width: "50%",
					marginTop: "20px",
					marginX: "0",
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
			</Tabs> */}
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
							<Tab label="Features" value="2" variant="overviewTab"/>
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
			{/* ===========================TOOLTIPS============================= */}
			<Typography variant="h3" my={2}>
				Tooltips
			</Typography>
			<Typography variant="bodyMedium">
				The Tooltips can be customizable based on <br />
				<br />
				position of tooltips -
				<ul>
					<li>top-start</li>
					<li>top(center)</li>
					<li>top-end</li>
					<li>left-start</li>
					<li>left(center)</li>
					<li>left-end</li>
					<li>right-start</li>
					<li>right(center)</li>
					<li>right-end</li>
					<li>bottom-start</li>
					<li>bottom(center)</li>
					<li>bottom-end</li>
				</ul>
				and using custom variant props through style overrides (MuiTooltip)
				<br /> <br />
				<img src={tooltipImg} width="600px" alt="" />
				<br /> <br />
			</Typography>
			<Tooltip
				title="This is a tooltip"
				placement="top"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					top tooltip
				</Button>
			</Tooltip>
			<Tooltip
				title="This is a tooltip"
				placement="left"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					left tooltip
				</Button>
			</Tooltip>
			<Tooltip
				title="This is a tooltip"
				placement="bottom"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					bottom tooltip
				</Button>
			</Tooltip>
			<Tooltip
				title="This is a tooltip"
				placement="right"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					right tooltip
				</Button>
			</Tooltip>
			<br />
			{/* ===========================ACCORDION============================= */}
			<Typography variant="h3" mb={2} mt={3}>
				Accordion
			</Typography>
			<Typography variant="bodyMedium">
				The accordion can be customizable based on
				<br /> using style overrides(MuiAccordion) for the custom variants.
				<br /> There is a disabled attribute to disable the part of the
				accordion.
			</Typography>
			<br /> <br />
			<img src={accordionImg} width="600px" alt="" />
			<br /> <br />
			<Accordion sx={{ "& .MuiSvgIcon-root": { color: "black" } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ "& .MuiSvgIcon-root": { color: "black" } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ "& .MuiSvgIcon-root": { color: "black" } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			{/* ===========================switch============================= */}
			<Typography variant="h3" mb={2} mt={3}>
				Switch
			</Typography>
			<Typography variant="bodyMedium">
				The switch can be customizable based on
				<br />
				<br />
				using color palette (to change the color) -
				<ul>
					<li>primary</li>
					<li>secondary</li>
					<li>info</li>
					<li>error</li>
					<li>success</li>
				</ul>
				using style overrides(MuiSwitch) for the custom variants. <br />
				<br /> There is a disabled attribute to disable the switch.
			</Typography>
			<br /> <br />
			<img src={switchImg} width="600px" alt="" />
			<br /> <br />
			<FormGroup>
				<FormControlLabel control={<Switch defaultChecked />} label="Label" />
				<FormControlLabel disabled control={<Switch />} label="Disabled" />
			</FormGroup>
		</div>
	);
}

export default Overview;
