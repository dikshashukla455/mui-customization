import React from "react";
import {
	Typography,
	TextField,
	Button,
	Modal,
	fontWeight,
	Box,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import googleImg from "../images/google.svg";
import appleImg from "../images/apple.svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseImg from "../images/cross.svg";
import LogoImg from "../images/Logo.jpg";
import Checkbox from "@mui/material/Checkbox";
import { Route, Routes, Link } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

function SignUpForm() {
	// adding the functionality of open and close popup modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					height: "90vh",
					width: "60%",
					marginTop: "50px",
					marginX: "auto",
				}}
			>
				<Typography variant="h3" fontWeight="fontWeightBold">
					Create your ZoSale ID
				</Typography>
				<br />
				<Box display={"flex"} flexDirection={"row"}>
					{/* First name field */}
					<Input
						placeholder="First name"
						inputProps={ariaLabel}
						disableUnderline={true}
						sx={{ marginTop: "10px" }}
						autocomplete="transaction-currency"
					/>
					&nbsp;&nbsp;&nbsp;
					{/* last name field */}
					<Input
						placeholder="Last name"
						inputProps={ariaLabel}
						disableUnderline={true}
						sx={{ marginTop: "10px" }}
					/>
				</Box>
				{/* Email field */}
				<Input
					placeholder="Email"
					inputProps={ariaLabel}
					disableUnderline={true}
					sx={{ marginTop: "24px" }}
				/>
				{/* password field */}
				<Input
					placeholder="Password"
					inputProps={ariaLabel}
					disableUnderline={true}
					type="password"
					sx={{ marginTop: "24px" }}
				/>
				{/* adding checkbox  for  checking the conditions */}
				<Box
					className=""
					sx={{
						display: "flex",
						alignItems: "center",
						width: "100%",
						margin: "10px 0 20px 0",
					}}
				>
					<FormControl>
						<FormControlLabel
							value="end"
							control={<Checkbox />}
							label="By proceeding, you agree to the"
						/>
					</FormControl>
					<Typography
						color="primary"
						variant="bodyMedium"
						fontWeight="fontWeightLight"
					>
						Terms and Conditions
					</Typography>
				</Box>
				{/* Sign up button */}
				<Button
					color="primary"
					fontWeight="fontWeightBold"
					variant="contained"
					onClick={handleOpen}
					sx={{ width: "100%", padding: "14px 0" }}
				>
					Sign up with email
				</Button>
				{/* ================VERIFICATION MODAL=============== */}
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					variant="dialogBox"
				>
					<div className="" style={{ width: "520px" }}>
						{/* adding the cross image for closing the popup */}
						<div className="close-img" onClick={handleClose}>
							<img src={CloseImg} alt="" width="12px" />
						</div>
						<img src={LogoImg} width="130px" alt="" class="logo" />
						{/* verification form */}
						<DialogTitle id="alert-dialog-title">
							<Typography variant="h5" fontWeight="fontWeightBold">
								Enter verification code
							</Typography>
						</DialogTitle>

						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<Typography color="interfaceTwo.main" variant="bodyMedium">
									We have just sent a verification code to tynisha*****@mail.com
								</Typography>
							</DialogContentText>
							{/* verification code input fields */}
							<Input
								placeholder=""
								inputProps={ariaLabel}
								disableUnderline={true}
								variant="popInput"
							/>

							<Input
								placeholder=""
								inputProps={ariaLabel}
								disableUnderline={true}
								variant="popInput"
							/>

							<Input
								placeholder=""
								inputProps={ariaLabel}
								disableUnderline={true}
								variant="popInput"
							/>

							<Input
								placeholder=""
								inputProps={ariaLabel}
								disableUnderline={true}
								variant="popInput"
							/>

							<Input
								placeholder=""
								inputProps={ariaLabel}
								disableUnderline={true}
								variant="popInput"
							/>

							<Typography
								variant="body1"
								color="primary.main"
								fontWeight="fontWeightBold"
								style={{
									display: "block",
									marginTop: "32px",
									marginBottom: "10px",
								}}
							>
								{" "}
								Send the code again
							</Typography>
							<br />
							{/* verify button */}
							<Button
								color="primary"
								fontWeight="fontWeightBold"
								variant="contained"
								fontSize="bodyMedium.fontSize"
								onClick={handleClose}
								sx={{ width: "100%", padding: "14px 0", marginBottom: "12px" }}
							>
								Verify
							</Button>
						</DialogContent>
					</div>
				</Dialog>
				{/* other sign up options */}
				<div
					className=""
					style={{
						margin: "30px 0 20px 0",
						display: "flex",
						alignItems: "center",
					}}
				>
				{/* adding borders on left and right hand side */}
					<div
						className=""
						style={{ borderBottom: "1px solid #EEEFF2", width: "155px" }}
					></div>
					&nbsp;&nbsp;
					<Typography
						color="interfaceFour.main"
						variant="bodyMedium"
						fontWeight="fontWeightRegular"
					>
						Or Sign up with
					</Typography>
					&nbsp;&nbsp;
					<div
						className=""
						style={{ borderBottom: "1px solid #EEEFF2", width: "155px" }}
					></div>
				</div>
				{/* other social platform button for signing up */}
				<Box display={"flex"}>
					<Button variant="outlined" sx={{ padding: "14px 64px" }}>
						<img src={googleImg} alt="" color="info" />
						&nbsp;&nbsp; Google
					</Button>
					&nbsp;&nbsp; &nbsp;
					<Button variant="outlined" sx={{ padding: "14px 64px" }}>
						<img src={appleImg} alt="" color="info" />
						&nbsp;&nbsp; Apple
					</Button>
				</Box>
				{/* this is a link which redirects to login page by clicking on it */}
				<Box display={"flex"} marginTop={"24px"}>
					<Typography variant="bodyMedium" color="interfaceFour.main">
						Already have an account?
					</Typography>
					&nbsp;
					<Link to="/login" style={{ textDecoration: "none" }}>
						<Typography
							variant="bodyMedium"
							color="primary.main"
							fontWeight="fontWeightBold"
						>
							{" "}
							Sign In
						</Typography>
					</Link>
				</Box>
			</Box>
		</div>
	);
}

export default SignUpForm;
