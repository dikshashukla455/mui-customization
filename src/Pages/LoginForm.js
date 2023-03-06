import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import googleImg from "../images/google.svg";
import { Route, Routes, Link } from "react-router-dom";
import appleImg from "../images/apple.svg";

const ariaLabel = { "aria-label": "description" };
function Login() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					height: "90vh",
					width: "60%",
					marginTop: "40px",
					marginX: "auto",
				}}
			>
				<Typography variant="h3" fontWeight="fontWeightBold">
					Login to your account
				</Typography>
				<br />
				{/* Email field */}
				<Input
					placeholder="Email"
					inputProps={ariaLabel}
					disableUnderline={true}
					sx={{ marginTop: "10px" }}
				/>
				{/* password field */}
				<Input
					placeholder="Password"
					inputProps={ariaLabel}
					disableUnderline={true}
					type="password"
					sx={{ marginTop: "24px" }}
				/>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					margin={"10px 0 20px 0"}
					width={"100%"}
				>
					{/* adding radio button for  checking the conditions */}
					<FormControl>
						<FormControlLabel
							value="end"
							control={<Radio />}
							label="Remember Me"
						/>
					</FormControl>
					<Typography
						color="primary"
						variant="bodyMedium"
						fontWeight="fontWeightLight"
					>
						Forgot Password?
					</Typography>
				</Box>
				{/* Sign in button */}
				<Button
					color="primary"
					variant="contained"
					sx={{ padding: "14px 0", width: "100%" }}
				>
					Sign in with email
				</Button>
				{/* other sign in options */}
				<div
					className=""
					style={{
						margin: "30px 0 20px 0",
						display: "flex",
						alignItems: "center",
					}}
				>
					{" "}
					{/* adding borders on left and right hand side */}
					<div
						className=""
						style={{ borderBottom: "1px solid #EEEFF2", width: "155px" }}
					></div>
					&nbsp;&nbsp;
					<Typography
						color="interfaceFour.main"
						variant="bodyMedium"
						fontWeight="fontWeightLight"
					>
						Or Login with
					</Typography>
					&nbsp;&nbsp;
					<Box
						className=""
						style={{ borderBottom: "1px solid #EEEFF2", width: "155px" }}
					></Box>
				</div>
				<Box display={"flex"}>
					{/* other social platform button for signing in */}
					<Button variant="outlined" sx={{ padding: "14px 64px" }} color="inherit">
						<img src={googleImg} alt=""  />
						&nbsp;&nbsp; Google
					</Button>
					&nbsp;&nbsp; &nbsp;
					<Button variant="outlined" sx={{ padding: "14px 64px" }} color="inherit">
						<img src={appleImg} alt=""  />
						&nbsp;&nbsp; Apple
					</Button>
				</Box>
				{/* this is a link which redirects to sign up page by clicking on it */}
				<Box display={"flex"} marginTop={"24px"}>
					<Typography variant="bodyMedium" color="interfaceFour.main">
						Don't have an account?
					</Typography>
					&nbsp;
					<Link to="/register" style={{ textDecoration: "none" }}>
						<Typography variant="bodyMedium" color="primary.main">
							Get started
						</Typography>
					</Link>
				</Box>
			</Box>
		</>
	);
}

export default Login;
