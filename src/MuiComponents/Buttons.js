import React from "react";
import { Typography, Button } from "@mui/material";
import buttonImg from "../images/button.png";
function Buttons() {
	return (
		<div>
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
		</div>
	);
}

export default Buttons;
