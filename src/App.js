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
import Colors from "./MuiComponents/Colors";
import Heading from "./MuiComponents/Heading";
import Buttons from "./MuiComponents/Buttons";
import InputButton from "./MuiComponents/InputButton";
import InputField from "./MuiComponents/InputField";
import Dropdown from "./MuiComponents/Dropdown";
import DialogBox from "./MuiComponents/DialogBox";
import Tooltips from "./MuiComponents/Tooltips";
import Accordions from "./MuiComponents/Accordions";
import MuiTabs from "./MuiComponents/MuiTabs";
import Switchs from "./MuiComponents/Switchs";
import {
	CustomizedSteppers,
	StandardStepper,
} from "./MuiComponents/CustomStepper";
import Spinner from "./MuiComponents/Spinner";
import MultiSelectDrop from "./MuiComponents/MultiSelectDrop";
import Ratings from "./MuiComponents/Ratings";
import Alerts from "./MuiComponents/Alerts";
import Paginations from "./MuiComponents/Paginations";
import MenuLists from "./MuiComponents/MenuLists";
import Tables from "./MuiComponents/Tables";
import MuiBreadcrumb from "./MuiComponents/MuiBreadcrumb";
import MuiCarousel from "./MuiComponents/MuiCarousel";
import Testimonials from "./MuiComponents/Testimonials";
import Snackbars from "./MuiComponents/Snackbars";
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
					<Route path="/color" element={<Colors />} />
					{/* ===========================TYPOGRAPHY============================= */}
					<Route path="/heading" element={<Heading />} />
					{/* ===========================BUTTONS============================= */}
					<Route path="/textfield" element={<InputField />} />
					<Route path="/inputbutton" element={<InputButton />} />
					<Route path="/dropdown" element={<Dropdown />} />
					<Route path="/dialog" element={<DialogBox />} />
					<Route path="/tab" element={<MuiTabs />} />
					<Route path="/tooltip" element={<Tooltips />} />
					<Route path="/accordion" element={<Accordions />} />
					<Route path="/switch" element={<StandardStepper />} />
				</Routes>
				
			</ThemeProvider>
		</>
	);
}

export default App;
