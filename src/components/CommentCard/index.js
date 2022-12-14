import React, { useState } from 'react';

import Button from '../Button';
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import { Typography, Divider } from '@mui/material';

export default function CommentCard({ text, user }) {
	const [answering, setAnswering] = useState(false);

	const handleAnswering = () => {
		setAnswering(!answering);
	}

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
				<Button
					label={"Responder"}
					background={"#1976D2"}
					fontColor={"#F0F0F0"}
					onClick={handleAnswering}
					isActive={answering}
				/>
			</Box>
			{answering && (
				<TextField
					sx={{
						borderRadius: "5px",
						color: "white",
						background: "#F0F0F0",
						fontSize: "16px"
					}}
					InputProps={{
						endAdornment: (
							<IconButton>
								<SendIcon sx={{ color: "#1976D2" }} fontSize="small" />
							</IconButton>
						)
					}}
					multiline
				/>
			)}
		</Box>
	);
}
