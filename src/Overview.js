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
	Rating,
	CircularProgress,
	Autocomplete,
	ClickAwayListener,
	Alert,
	Pagination,
	AlertTitle,
	TablePagination,
	Menu,
	MenuList,
	Stack,
	Table,
	TableCell,
	TableHead,
	TableBody,
	TableContainer,
	TableRow,
	Breadcrumbs,
	Link
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Input from "@mui/material/Input";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseImg from "./images/cross.svg";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import {
	StyledRating,
	StyledIconRating,
	StyledTableCell,
	StyledTableRow,
} from "./Theme";
import PropTypes from "prop-types";
import MuiNavBar from "./components/MuiNavBar";

const ariaLabel = { "aria-label": "description" };

function Overview() {
	const [dropvalue, setDropvalue] = React.useState();
	const [value, setValue] = React.useState("1");
	const [rating, setRating] = React.useState(3);
	const [page, setPage] = React.useState(2);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [MenuOpen, setMenuOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setMenuOpen((prevMenuOpen) => !prevMenuOpen);
	};

	const handleMenuClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setMenuOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setMenuOpen(false);
		} else if (event.key === "Escape") {
			setMenuOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(MenuOpen);
	React.useEffect(() => {
		if (prevOpen.current === true && MenuOpen === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = MenuOpen;
	}, [MenuOpen]);

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

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
	const top100Films = [
		{ title: "The Shawshank Redemption", year: 1994 },
		{ title: "The Godfather", year: 1972 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: "Pulp Fiction", year: 1994 },
		{
			title: "The Lord of the Rings: The Return of the King",
			year: 2003,
		},
		{ title: "The Good, the Bad and the Ugly", year: 1966 },
		{ title: "Fight Club", year: 1999 },
		{
			title: "The Lord of the Rings: The Fellowship of the Ring",
			year: 2001,
		},
		{
			title: "Star Wars: Episode V - The Empire Strikes Back",
			year: 1980,
		},
		{ title: "Forrest Gump", year: 1994 },
		{ title: "Inception", year: 2010 },
		{
			title: "The Lord of the Rings: The Two Towers",
			year: 2002,
		},
		{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ title: "Goodfellas", year: 1990 },
		{ title: "The Matrix", year: 1999 },
		{ title: "Seven Samurai", year: 1954 },
	];
	const customIcons = {
		1: {
			icon: <SentimentVeryDissatisfiedIcon color="error" />,
			label: "Very Dissatisfied",
		},
		2: {
			icon: <SentimentDissatisfiedIcon color="error" />,
			label: "Dissatisfied",
		},
		3: {
			icon: <SentimentSatisfiedIcon color="warning" />,
			label: "Neutral",
		},
		4: {
			icon: <SentimentSatisfiedAltIcon color="success" />,
			label: "Satisfied",
		},
		5: {
			icon: <SentimentVerySatisfiedIcon color="success" />,
			label: "Very Satisfied",
		},
	};

	function IconContainer(props) {
		const { value, ...other } = props;
		return <span {...other}>{customIcons[value].icon}</span>;
	}

	IconContainer.propTypes = {
		value: PropTypes.number.isRequired,
	};
	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
		createData("Eclair", 262, 16.0, 24, 6.0),
		createData("Cupcake", 305, 3.7, 67, 4.3),
		createData("Gingerbread", 356, 16.0, 49, 3.9),
	];
	return (
		<div>
		<MuiNavBar />
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
			{/* ===========================LOADING SPINNERS============================= */}
			<Typography variant="h3" mb={2} mt={3}>
				Loading spinners
			</Typography>
			<Typography variant="bodyMedium">
				The loading spinner can be customizable based on
				<br />
				<br />
				using color palette (to change the color) -
				<ul>
					<li>primary</li>
					<li>secondary</li>
					<li>info</li>
					<li>danger</li>
					<li>success</li>
					<li>neutral</li>
				</ul>
				using style overrides(MuiCircularProgress) for the custom variants.{" "}
				<br />
				<br /> There is a disabled attribute to disable the switch.
			</Typography>
			<br /> <br />
			<img src={switchImg} width="600px" alt="" />
			<br></br>
			<br />
			<CircularProgress color="primary" size="md" value={40} />
			<CircularProgress variant="solid" />
			<CircularProgress variant="soft" />
			<CircularProgress variant="outlined" />
			<CircularProgress variant="plain" />
			{/* ===========================multi select dropdown============================= */}
			<Typography variant="h3" mb={2} mt={3}>
				Multi select dropdown
			</Typography>
			<Typography variant="bodyMedium">
				The multi select dropdown can be customizable based on
				<br />
				<br />
				using color palette (to change the color) -
				<ul>
					<li>primary</li>
					<li>secondary</li>
					<li>info</li>
					<li>danger</li>
					<li>success</li>
					<li>neutral</li>
				</ul>
				using style overrides(MuiCircularProgress) for the custom variants.
			</Typography>
			<br /> <br />
			<img src={switchImg} width="600px" alt="" />
			<br></br>
			<br />
			{/*<Autocomplete
				multiple
				id="tags-default"
				placeholder="Favorites"
				options={top100Films}
				getOptionLabel={(option) => option.title}
				defaultValue={[top100Films[0]]}
			/>*/}
			{/* ===========================Ratings============================= */}
			<Typography variant="h3" mb={2} mt={3}>
				Ratings
			</Typography>
			<Typography variant="bodyMedium">
				The ratings can be customizable based on
				<br />
				<br />
				using variants -
				<ul>
					<li>Controlled rating</li>
					<li>no rating</li>
					<li>Disable</li>
					<li>Custom ratings</li>
				</ul>
				using size props -
				<ul>
					<li>Small</li>
					<li>Medium(default)</li>
					<li>Large</li>
				</ul>
				using style overrides(MuiRating) for the custom variants.
			</Typography>
			<br />
			<br />
			<Typography component="legend">Normal Rating with small size</Typography>
			<Rating
				name="simple-controlled"
				value={rating}
				onChange={(event, newValue) => {
					setRating(newValue);
				}}
				max={6}
				precision={0.5}
				size="small"
			/>
			<Typography component="legend">Disable rating</Typography>
			<Rating name="disabled" value={rating} disabled />
			<Typography component="legend">
				No rating given with large size
			</Typography>
			<Rating name="no-value" value={null} precision={0.5} size="large" />
			<Typography component="legend">Customizing icon and color</Typography>
			<StyledRating
				name="customized-color"
				defaultValue={2}
				precision={0.5}
				icon={<FavoriteIcon fontSize="inherit" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			/>
			<Typography component="legend">Different icons and colors</Typography>
			<StyledIconRating
				name="highlight-selected-only"
				defaultValue={2}
				IconContainerComponent={IconContainer}
				getLabelText={(value) => customIcons[value].label}
				highlightSelectedOnly
			/>
			{/*******************Alerts*********************************/}
			<Typography variant="h3" mb={2} mt={3}>
				Alerts
			</Typography>
			<Typography variant="bodyMedium">
				The ratings can be customizable based on
				<br />
				<br />
				using severity levels -
				<ul>
					<li>error</li>
					<li>warning</li>
					<li>info</li>
					<li>success</li>
				</ul>
				using variants -
				<ul>
					<li>filled</li>
					<li>standard(default)</li>
					<li>outlined</li>
				</ul>
				using style overrides(MuiAlert) for the custom variants.
			</Typography>
			<br />
			<br />
			<Box sx={{ width: "400px" }}>
				<p>Standard variant:</p>
				<Alert severity="error" color="secondary">
					This is an error alert
				</Alert>
				<br />
				<Alert severity="warning">This is a warning alert</Alert>
				<br />
				<p>Filled variant with alert title:</p>

				<Alert severity="info" variant="filled">
					<AlertTitle>Info</AlertTitle> This is an info alert
				</Alert>
				<br />
				<Alert severity="success" color="primary" variant="filled">
					<AlertTitle>Success</AlertTitle>
					This is a success alert
				</Alert>
				<p>Outlined variant:</p>
				<Alert severity="info" variant="outlined">
					This is an info alert
				</Alert>
				<br />
				<Alert severity="error" color="secondary" variant="outlined">
					This is an error alert
				</Alert>
				<br />
			</Box>
			<Typography variant="h3" mb={2} mt={3}>
				Pagination
			</Typography>
			<Typography variant="bodyMedium">
				The Pagination can be customizable based on
				<br />
				<br />
				using variants and shape -
				<ul>
					<li>Standard variant(default)</li>
					<li>Outlined variant</li>
					<li>Rounded Pagination</li>
				</ul>
				using size props -
				<ul>
					<li>Small</li>
					<li>Medium(default)</li>
					<li>Large</li>
				</ul>
				using style overrides(MuiPaginationItem) for the custom variants.
			</Typography>
			<br />
			<br />
			<p>Standard variant (default)</p>
			<Pagination count={10} />
			<Pagination count={10} color="primary" />
			<Pagination count={10} disabled size="small" />
			<p>Outlined variant:</p>
			<Pagination count={10} variant="outlined" color="info" />
			<Pagination count={10} variant="outlined" color="secondary" />
			<p>Rounded Pagination:</p>
			<Pagination
				count={10}
				variant="outlined"
				color="secondary"
				shape="rounded"
				size="large"
			/>
			<br />
			<Pagination count={10} color="success" shape="rounded" />
			<p>Table pagination:</p>
			<Box display="flex" justifyContent="start" alignItems="center">
				<TablePagination
					component="div"
					count={100}
					page={page}
					onPageChange={handleChangePage}
					rowsPerPage={rowsPerPage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>
			{/************Menu List***************** */}
			<Typography variant="h3" mb={2} mt={3}>
				Menu list
			</Typography>
			<Typography variant="bodyMedium">
				The menu list can be customizable based on
				<br />
				<br />
				using transitions -
				<ul>
					<li>Clicked Transition (default)</li>
					<li>Fade Transition</li>
				</ul>
				using style overrides(MuiMenu and MuiMenuItem) for the custom variants.
			</Typography>
			<br />
			<br />
			<Stack direction="row" spacing={2}>
				<Paper>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</Paper>
				<div>
					<Button
						ref={anchorRef}
						id="composition-button"
						aria-controls={MenuOpen ? "composition-menu" : undefined}
						aria-expanded={MenuOpen ? "true" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
						variant="contained"
					>
						Dashboard
					</Button>
					<Popper
						open={MenuOpen}
						anchorEl={anchorRef.current}
						role={undefined}
						placement="bottom-start"
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === "bottom-start" ? "left top" : "left bottom",
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleMenuClose}>
										<MenuList
											autoFocusItem={MenuOpen}
											id="composition-menu"
											aria-labelledby="composition-button"
											onKeyDown={handleListKeyDown}
										>
											<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
											<MenuItem onClick={handleMenuClose}>My account</MenuItem>
											<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
			</Stack>
			{/**********************Table*************************/}
			<Typography variant="h3" mb={2} mt={3}>
				Tables
			</Typography>
			<Typography variant="bodyMedium">
				The Tables can be customizable based on
				<br />
				<br />
				using variants -
				<ul>
					<li>Standard Table </li>
					<li>Stripped table</li>
				</ul>
				using style overrides(MuiTable) for the custom variants.
			</Typography>
			<br />
			<br />
			<p>Standard Table</p>
			<TableContainer component={Paper} style={{ width: "700px" }}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<p>Stripped Table</p>
			<TableContainer component={Paper} style={{ width: "700px" }}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Dessert (100g serving)</StyledTableCell>
							<StyledTableCell align="right">Calories</StyledTableCell>
							<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
							<StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
							<StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.calories}</StyledTableCell>
								<StyledTableCell align="right">{row.fat}</StyledTableCell>
								<StyledTableCell align="right">{row.carbs}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{/**********************BreadCrumbs*************************/}
			<Typography variant="h3" mb={2} mt={3}>
				Breadcrumbs
			</Typography>
			<Typography variant="bodyMedium">
				The Tables can be customizable based on
				<br />
				<ul>
					<li>icons</li>
					<li>separators(-,>,/)</li>
				</ul>
				using style overrides(MuiBreadcrumbs and MuiLink) for the custom variants.
			</Typography>
			<br />
			<br />
			<Breadcrumbs aria-label="breadcrumb" variant="h6">
				<Link underline="none" color="inherit" href="/">
					MUI
				</Link>
				<Link
					underline="none"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Core
				</Link>
				<Link
					underline="none"
					color="text.primary"
					href="/material-ui/react-breadcrumbs/"
					aria-current="page"
				>
					Breadcrumbs
				</Link>
			</Breadcrumbs>
			</div>
		</div>
	);
}

export default Overview;
