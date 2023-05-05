import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { Typography, CardContent, Card, Button, Box } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
function Testimonials() {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
	const testimonial = [
		{
			imgPath:
				"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			name: "First Testimonial",
			body: "This is the content of the first testimonial card",
		},
		{
			imgPath:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			name: "Second Testimonial",
			body: "This is the content of the second testimonial card",
		},
		{
			imgPath:
				"https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			name: "Third Testimonial",
			body: "This is the content of the third testimonial card",
		},
	];
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const testimonialMaxSteps = testimonial.length;
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	return (
		<div>
			{" "}
			<Typography variant="h3" mb={2} mt={3}>
				Testimonials
			</Typography>
			<Typography variant="bodyMedium">
				The Testimonials can be customizable based on using style overrides
				<br />
				(MuiStepper) for the custom variants.
			</Typography>
			<br />
			<br />
			<Box sx={{ maxWidth: 400, flexGrow: 1, boxShadow: 2 }}>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{testimonial.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Card sx={{ minWidth: 350 }}>
									<CardContent>
										<center>
											<img
												src={step.imgPath}
												alt=""
												width="100"
												height="90"
												style={{ borderRadius: "50%" }}
											/>
										</center>
										<Typography
											variant="h6"
											component="div"
											textAlign={"center"}
										>
											{step.name}
										</Typography>
										<br />
										<Typography variant="bodyMedium" textAlign={"center"}>
											{step.body}
										</Typography>
									</CardContent>
								</Card>
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={testimonialMaxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === testimonialMaxSteps - 1}
						>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Box>
		</div>
	);
}

export default Testimonials;
