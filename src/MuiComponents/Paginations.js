import React from "react";
import { Typography, Box, Pagination, TablePagination } from "@mui/material";
import PaginationImg from "../images/pagination.png";
function Paginations() {
	const [page, setPage] = React.useState(2);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Pagination
			</Typography>
			<Typography variant="bodyMedium">
				The Pagination can be customizable based on
				<br />
				<br />
				using variants and shape -
				<ul>
					<li>Standard variant(default)</li>
					<li>Outlined variant</li>
					<li>Rounded Pagination</li>
				</ul>
				using size props -
				<ul>
					<li>Small</li>
					<li>Medium(default)</li>
					<li>Large</li>
				</ul>
				using style overrides(MuiPaginationItem) for the custom variants.
			</Typography>
			<br /> <br />
			<img src={PaginationImg} width="600px" alt="" />
			<br />
			<br />
			<p>Standard variant (default)</p>
			<Pagination count={10} />
			<Pagination count={10} color="primary" />
			<Pagination count={10} disabled size="small" />
			<p>Outlined variant:</p>
			<Pagination count={10} variant="outlined" color="info" />
			<Pagination count={10} variant="outlined" color="secondary" />
			<p>Rounded Pagination:</p>
			<Pagination
				count={10}
				variant="outlined"
				color="secondary"
				shape="rounded"
				size="large"
			/>
			<br />
			<Pagination count={10} color="success" shape="rounded" />
			<p>Table pagination:</p>
			<Box display="flex" justifyContent="start" alignItems="center">
				<TablePagination
					component="div"
					count={100}
					page={page}
					onPageChange={handleChangePage}
					rowsPerPage={rowsPerPage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>
		</div>
	);
}

export default Paginations;
