import React from "react";
import colorImg from "../images/color.png";
import {Typography} from "@mui/material";
function Colors() {
	return (
		<div>
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
		</div>
	);
}

export default Colors;
