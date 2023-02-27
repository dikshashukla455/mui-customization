import React from "react";
import { ThemeProvider } from "@mui/material";
import { Typography, Button, Box } from "@mui/material";
import { CustomTheme } from "./Theme";
import { Route, Routes, Link } from "react-router-dom";

function RouterLink() {
	return (
		<div>
			{" "}
			<Typography variant="h2" align="center" mt={2}>
				Material-UI customization
			</Typography>
			<Box display={"flex"} justifyContent={"center"} marginTop={"30px"}>
				<Link to="/overview" style={{ textDecoration: "none" }}>
					<Button color="secondary" variant="contained">
						Overview
					</Button>
				</Link>{" "}
				&nbsp; &nbsp;&nbsp; &nbsp;
				<Link to="/login" style={{ textDecoration: "none" }}>
					<Button color="primary" variant="contained">
						Login
					</Button>
				</Link>
				&nbsp; &nbsp;&nbsp; &nbsp;
				<Link to="/register" style={{ textDecoration: "none" }}>
					<Button color="success" variant="contained">
						Sign Up
					</Button>
				</Link>
			</Box>
		</div>
	);
}

export default RouterLink;
