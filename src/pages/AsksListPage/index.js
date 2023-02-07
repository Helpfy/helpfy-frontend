import React, { useState, useEffect, useContext } from "react";

import BasePage from "../BasePage";

import { SearchService } from "../../services/search";

import { useSnackbar } from "notistack";

import { Box, CircularProgress } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import { SearchContext } from "../../context/SearchContext";

import AskCard from "../../components/AskCard";
import FiltersBar from "../../components/FiltersBar";
import BasicPagination from "../../components/Pagination";

export default function AsksListPage() {
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const {
    filter,
    setAsks,
    asks,
    isLoading,
    setIsLoading
  } = useContext(SearchContext);

  const searchRequest = (page) => {
    setIsLoading(true);
    SearchService.searchByFilter(filter, page - 1)
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
      setCurrentPage(asksData.currentPage + 1);
      setTotalPages(asksData.totalPages);
      setAsks(asksData.data);
      setIsLoading(false);
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "2em 0"
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          asks.map((item, i) => (
            <Link to={`/ask/${item.id}`} key={i}>
              <AskCard ask={item} />
            </Link>
          ))
        )}
        {asks.length > 0 && (
          <BasicPagination
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={(_, value) => {
              document.getElementById("filter-buttons").scrollIntoView();
              searchRequest(value);
            }}
          />
        )}
      </Box>
    </BasePage>
  );
}
