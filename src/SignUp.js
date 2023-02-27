import logo from "./logo.svg";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { CustomTheme } from "./Theme";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Banner from "./components/Banner";
import SignUpForm from "./Pages/SignUpForm";

function SignUp() {
	return (
		
		<>
			<ThemeProvider theme={CustomTheme}>
			<Navbar />
				<div className="homepage">
					<div className="login">
					
					<SignUpForm />
					</div>
					<div className="banner">
					<Banner />
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default SignUp;