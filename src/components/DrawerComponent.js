import React, { useState } from "react";
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";


function DrawerComponent() {
	const classes = useStyles();
	const [openNavDrawer, setOpenNavDrawer] = useState(false);
	return (
		<>
			<Drawer open={openNavDrawer} onClose={() => setOpenNavDrawer(false)}>
				<List>
					<ListItem onClick={() => setOpenNavDrawer(false)}>
						<ListItemText>
							<Link to="/">Home</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenNavDrawer(false)}>
						<ListItemText>
							<Link to="/about">About</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenNavDrawer(false)}>
						<ListItemText>
							<Link to="/contact">Contact</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenNavDrawer(false)}>
						<ListItemText>
							<Link to="/about">Faq</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
}
export default DrawerComponent;
