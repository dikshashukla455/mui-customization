import { createTheme } from "@mui/material";
import { pink, purple, red, yellow } from "@mui/material/colors";

const jadeite = "#34CAA5";
const orange = "#FDCF24";
const cacophony = "#B8E716";
const white ="#ffffff";
const secondary ="#9c27b0";
const info="#1de9b6";
const success ="#8bc34a";
const error ="#f44336"
const black="#111827";
const grey="#EEEFF2";
const primaryHoverColor = "#00bfa5";
const secondaryHoverColor = "#6a1b9a";
const infoHoverColor = "#00bfa5";
const successHoverColor = "#558b2f";
const errorHoverColor = "#c62828"

export const CustomTheme = createTheme({
	spacing: 10,
	palette: {
		// testing
		primary: {
			main: "#34CAA5",
		},
		secondary: purple,

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
			main: "#FFFFFF",
		},
		info: {
			main: jadeite,
		},
		warning: {
			main: orange,
		},
		success: {
			main: cacophony,
		},
		redGradient: {
			background: "linear-gradient(95.49deg, #FCAD02 -36.87%, #FF0041 98.63%)",
		},
	},
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
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					borderRadius: "8px",
					fontWeight: 400,
					fontSize: "14px",
					boxShadow: "none",
					textTransform: "capitalize",
					"&.MuiButton-containedPrimary": {
						backgroundColor:jadeite,
						color:white,
						cursor: "pointer",
						"&:hover": {
							backgroundColor: primaryHoverColor,
							boxShadow: "none",
						},
						
					},
					"&.MuiButton-outlinedPrimary": {
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderColor: grey,
						color: black,
						"&:hover": {
							color: white,
							backgroundColor: black,
							borderColor: "transparent",
						},
					},
					"&.MuiButton-containedSecondary": {
						backgroundColor:secondary,
						color:white,
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
					"&.MuiButton-containedInfo": {
						backgroundColor:info,
						color:white,
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
					"&.MuiButton-containedSuccess": {
						backgroundColor:success,
						color:white,
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
					"&.MuiButton-containedError": {
						backgroundColor:error,
						color:white,
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
					
				}),
			},
		},
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
					"&:hover": {
						border: "none",
					},
					"&.Mui-focused": {
						borderStyle: "solid",
						borderWidth: "1px",
						borderColor: jadeite,
					},
				}),
			},
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
			],
		},
		MuiRadio: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					"&.Mui-checked": {
						// !! didn't work
					},
				}),
			},
		},
		MuiTab: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					textTransform: "Capitalize",
					fontWeight: "400",
					fontSize: "18px",
					color: "white",
				}),
			},
		},
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
	},
});
