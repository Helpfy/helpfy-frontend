import React from 'react';

import { Stack, Chip } from '@mui/material';

export default function TagList({ tags }) {
	return (
		<Stack direction="row" spacing={1} sx={{
			display: "flex",
			alignItems: "center",
			gap: ".25em",
			flexWrap: "wrap",
		}}>
			{tags.map((tag, i) => (
				<Chip
					label={tag}
					key={`${tag}${i}`}
					sx={{
						background: "#1976D2",
						color: "#F0F0F0"
					}}
				/>
			))}
		</Stack>
	);
}
