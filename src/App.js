import logo from "./logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
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
import RenderComponents from "./components/RenderComponents";
import MuiSideBar from "./components/MuiSideBar";
import { itemsList } from "./utils/componentsList";
function App() {
	return (
		<>
			<ThemeProvider theme={CustomTheme}>
				<Box sx={{ display: "flex" }}>
					<MuiSideBar />
					<Routes>
						{itemsList.map((item) => (
							<Route
								path={item.to}
								element={<RenderComponents component={item.component} />}
							/>
						))}
						<Route path="/" element={<RouterLink />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<SignUp />} />
					</Routes>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;
