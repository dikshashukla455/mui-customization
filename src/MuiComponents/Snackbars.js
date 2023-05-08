import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Snackbar, IconButton, Button } from "@mui/material";
import SnackBarImg from "../images/snackbar.png";
function Snackbars() {
    const [barOpen, setBarOpen] = React.useState(false);

	const handleClick = () => {
		setBarOpen(true);
	};

	const handleBarClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setBarOpen(false);
	};

	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleBarClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Snackbar
			</Typography>
			<Typography variant="bodyMedium">
				The Snackbar can be customizable based on using style overrides
				<br />
				(MuiSnackbar) for the custom variants.
			</Typography>
			<br /> <br />
			<img src={SnackBarImg} width="600px" alt="" />
			<br />
			<br />
			<Button onClick={handleClick} variant="contained">
				Open a snackbar
			</Button>
			<Snackbar
				open={barOpen}
				autoHideDuration={6000}
				onClose={handleBarClose}
				message="Note archived"
				action={action}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			/>
		</div>
	);
}

export default Snackbars;
