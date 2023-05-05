import React from "react";
import { Typography, Button,Popper, Stack, Paper, ClickAwayListener,MenuList, MenuItem, Grow} from "@mui/material";
function MenuLists() {
    const [MenuOpen, setMenuOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
	const anchorRef = React.useRef(null);

    const handleToggle = () => {
		setMenuOpen((prevMenuOpen) => !prevMenuOpen);
	};

	const handleMenuClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setMenuOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setMenuOpen(false);
		} else if (event.key === "Escape") {
			setMenuOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(MenuOpen);
	React.useEffect(() => {
		if (prevOpen.current === true && MenuOpen === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = MenuOpen;
	}, [MenuOpen]);
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Menu list
			</Typography>
			<Typography variant="bodyMedium">
				The menu list can be customizable based on
				<br />
				<br />
				using transitions -
				<ul>
					<li>Clicked Transition (default)</li>
					<li>Fade Transition</li>
				</ul>
				using style overrides(MuiMenu and MuiMenuItem) for the custom variants.
			</Typography>
			<br />
			<br />
			<Stack direction="row" spacing={2}>
				<div>
					<Button
						ref={anchorRef}
						id="composition-button"
						aria-controls={MenuOpen ? "composition-menu" : undefined}
						aria-expanded={MenuOpen ? "true" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
						variant="contained"
					>
						Dashboard
					</Button>
					<Popper
						open={MenuOpen}
						anchorEl={anchorRef.current}
						role={undefined}
						placement="bottom-start"
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === "bottom-start" ? "left top" : "left bottom",
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleMenuClose}>
										<MenuList
											autoFocusItem={MenuOpen}
											id="composition-menu"
											aria-labelledby="composition-button"
											onKeyDown={handleListKeyDown}
										>
											<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
											<MenuItem onClick={handleMenuClose}>My account</MenuItem>
											<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
			</Stack>
		</div>
	);
}

export default MenuLists;
