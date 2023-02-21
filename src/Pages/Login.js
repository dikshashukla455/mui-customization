import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import googleImg from "../images/google.svg";
import appleImg from "../images/apple.svg";

const ariaLabel = { "aria-label": "description" };
function Login() {
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
					flexDirection: "column",
				}}
			>
				<Typography variant="h3" fontWeight="fontWeightBold">
					Login to your account
				</Typography>
				<br />
				<Input
					placeholder="Email"
					inputProps={ariaLabel}
					disableUnderline={true}
					sx={{ marginTop: "40px" }}
				/>

				<Input
					placeholder="Password"
					inputProps={ariaLabel}
					disableUnderline={true}
					type="password"
					sx={{ marginTop: "24px" }}
				/>
				<div
					className=""
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "29%",
						margin: "24px 0 32px 0",
					}}
				>
					<FormControl>
						<FormControlLabel
							value="end"
							control={<Radio />}
							label="Remember Me"
						/>
					</FormControl>
					<Typography
						color="primary"
						fontSize="bodyMedium.fontSize"
						fontWeight="fontWeightLight"
					>
						Forgot Password?
					</Typography>
				</div>
				<Button
					color="primary"
					variant="contained"
					sx={{ width: "449px", padding: "14px 0" }}
				>
					Sign in with email
				</Button>
				<div
					className=""
					style={{
						margin: "32px 0 24px 0",
						display: "flex",
						alignItems: "center",
					}}
				>
					<div
						className=""
						style={{ borderBottom: "1px solid #EEEFF2", width: "155px" }}
					></div>
					&nbsp;&nbsp;
					<Typography
						color="interfaceFour.main"
						fontSize="bodyMedium.fontSize"
						fontWeight="fontWeightLight"
					>
						Or Login with
					</Typography>
					&nbsp;&nbsp;
					<div
						className=""
						style={{ borderBottom: "1px solid #EEEFF2", width: "155px" }}
					></div>
				</div>
				<div className="" style={{ display: "flex" }}>
					<Button variant="outlined" sx={{ padding: "14px 64px" }}>
						<img src={googleImg} alt="" color="info" />
						&nbsp;&nbsp; Google
					</Button>
					&nbsp;&nbsp; &nbsp;
					<Button variant="outlined" sx={{ padding: "14px 64px" }}>
						<img src={appleImg} alt="" color="info" />
						&nbsp;&nbsp; Apple
					</Button>
				</div>
				<div className="" style={{ display: "flex", marginTop:"24px"}}>
					<Typography fontSize="bodyMedium.fontSize" color="interfaceFour.main">Don't have an account?</Typography>
					&nbsp;<Typography fontSize="bodyMedium.fontSize" color="primary.main">Get started</Typography>
				</div>
			</div>
		</div>
	);
}

export default Login;
