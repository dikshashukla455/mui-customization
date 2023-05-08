import React from "react";
import { Box } from "@mui/system";

const RenderComponents = (props) => {
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				p: 3,
				width: { sm: `calc(100% - 240px)` },
			}}
		>
			<div style={{ margin: "4rem 0 0 3rem" }}>{props.component}</div>
		</Box>
	);
};

export default RenderComponents;
