import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import accordionImg from "../images/carbon (2).png";
import { Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Accordions() {
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Accordion
			</Typography>
			<Typography variant="bodyMedium">
				The accordion can be customizable based on
				<br /> using style overrides(MuiAccordion) for the custom variants.
				<br /> There is a disabled attribute to disable the part of the
				accordion.
			</Typography>
			<br /> <br />
			<img src={accordionImg} width="600px" alt="" />
			<br /> <br />
			<Accordion sx={{ "& .MuiSvgIcon-root": { color: "black" } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ "& .MuiSvgIcon-root": { color: "black" } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ "& .MuiSvgIcon-root": { color: "black" } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default Accordions;
