import React, { useState } from "react";
import {
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About", "Contact", "FAQ"];
const DrawerComp = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<>
			{/* adding right side drawer(navbar) for small and medium devices*/}
			<Drawer
				anchor="right"
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<List sx={{ padding: "0 10px", width: "350px" }}>
					{pages.map((page, index) => (
						<ListItemButton key={index}>
							<ListItemIcon>
								<ListItemText>{page}</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton
				sx={{ color: "white", marginLeft: "auto" }}
				onClick={() => setOpenDrawer(!openDrawer)}
			>
				<MenuIcon style={{ color: "white" }} />
			</IconButton>
		</>
	);
};

export default DrawerComp;
