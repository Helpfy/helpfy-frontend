import React from 'react';

import Button from '../Button';

import Box from '@mui/material/Box';
import { Typography, Divider } from '@mui/material';

export default function CommentCard({ text, user }) {
	return (
		<Box
			sx={{
				width: "85%",
				background: "#393E41",
				border: "1px solid #F0F0F0",
				padding: "1.5em",
				borderRadius: "10px",
				display: "flex",
				flexDirection: "column",
				gap: "1em",
				borderLeft: "7px solid #F0F0F0"
			}}
		>
			<Typography color="#F0F0F0" variant="body2">
				{text}
			</Typography>
			<Divider sx={{ borderColor: "#F0F0F0" }} />
			<Box
				sx={{
					width: "100%",
					display: "flex",
					gap: "1em",
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Typography color="#F0F0F0" variant="body2" fontWeight="bold">
					Respondido por {user}
				</Typography>
			</Box>
		</Box>
	);
}
