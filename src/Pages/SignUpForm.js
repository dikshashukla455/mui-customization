import React from 'react'
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

function SignUpForm() {
  return (
    <div>
        <div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
					flexDirection: "column",
					marginTop:"60px"
				}}
			>
				<Typography variant="h3" fontWeight="fontWeightBold">
                Create your ZoSale ID
				</Typography>
				<br />
                <div className="" style={{display:"flex",flexDirection:"row"}}>
                <Input
					placeholder="First name"
					inputProps={ariaLabel}
					disableUnderline={true}
					sx={{ marginTop: "10px" }}
				/>&nbsp;&nbsp;&nbsp;
                <Input
					placeholder="Last name"
					inputProps={ariaLabel}
					disableUnderline={true}
					sx={{ marginTop: "10px" }}
				/>
                </div>
				<Input
					placeholder="Email"
					inputProps={ariaLabel}
					disableUnderline={true}
					sx={{ marginTop: "24px" }}
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
						width:"60%",
						margin: "10px 0 20px 0",
					}}
				>
					<FormControl>
						<FormControlLabel
							value="end"
							control={<Radio />}
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
				</div>
				<Button
					color="primary"
                    fontWeight="fontWeightBold"
					variant="contained"
					sx={{ width: "60%", padding: "14px 0" }}
				>
					Sign up with email
				</Button>
				<div
					className=""
					style={{
						margin: "30px 0 20px 0",
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
					<Typography variant="bodyMedium" color="interfaceFour.main">Already have an account?</Typography>
					&nbsp;<Typography variant="bodyMedium" color="primary.main" fontWeight="fontWeightBold"> Sign In</Typography>
				</div>
			</div>
    </div>
  )
}

export default SignUpForm