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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Overview() {
	const [language, setLanguage] = React.useState("");
	const handleChange = (event) => {
		setLanguage(event.target.value);
	};
	return (
		<div style={{ margin: "2rem 0 0 3rem" }}>
        <Typography variant="h1">Overview</Typography>
        <br />
        <br />
			<Typography variant="h3">Colors</Typography>
			<Typography variant="bodyMedium">
				The color(text color and background color) can be customizable based on
				color palette <br /> primary, secondary, info, error, success or using
				custom variant props.{" "}
			</Typography>
			<br />

			<Typography variant="h5" color="primary">
				This is primary color
			</Typography>
			<Typography variant="h5" color="interfaceThree.main">
				This is a custom color
			</Typography>
			<Typography variant="h5" color="secondary">
				This is secondary color
			</Typography>
			<Typography variant="h5" color="info">
				This is info color
			</Typography>
			<Typography variant="h5" color="error">
				This is error color
			</Typography>
			<br />
			<Typography variant="h3">Typography</Typography>
			<Typography variant="bodyMedium">
				the typography(size and font weight of the font) and heading can be
				customizable based on the variant prop having their names <br />
				headings - h1, h2, h3, h4, h5 ,h6 <br />
				size of text - bodyLarge, bodyMedium and bodySmall
				<br />
				font weight of text - fontWeightRegular, fontWeigthLight,
				fontWeightBold, fontWeightMedium
			</Typography>
			<br />
            <br />
			<Typography variant="h1">This is an h1 heading</Typography>
			<Typography variant="h2">This is an h2 heading</Typography>
			<Typography variant="h3">This is an h3 heading</Typography>
			<Typography variant="h4">This is an h4 heading</Typography>
			<Typography variant="h5">This is an h5 heading</Typography>
			<Typography variant="h6">This is an h6 heading</Typography>
			<Typography variant="bodyLarge" fontWeight="fontWeightLight">
				This is an large font and light font weight of the text
			</Typography>
			<br />
			<Typography variant="bodyMedium" fontWeight="fontWeightMedium">
				This is an medium font and medium font weight of the text
			</Typography>
			<br />
			<Typography variant="bodySmall" fontWeight="fontWeightBold">
				This is an small font and large font weight of the text
			</Typography>
			<br />
			<br />
			<Typography variant="h3">Buttons</Typography>
			<Typography variant="bodyMedium">
				The buttons can be customizable based on <br />
				color palette - primary, secondary, info, error, success <br />
				using variants - contained and outlined. or using style overrides
				(MuiButton)
				<br />
				<br />
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
			<Typography variant="h3">Text Fields</Typography>
			<Typography variant="bodyMedium">
				The input fields can be customizable based on
				<br /> variants - filled, outlined and standard and using style
				overrides(MuiInput) for the custom variants .
			</Typography>
			<br />
			<br />
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
			<Typography variant="h3">Checkbox and Radio buttons</Typography>
			<Typography variant="bodyMedium">
				The checkbox and radio buttons can be customizable(height, width, and
				color) based on
				<br /> label prop, value(position) prop and other default props or using
				style overrides.(MuiRadio and MuiCheckbox)
			</Typography>
			<br />
			<FormControl>
				<FormControlLabel value="end" control={<Checkbox />} label="Checkbox" />
			</FormControl>
			<FormControl>
				<FormControlLabel value="end" control={<Radio />} label="Radio" />
			</FormControl>
            <br />
            <br />
			<Typography variant="h3">Dropdown down</Typography>
			<Typography variant="bodyMedium">
				The dropdown menu can be customizable based on the changes in menu
				component and <br /> other default props or using style
				overrides.(MuiSelect)
			</Typography>
			<br />
			<br />
			<FormControl>
				<Select
					sx={{ "& .MuiSvgIcon-root": { color: "white" }, width:"130px" }}
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
		</div>
	);
}

export default Overview;
