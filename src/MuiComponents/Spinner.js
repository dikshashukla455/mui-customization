import React from "react";
import { Typography, CircularProgress } from "@mui/material";
function Spinner() {
	return (
		<div>
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
			<img src="" width="600px" alt="" />
			<br></br>
			<br />
			<CircularProgress color="primary" size="md" value={40} />
			<CircularProgress variant="solid" />
			<CircularProgress variant="soft" />
			<CircularProgress variant="outlined" />
			<CircularProgress variant="plain" />
		</div>
	);
}

export default Spinner;
