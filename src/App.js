import logo from "./logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { CustomTheme } from "./Theme";
import Navbar from "./components/Navbar";
import Login from "./Login";
import Banner from "./components/Banner";
import SignUp from "./SignUp";
import Overview from "./Overview";
import RouterLink from "./RouterLink";

function App() {
	return (
		<>
			<ThemeProvider theme={CustomTheme}>
			
				<Routes>
				<Route path="/" element={<RouterLink />} />
					{/********* OVERVIEW COMPONENTS *****************/}
					<Route path="/overview" element={<Overview />} />
					{/********* LOGIN PAGE*****************/}
					<Route path="/login" element={<Login />} />
					{/************SIGNUP PAGE**********/}
					<Route path="/register" element={<SignUp />} />
				</Routes>
				
			</ThemeProvider>
		</>
	);
}

export default App;
