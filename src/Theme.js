import { createTheme } from "@mui/material";
import { pink, purple, red, yellow } from "@mui/material/colors";

const jadeite = "#34CAA5";
const orange = "#FDCF24";
const cacophony = "#B8E716";

export const CustomTheme = createTheme({
	spacing: 5,
	palette: {
		// testing
		primary: {
			main: "#f44336",
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
			main: "#F5F5F5",
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
        redGradient:{
            background: "linear-gradient(95.49deg, #FCAD02 -36.87%, #FF0041 98.63%)",
        }
	},
	typography: {
		fontFamily: "Poppins",
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
                    borderRadius:"8px",
					fontWeight: 400,
					fontSize: "14px",
					boxShadow: "none",
                    textTransform:"capitalize",
					"&.MuiButton-containedPrimary": {
						backgroundColor: "#673ab7",
						"&:hover": {
							backgroundColor:"#311b92",
						},
					},
					"&.MuiButton-outlinedPrimary": {
						backgroundColor: orange,
						borderColor: red,
						"&:hover": {
							color: yellow,
							backgroundColor: "#f57f17",
						},
					},
					"&.MuiButton-containedInfo": {
						backgroundColor: "#F3F3F1",
						borderColor: "#F3F3F1",
						color: "#636078",
						"&:hover": {
							color: "#00022D",
							backgroundColor: "#F3F3F1",
						},
					},
					"&.MuiButton-outlinedInfo": {
						backgroundColor: "transparent",
                        borderWidth:"2px",
						borderColor: "#009688",
						color: "#009688",
						"&:hover": {
							color: "#ffffff",
							backgroundColor: "#009688",
                            borderColor:"transparent",
						},
					},
					"&.MuiButton-containedSecondary": {
						backgroundColor: "#d81b60",
						"&:hover": {
							backgroundColor: "#880e4f",
						},
					},
                    "&.MuiButton-containedSuccess": {
						backgroundColor: "#009688",
						"&:hover": {
							backgroundColor: "#004d40",
						},
					},
                    "&.MuiButton-containedWarning": {
						backgroundColor: "#ffb300",
                        color:"#000000",
						"&:hover": {
							backgroundColor: "#ff6f00",
                            color:"#ffffff",
						},
					},
                    "&.MuiButton-outlinedError": {
						backgroundColor: "transparent",
                        borderWidth:"2px",
						borderColor: "#f4511e",
						color: "#f4511e",
						"&:hover": {
							color: "#ffffff",
							backgroundColor: "#bf360c",
                            borderColor:"transparent",
						},
					},

				}),
			},
		},
	},
});
