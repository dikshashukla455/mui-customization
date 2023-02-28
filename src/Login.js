import logo from "./logo.svg";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { CustomTheme } from "./Theme";
import Navbar from "./components/Navbar";
import Login from "./Pages/LoginForm";
import Banner from "./components/Banner";
import LoginForm from "./Pages/LoginForm";

function SignUp() {
	return (
		<>
			<ThemeProvider theme={CustomTheme}>
				<Navbar />
				<div className="homepage">
				{/* Login page */}
					<div className="login">
						<LoginForm />
					</div>
					{/* Banner on right side */}
					<div className="banner">
						<Banner />
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default SignUp;