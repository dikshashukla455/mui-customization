import logo from "./logo.svg";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { CustomTheme } from "./Theme";
import Navbar from "./components/Navbar";

function App() {
	return (
		// <div className="App">
		// 	<ThemeProvider theme={CustomTheme}>
		// 		<Typography
		// 			fontWeight="fontWeightBold"
		// 			fontSize="displayJumbo.fontSize"
		// 			mb={3}
		// 			ml={3}
		// 			color="info"
		// 		>
		// 			Hi! This is Jumbo
		// 		</Typography>
		// 		<Typography variant="h1" fontWeight="fontWeightBold" color="interfaceThree.main" mb={3} ml={3}>
		// 			Hello! This is h1{" "}
		// 		</Typography>
		// 		<Typography variant="h2" fontWeight="fontWeightBold" color="interfaceFour.main" mb={3} ml={3}>
		// 			Hello! This is h2{" "}
		// 		</Typography>
		// 		<Typography variant="h3" fontWeight="fontWeightBold" color="interfaceTwo.main" mb={3} ml={3}>
		// 			Hello! This is h3{" "}
		// 		</Typography>
		// 		<Typography variant="h4" fontWeight="fontWeightBold" color="red" mb={3} ml={3}>
		// 			Hello! This is h4{" "}
		// 		</Typography>
		// 		<Typography variant="h5" fontWeight="fontWeightBold" mb={3} ml={3}>
		// 			Hello! This is h5{" "}
		// 		</Typography>
		// 		<Typography variant="h6" fontWeight="fontWeightBold" mb={3} ml={3}>
		// 			Hello! This is h6{" "}
		// 		</Typography>
		// 		<Typography
		// 			color="secondary"
		// 			sx={{ m: 2, p: 2 }}
		// 			fontSize="displayMedium.fontSize"
		// 			variant="body1"
		// 		>
		// 			This is a body.
		// 		</Typography>
		// 		<Button variant="contained" color="primary" sx={{ m: 4, p: 2 }}>
		// 			contained-primary
		// 		</Button>
		// 		<Button variant="contained" color="secondary" sx={{ m: 4, p: 2 }}>
		// 			contained-secondary
		// 		</Button>
		// 		<Button variant="contained" color="warning" sx={{ m: 4, p: 2 }}>
		// 			contained-warning
		// 		</Button>
		// 		<Button variant="outlined" color="error" sx={{ m: 4, p: 2 }}>
		// 			outlined-error
		// 		</Button>
		// 		<Button variant="outlined" color="info" sx={{ m: 4, p: 2 }}>
		// 			outlined-info
		// 		</Button>
		// 	</ThemeProvider>
		// </div>
		<>
			<Navbar />
		</>
	);
}

export default App;
