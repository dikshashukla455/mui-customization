import React from "react";
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
	navlinks: {
		marginLeft: theme.spacing(5),
		display: "flex",
	},
	logo: {
		cursor: "pointer",
	},
	link: {
		marginLeft: theme.spacing(20),
		"&:hover": {
			color: "yellow",
			borderBottom: "1px solid white",
		},
	},
}));

function MuiNavBar() {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<AppBar position="static">
			<CssBaseline />
			<Toolbar style={{display:"flex", justifyContent:"space-between"}}>
				<Typography variant="h4" className={classes.logo} style={{color:"white"}}>
					Navbar
				</Typography>
				{isMobile ? (
					<DrawerComponent />
				) : (
					<div className={classes.navlinks}>
						<Link
							to="/"
							style={{ textDecoration: "none", color: "white", fontSize: "20px", marginRight: "20px" }}
						>
							Home
						</Link>
						<Link to="/about" style={{ textDecoration: "none", color: "white", fontSize: "20px",marginRight: "20px"  }}>
							About
						</Link>
						<Link to="/contact" style={{ textDecoration: "none", color: "white", fontSize: "20px",marginRight: "20px"  }}>
							Contact
						</Link>
						<Link to="/faq" style={{ textDecoration: "none", color: "white", fontSize: "20px",marginRight: "20px"  }}>
							FAQ
						</Link>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
}
export default MuiNavBar;
