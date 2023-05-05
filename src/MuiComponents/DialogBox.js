import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Button, Input} from "@mui/material";
import LogoImg from "../images/Logo.jpg";
import dialogImg from "../images/dialog.png";
import CloseImg from "../images/cross.svg";
function DialogBox() {
    // adding the functionality of open and close popup modal
    const ariaLabel = { "aria-label": "description" };
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div>
			<Typography variant="h3" mt={3} mb={2}>
				Dialog box
			</Typography>
			<Typography variant="bodyMedium">
				The Tabs can be customizable based on <br />
				using custom variants or using style overrides (MuiModal).
			</Typography>
			<br /> <br />
			<img src={dialogImg} width="600px" alt="" />
			<br /> <br />
			<Button
				color="secondary"
				fontWeight="fontWeightBold"
				variant="contained"
				onClick={handleOpen}
				sx={{ width: "30%", padding: "10px 0" }}
			>
				Click to see dialog box
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
		</div>
	);
}

export default DialogBox;
