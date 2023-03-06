import { createTheme } from "@mui/material";
import { pink, purple, red, yellow } from "@mui/material/colors";

// initializing colors to the variables

const jadeite = "#34CAA5";
const orange = "#FDCF24";
const cacophony = "#B8E716";
const white = "#ffffff";
const secondary = "#9c27b0";
const info = "#1de9b6";
const success = "#8bc34a";
const error = "#f44336";
const black = "#111827";
const grey = "#EEEFF2";
const primaryHoverColor = "#00bfa5";
const secondaryHoverColor = "#6a1b9a";
const infoHoverColor = "#00bfa5";
const successHoverColor = "#558b2f";
const errorHoverColor = "#c62828";

export const CustomTheme = createTheme({
	spacing: 10,
	// colors palette
	palette: {
		// testing
		primary: {
			main: jadeite,
		},
		info: {
			main: info,
		},
		success: {
			main: success,
		},

		interfaceOne: {
			main: "#04091E",
		},
		interfaceTwo: {
			main: "#747681",
		},
		interfaceThree: {
			main: "#3F435C",
		},
		interfaceFour: {
			main: "#718096",
		},
		White: {
			main: white,
		},

		redGradient: {
			background: "linear-gradient(95.49deg, #FCAD02 -36.87%, #FF0041 98.63%)",
		},
	},
	// typography (font size and weight) and headings
	typography: {
		fontFamily: "Urbanist",
		fontWeightLight: "400",
		fontWeightRegular: "500",
		fontWeightMedium: "600",
		fontWeightBold: "700",

		// testing

		fontVariant: {
			fontSize: "20px",
			fontWeightRegular: "400",
		},

		displayJumbo: {
			fontSize: "72px",
		},
		h1: {
			fontSize: "48px",
		},
		h2: {
			fontSize: "36px",
		},
		h3: {
			fontSize: "32px",
		},
		h4: {
			fontSize: "28px",
		},
		h5: {
			fontSize: "24px",
		},
		h6: {
			fontSize: "20px",
		},
		bodyLarge: {
			fontSize: "18px",
		},
		bodyMedium: {
			fontSize: "16px",
		},
		body1: {
			fontSize: "14px",
		},
	},
	// Styling button components
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					borderRadius: "8px",
					fontWeight: 400,
					fontSize: "14px",
					boxShadow: "none",
					textTransform: "capitalize",
					// primary color - contained and outlined
					"&.MuiButton-containedPrimary": {
						backgroundColor: jadeite,
						color: white,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: primaryHoverColor,
							boxShadow: "none",
						},
					},
					"&.MuiButton-outlinedPrimary": {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: jadeite,
						color: jadeite,
						"&:hover": {
							color: white,
							backgroundColor: jadeite,
							borderColor: "transparent",
						},
					},
					// secondary color - contained and outlined
					"&.MuiButton-containedSecondary": {
						backgroundColor: secondary,
						color: white,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: secondaryHoverColor,
							boxShadow: "none",
						},
					},
					"&.MuiButton-outlinedSecondary": {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: secondary,
						color: secondary,
						"&:hover": {
							color: white,
							backgroundColor: secondary,
							borderColor: "transparent",
						},
					},
					// info color - contained and outlined
					"&.MuiButton-containedInfo": {
						backgroundColor: info,
						color: white,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: infoHoverColor,
							boxShadow: "none",
						},
					},
					"&.MuiButton-outlinedInfo": {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: info,
						color: info,
						"&:hover": {
							color: white,
							backgroundColor: info,
							borderColor: "transparent",
						},
					},
					// success color - contained and outlined
					"&.MuiButton-containedSuccess": {
						backgroundColor: success,
						color: white,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: successHoverColor,
							boxShadow: "none",
						},
					},
					"&.MuiButton-outlinedSuccess": {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: success,
						color: success,
						"&:hover": {
							color: white,
							backgroundColor: success,
							borderColor: "transparent",
						},
					},
					// error color - contained and outlined
					"&.MuiButton-containedError": {
						backgroundColor: error,
						color: white,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: errorHoverColor,
							boxShadow: "none",
						},
					},
					"&.MuiButton-outlinedError": {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: error,
						color: error,
						"&:hover": {
							color: white,
							backgroundColor: error,
							borderColor: "transparent",
						},
					},
					"&.MuiButton-outlinedInherit" : {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: "#111827",
						color: "#111827",
						"&:hover": {
							color: white,
							backgroundColor: "#111827",
							borderColor: "transparent",
						},
					},
				}),
			},
		},
		// Styling input components
		MuiInput: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					width: "100%",
					padding: "16px",
					fontSize: "16px",
					backgroundColor: "#FAFAFA",
					color: "#111827",
					border: "1px solid transparent",
					outline: "none",
					borderRadius: "8px",
					// adding the styles on focused input
					"&.Mui-focused": {
						borderStyle: "solid",
						borderWidth: "1px",
						borderColor: jadeite,
					},
					"&:hover":{
						border:`1px solid ${jadeite}`,
					},
					"&:after":{
						borderBottom:"none",
					},
					"&:before":{
						borderBottom:"none",
					},
					
				}),
			},
			// adding the some custom input variants for the verification modal
			variants: [
				{
					props: { variant: "popInput" },
					style: {
						borderRadius: "12px",
						margin: "32px 24px 0 0",
						width: "11.5%",
						padding: "5px 20px",
						backgroundColor: "#f5f5f5",
						fontSize: "24px",
						fontWeight: "bold",
					},
				},
				{
					props: { variant: "dialogBox" },
					style: {
						borderRadius: "84px",
					},
				},
				{
					props: { variant: "filled" },
					style: {
					padding: "16px",
					fontSize: "16px",
					backgroundColor: "#FAFAFA",
					color: "#111827",
					border: "1px solid transparent",
					outline: "none",
					borderRadius: "8px",
					display:"inline-block"
					},
				},
			],
		},
		// Styling radio components
		MuiRadio: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					"&.Mui-checked": {
						// add styles here
					},
				}),
			},
		},

		// Styling Tab components
		MuiTab: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					textTransform: "Capitalize",
					fontWeight: "400",
					fontSize: "18px",
					color: "white",
				}),
			},
			variants: [
				{
					props: { variant: "overviewTab" },
					style: {
						color: "black",
						fontSize: "14px",
					},
				},
			],
		},
		// styling the modal components
		MuiModal: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					borderRadius: "12px",
					outline: "none",
					border: "none",
					fontWeight: "400",
					fontSize: "18px",
				}),
			},
		},
		// Styling the drop down menu components
		MuiSelect: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					marginTop: "5px",
					fontSize: "16px",
					width: "67px",
					height: "42px",
					backgroundColor: jadeite,
					fontWeight: "600",
					color: white,
					borderRadius: "8px",
					border: "none",
					"&:hover": {
						border: "none",
						outline: "none",
					},
					"&:focus": {
						border: "none",
						outline: "none",
					},
				}),
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					color: "black",
				}),
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					color: "black",
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					backgroundColor: "white",
					border: "none",
					textDecoration: "none",
					padding:"5px 0",
					borderRadius:"8px",
					"&:placeholder": {
						color: "#A0AEC0",
					},
					"&:hover": {
						border:`1px solid ${jadeite}`,
					}
				}),
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					backgroundColor: "#fafafa",
					borderBottom: "none",
					textDecoration: "none",
					paddingBottom: "10px",
					borderRadius: "8px",
				"&:before":{
					borderBottom:"none"

				},
				"&:focus":{
					border:`1px solid ${jadeite}`,
				},
				"&:hover":{
					border:`1px solid ${jadeite}`,
				},
				"&:after":{
					border:"none"
				}
				}),
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					width: "600px",
					backgroundColor: "white",
					color: black,
					border: "1px solid grey",
					borderbottom:"grey",
					borderRadius:"5px",
					"&.Mui-expanded": {
						border:`2px solid ${jadeite}`,
					
					},
					"&.Mui-disabled": {
						backgroundColor: grey,
					},
					
				}),
			},
		},
		MuiSwitch: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					"&.Mui-disabled": {
						backgroundColor: grey,
					},
				}),
			},
		},
	},
});
