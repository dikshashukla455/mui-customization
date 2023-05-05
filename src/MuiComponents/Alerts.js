import React from "react";
import { Typography, Alert, Box, AlertTitle } from "@mui/material";
function Alerts() {
	return (
		<div>
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
		</div>
	);
}

export default Alerts;
