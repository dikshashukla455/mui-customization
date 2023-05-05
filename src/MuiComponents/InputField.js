import React from "react";
import fieldImg from "../images/field.png";
import { Typography, TextField, Input } from "@mui/material";
function InputField() {
	return (
		<div>
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
				disableUnderline={true}
				sx={{ marginLeft: "15px", marginTop: "0px" }}
			/>
		</div>
	);
}

export default InputField;
