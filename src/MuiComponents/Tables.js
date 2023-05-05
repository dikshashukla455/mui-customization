import React from "react";
import {
	Table,
	TableCell,
	TableHead,
	TableBody,
	TableContainer,
	TableRow,
	Typography,
    Paper
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../Theme";
function Tables() {
	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}
	// tables
	const rows = [
		createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
		createData("Eclair", 262, 16.0, 24, 6.0),
		createData("Cupcake", 305, 3.7, 67, 4.3),
		createData("Gingerbread", 356, 16.0, 49, 3.9),
	];
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Tables
			</Typography>
			<Typography variant="bodyMedium">
				The Tables can be customizable based on
				<br />
				<br />
				using variants -
				<ul>
					<li>Standard Table </li>
					<li>Stripped table</li>
				</ul>
				using style overrides(MuiTable) for the custom variants.
			</Typography>
			<br />
			<br />
			<p>Standard Table</p>
			<TableContainer component={Paper} style={{ width: "700px" }}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<p>Stripped Table</p>
			<TableContainer component={Paper} style={{ width: "700px" }}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Dessert (100g serving)</StyledTableCell>
							<StyledTableCell align="right">Calories</StyledTableCell>
							<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
							<StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
							<StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.calories}</StyledTableCell>
								<StyledTableCell align="right">{row.fat}</StyledTableCell>
								<StyledTableCell align="right">{row.carbs}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Tables;
