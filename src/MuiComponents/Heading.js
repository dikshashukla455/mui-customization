import React from "react";
import typoImg from "../images/typo.png";
import { Typography } from "@mui/material";
function Heading() {
	return (
		<div>
			<Typography variant="h3" mb={2}>
				Typography
			</Typography>
			<Typography variant="bodyMedium">
				the typography(size and font weight of the font) and heading can be
				customizable based on the variant prop having their names <br />
				<br />
				headings -
				<ul>
					<li>h1</li>
					<li>h2</li>
					<li>h3</li>
					<li>h4</li>
					<li>h5</li>
					<li>h6</li>
				</ul>
				size of text -
				<ul>
					<li>bodyLarge</li>
					<li>bodyMedium</li>
					<li>body1</li>
				</ul>
				font weight of text -
				<ul>
					<li>fontWeightLight</li>
					<li>fontWeightRegular</li>
					<li>fontWeightMedium</li>
					<li>fontWeightBold</li>
				</ul>
			</Typography>
			<br /> <br />
			<img src={typoImg} width="600px" alt="" />
			<br /> <br />
			<Typography variant="h1" mb={2}>
				This is an h1 heading.
			</Typography>
			<Typography variant="h2" mb={2}>
				This is an h2 heading.
			</Typography>
			<Typography variant="h3" mb={2}>
				This is an h3 heading.
			</Typography>
			<Typography variant="h4" mb={2}>
				This is an h4 heading.
			</Typography>
			<Typography variant="h5" mb={2}>
				This is an h5 heading.
			</Typography>
			<Typography variant="h6" mb={2}>
				This is an h6 heading.
			</Typography>
			<Typography variant="bodyLarge" fontWeight="fontWeightLight">
				This is an large font and light font weight of the text.
			</Typography>
			<br />
			<br />
			<Typography variant="bodyMedium" fontWeight="fontWeightMedium">
				This is an medium font and medium font weight of the text.
			</Typography>
			<br />
			<br />
			<Typography variant="bodySmall" fontWeight="fontWeightBold">
				This is an small font and large font weight of the text.
			</Typography>
		</div>
	);
}

export default Heading;
