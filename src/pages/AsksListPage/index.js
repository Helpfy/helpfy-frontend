import React, { useState, useEffect, useContext } from "react";

import BasePage from "../BasePage";

import { SearchService } from "../../services/search";

import { useSnackbar } from "notistack";

import { Box, CircularProgress } from "@mui/material";

import { Link } from "react-router-dom";

import { SearchContext } from "../../context/SearchContext";

import AskCard from "../../components/AskCard";
import FiltersBar from "../../components/FiltersBar";
import BasicPagination from "../../components/Pagination";

export default function AsksListPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { filter, setAsks, asks, isLoading, setIsLoading } =
    useContext(SearchContext);

  const searchRequest = (page) => {
    setIsLoading(true);
    SearchService.searchByFilter(filter, page - 1)
      .then((response) => {
        setAsks(response);
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
    setCurrentPage(asks.currentPage + 1);
    setTotalPages(asks.totalPages);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asks]);

  useEffect(() => {
    if (!asks) {
      searchRequest(1);
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "2em 0",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          asks.data?.map((item, i) => (
            <Link to={`/ask/${item.id}`} key={i}>
              <AskCard ask={item} />
            </Link>
          ))
        )}
        {asks.data?.length > 0 && (
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
