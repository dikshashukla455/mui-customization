import React from "react";
import inputbtnImg from "../images/inputBtn.png";
import { Typography, Checkbox, Radio, FormControl, FormControlLabel } from "@mui/material";
function InputButton() {
	return (
		<div>
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
		</div>
	);
}

export default InputButton;
