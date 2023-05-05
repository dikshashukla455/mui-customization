import React from "react";
import Switch from "@mui/material/Switch";
import switchImg from "../images/carbon (3).png";
import { Typography, FormGroup, FormControlLabel } from "@mui/material";
function Switchs() {
	return (
		<div>
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

export default Switchs;
