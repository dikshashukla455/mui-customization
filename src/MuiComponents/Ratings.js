import React from "react";
import { Typography, Rating } from "@mui/material";
import { StyledRating, StyledIconRating } from "../Theme";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PropTypes from "prop-types";
import RatingImg from "../images/rating.png"
function Ratings() {
	const [rating, setRating] = React.useState(3);
	// different icons in rating section
	const customIcons = {
		1: {
			icon: <SentimentVeryDissatisfiedIcon color="error" />,
			label: "Very Dissatisfied",
		},
		2: {
			icon: <SentimentDissatisfiedIcon color="error" />,
			label: "Dissatisfied",
		},
		3: {
			icon: <SentimentSatisfiedIcon color="warning" />,
			label: "Neutral",
		},
		4: {
			icon: <SentimentSatisfiedAltIcon color="success" />,
			label: "Satisfied",
		},
		5: {
			icon: <SentimentVerySatisfiedIcon color="success" />,
			label: "Very Satisfied",
		},
	};

	function IconContainer(props) {
		const { value, ...other } = props;
		return <span {...other}>{customIcons[value].icon}</span>;
	}

	IconContainer.propTypes = {
		value: PropTypes.number.isRequired,
	};
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Ratings
			</Typography>
			<Typography variant="bodyMedium">
				The ratings can be customizable based on
				<br />
				<br />
				using variants -
				<ul>
					<li>Controlled rating</li>
					<li>no rating</li>
					<li>Disable</li>
					<li>Custom ratings</li>
				</ul>
				using size props -
				<ul>
					<li>Small</li>
					<li>Medium(default)</li>
					<li>Large</li>
				</ul>
				using style overrides(MuiRating) for the custom variants.
			</Typography>
			<br /> <br />
			<img src={RatingImg} width="600px" alt="" />
			<br />
			<br />
			
			<Typography component="legend">Normal Rating with small size</Typography>
			<Rating
				name="simple-controlled"
				value={rating}
				onChange={(event, newValue) => {
					setRating(newValue);
				}}
				max={6}
				precision={0.5}
				size="small"
			/>
			<Typography component="legend">Disable rating</Typography>
			<Rating name="disabled" value={rating} disabled />
			<Typography component="legend">
				No rating given with large size
			</Typography>
			<Rating name="no-value" value={null} precision={0.5} size="large" />
			<Typography component="legend">Customizing icon and color</Typography>
			<StyledRating
				name="customized-color"
				defaultValue={2}
				precision={0.5}
				icon={<FavoriteIcon fontSize="inherit" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			/>
			<Typography component="legend">Different icons and colors</Typography>
			<StyledIconRating
				name="highlight-selected-only"
				defaultValue={2}
				IconContainerComponent={IconContainer}
				getLabelText={(value) => customIcons[value].label}
				highlightSelectedOnly
			/>
		</div>
	);
}

export default Ratings;
