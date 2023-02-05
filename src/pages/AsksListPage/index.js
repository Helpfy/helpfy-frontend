import React, { useState, useEffect } from "react";

import BasePage from "../BasePage";

import { SearchService } from "../../services/search";

import { useSnackbar } from "notistack";

import { Box, CircularProgress } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import AskCard from "../../components/AskCard";
import FiltersBar from "../../components/FiltersBar";
import BasicPagination from "../../components/Pagination";

export default function AsksListPage() {
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [asks, setAsks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchRequest = (page) => {
    SearchService.searchByFilter("new", page - 1)
      .then((response) => {
        setAsks(response.data);
        setCurrentPage(page);
        setTotalPages(response.totalPages);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        let message = "Não foi possível se comunicar com o servidor.";
        enqueueSnackbar(message, { variant: "error" });
      });
  };

  useEffect(() => {
    if (state) {
      const { asks: asksData } = state;
      if (asksData && asksData.length > 0) {
        setAsks(asksData);
        setIsLoading(false);
      }
    } else {
      searchRequest(currentPage);
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
        <BasicPagination
          count={totalPages}
          page={currentPage}
          color="primary"
          onChange={(_, value) => {
            document.getElementById("filter-buttons").scrollIntoView();
            searchRequest(value);
          }}
        />
      </Box>
    </BasePage>
  );
}
