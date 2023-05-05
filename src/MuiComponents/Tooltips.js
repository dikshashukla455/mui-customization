import React from "react";
import tooltipImg from "../images/tooltip.png";
import { Typography, Button, Tooltip } from "@mui/material";
function Tooltips() {
	return (
		<div>
			<Typography variant="h3" my={2}>
				Tooltips
			</Typography>
			<Typography variant="bodyMedium">
				The Tooltips can be customizable based on <br />
				<br />
				position of tooltips -
				<ul>
					<li>top-start</li>
					<li>top(center)</li>
					<li>top-end</li>
					<li>left-start</li>
					<li>left(center)</li>
					<li>left-end</li>
					<li>right-start</li>
					<li>right(center)</li>
					<li>right-end</li>
					<li>bottom-start</li>
					<li>bottom(center)</li>
					<li>bottom-end</li>
				</ul>
				and using custom variant props through style overrides (MuiTooltip)
				<br /> <br />
				<img src={tooltipImg} width="600px" alt="" />
				<br /> <br />
			</Typography>
			<Tooltip
				title="This is a tooltip"
				placement="top"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					top tooltip
				</Button>
			</Tooltip>
			<Tooltip
				title="This is a tooltip"
				placement="left"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					left tooltip
				</Button>
			</Tooltip>
			<Tooltip
				title="This is a tooltip"
				placement="bottom"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					bottom tooltip
				</Button>
			</Tooltip>
			<Tooltip
				title="This is a tooltip"
				placement="right"
				sx={{ margin: "10px" }}
			>
				<Button color="primary" variant="contained">
					right tooltip
				</Button>
			</Tooltip>
		</div>
	);
}

export default Tooltips;
