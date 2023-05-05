import React from "react";
import { Typography, Link, Breadcrumbs } from "@mui/material";
function MuiBreadcrumb() {
	return (
		<div>
			{" "}
			<Typography variant="h3" mb={2} mt={3}>
				Breadcrumbs
			</Typography>
			<Typography variant="bodyMedium">
				The Tables can be customizable based on
				<br />
				<ul>
					<li>icons</li>
					<li>separators(-,/)</li>
				</ul>
				using style overrides(MuiBreadcrumbs and MuiLink) for the custom
				variants.
			</Typography>
			<br />
			<br />
			<Breadcrumbs aria-label="breadcrumb" variant="h6">
				<Link underline="none" color="inherit" href="/">
					MUI
				</Link>
				<Link
					underline="none"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Core
				</Link>
				<Link
					underline="none"
					color="text.primary"
					href="/material-ui/react-breadcrumbs/"
					aria-current="page"
				>
					Breadcrumbs
				</Link>
			</Breadcrumbs>
		</div>
	);
}

export default MuiBreadcrumb;
