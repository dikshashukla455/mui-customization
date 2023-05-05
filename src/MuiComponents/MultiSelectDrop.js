import React from "react";
import { Typography,Autocomplete, Stack, TextField , Chip} from "@mui/material";
function MultiSelectDrop() {
    const top100Films = [
		{ title: "The Shawshank Redemption", year: 1994 },
		{ title: "The Godfather", year: 1972 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: "Pulp Fiction", year: 1994 },
		{
			title: "The Lord of the Rings: The Return of the King",
			year: 2003,
		},
		{ title: "The Good, the Bad and the Ugly", year: 1966 },
		{ title: "Fight Club", year: 1999 },
		{
			title: "The Lord of the Rings: The Fellowship of the Ring",
			year: 2001,
		},
		{
			title: "Star Wars: Episode V - The Empire Strikes Back",
			year: 1980,
		},
		{ title: "Forrest Gump", year: 1994 },
		{ title: "Inception", year: 2010 },
		{
			title: "The Lord of the Rings: The Two Towers",
			year: 2002,
		},
		{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ title: "Goodfellas", year: 1990 },
		{ title: "The Matrix", year: 1999 },
		{ title: "Seven Samurai", year: 1954 },
	];
	return (
		<div>
			<Typography variant="h3" mb={2} mt={3}>
				Multi select dropdown
			</Typography>
			<Typography variant="bodyMedium">
				The multi select dropdown can be customizable based on
				<br />
				using style overrides(MuiCircularProgress) for the custom variants.
			</Typography>
			<br /> <br />
			<img src="" width="600px" alt="" />
			<br></br>
			<br />
			<Stack spacing={3} sx={{ width: 500 }}>
				{" "}
				<Autocomplete
					multiple
					id="tags-standard"
					options={top100Films}
					getOptionLabel={(option) => option.title}
					defaultValue={[top100Films[13]]}
					renderInput={(params) => (
						<TextField
							{...params}
							variant="standard"
							label=""
							placeholder="Favorites"
						/>
					)}
				/>{" "}
				<Autocomplete
					multiple
					id="tags-outlined"
					options={top100Films}
					getOptionLabel={(option) => option.title}
					defaultValue={[top100Films[13]]}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							label="filterSelectedOptions"
							placeholder="Favorites"
						/>
					)}
				/>{" "}
				<Autocomplete
					multiple
					id="tags-filled"
					options={top100Films.map((option) => option.title)}
					defaultValue={[top100Films[13].title]}
					freeSolo
					renderTags={(value, getTagProps) =>
						value.map((option, index) => (
							<Chip
								variant="outlined"
								label={option}
								{...getTagProps({ index })}
							/>
						))
					}
					renderInput={(params) => (
						<TextField
							{...params}
							variant="filled"
							label="freeSolo"
							placeholder="Favorites"
						/>
					)}
				/>{" "}
				<Autocomplete
					multiple
					id="tags-readOnly"
					options={top100Films.map((option) => option.title)}
					defaultValue={[top100Films[12].title, top100Films[13].title]}
					readOnly
					renderInput={(params) => (
						<TextField {...params} label="readOnly" placeholder="Favorites" />
					)}
				/>{" "}
			</Stack>
		</div>
	);
}

export default MultiSelectDrop;
