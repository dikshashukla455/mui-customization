import React from "react";
import dropdownImg from "../images/dropdown.png";
import { Typography, FormControl, Select, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Dropdown() {
    const [language, setLanguage] = React.useState("");
    const DrophandleChange = (event) => {
		setLanguage(event.target.value);
	};
	return (
		<div>
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
		</div>
	);
}

export default Dropdown;
