import React, { useState, useEffect } from "react";

import BasePage from "../BasePage";

import { SearchService } from "../../services/search";

import { useSnackbar } from "notistack";

import { Box, CircularProgress } from "@mui/material";

import AskCard from "../../components/AskCard";
import FiltersBar from "../../components/FiltersBar";

export default function AsksListPage({ asksData = [] }) {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [asks, setAsks] = useState(asksData);

  useEffect(() => {
    if (asksData.length > 0) {
      setIsLoading(false);
    } else {
      SearchService.searchByFilter("new")
        .then((response) => {
          setAsks(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          let message = "Não foi possível se comunicar com o servidor.";
          enqueueSnackbar(message, { variant: "error" });
        });
    }
  }, []);

  return (
    <BasePage pageName="Questões">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          width: "75%",
        }}
      >
        <FiltersBar />
        {isLoading ? (
          <CircularProgress />
        ) : (
          asks.map((item, i) => <AskCard ask={item} key={`${item}${i}`} />)
        )}
      </Box>
    </BasePage>
  );
}
