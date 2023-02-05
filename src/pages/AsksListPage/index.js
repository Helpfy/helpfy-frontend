import React, { useState, useEffect } from "react";

import BasePage from "../BasePage";

import { SearchService } from "../../services/search";

import { useSnackbar } from "notistack";

import { Box, CircularProgress } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import AskCard from "../../components/AskCard";
import FiltersBar from "../../components/FiltersBar";

export default function AsksListPage() {
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    if (state) {
      const { asks: asksData } = state;
      if (asksData && asksData.data?.length > 0) {
        setCurrentPage(asksData.currentPage + 1);
        setTotalPages(asksData.totalPages);
        setAsks(asksData.data);
        setIsLoading(false);
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

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
          asks.map((item, i) => (
            <Link to={`/ask/${item.id}`} key={i}>
              <AskCard ask={item} />
            </Link>
          ))
        )}
      </Box>
    </BasePage>
  );
}
