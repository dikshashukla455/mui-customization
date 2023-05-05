import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {
	Typography,
	CardActions,
	CardContent,
	Card,
	Button,
	Box,
} from "@mui/material";
function MuiCarousel() {
	const theme = useTheme();
	const images = [
		{
			label: "First Card",
			title: "First card title",
			content: "This is the content of the first card",
		},
		{
			label: "Second Card",
			title: "Second card title",
			content: "This is the content of the second card",
		},
		{
			label: "Third Card",
			title: "Third card title",
			content: "This is the content of the third card",
		},
		{
			label: "fourth Card",
			title: "fourth card title",
			content: "This is the content of the fourth card",
		},
	];
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	// carousel
	const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Carousel
			</Typography>
			<Typography variant="bodyMedium">
				The Carousel can be customizable based on using style overrides
				<br />
				(MuiMobileStepper) for the custom variants.
			</Typography>
			<br />
			<br />
			<Box sx={{ maxWidth: 330, flexGrow: 1 }}>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{images.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Card sx={{ minWidth: 275 }} variant="outlined">
									<CardContent>
										<Typography
											sx={{ fontSize: 14 }}
											color="text.secondary"
											gutterBottom
										>
											{step.label}
										</Typography>
										<Typography variant="h5" component="div">
											{step.title}
										</Typography>
										<br />
										<Typography variant="body2">{step.content}</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" variant="contained">
											Learn More
										</Button>
									</CardActions>
								</Card>
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
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

export default MuiCarousel;
