import React from "react";
import {
	Typography,
	Button,
	TextField,
	Checkbox,
	Radio,
	FormControl,
	FormControlLabel,
	MenuItem,
	Select,
	Tab,
	Tabs,
} from "@mui/material";
import Input from "@mui/material/Input";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseImg from "./images/cross.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoImg from "./images/Logo.jpg";
import colorImg from "./images/color.png";
import typoImg from "./images/typo.png";
import buttonImg from "./images/button.png";
import fieldImg from "./images/field.png";
import inputbtnImg from "./images/inputBtn.png";
import dropdownImg from "./images/dropdown.png";
import dialogImg from "./images/dialog.png";
import tabImg from "./images/tab.png";

const ariaLabel = { "aria-label": "description" };

function Overview() {
	const [value, setValue] = React.useState();
	const [language, setLanguage] = React.useState("");
	// adding the functionality of open and close popup modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleChange = (event) => {
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
				label="Outlined"
				variant="outlined"
				sx={{ marginRight: "15px", marginTop: "15px" }}
			/>
			<TextField
				id="filled-basic"
				label="Filled"
				variant="filled"
				sx={{ marginRight: "15px", marginTop: "15px" }}
			/>
			<TextField id="standard-basic" label="Standard" variant="standard" />
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
					onChange={handleChange}
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
			<Tabs
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
			</Tabs>
		</div>
	);
}

export default Overview;
