import React, { useState } from "react";

export const useFiltrSort = (arr) => {
  const [sort, setSort] = useState("");
  const [selectedAviaCompany, setSelectedAviaCompany] = useState([]);
  const [selectedTransfer, setSelectedTransfer] = useState([]);
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: Infinity,
  });
  const handleSortChange = (event) => {
    if (event.target.closest("input")) {
      setSort(event.target.value);
    }
  };
  const handlePriceRangeChange = (event) => {
    const { id, value } = event.target;
    setPriceRange((prevRange) => ({ ...prevRange, [id]: value }));
  };
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (event.target.name == "aviaCompany") {
      setSelectedAviaCompany((prevCategories) => {
        if (checked) {
          return [...prevCategories, value];
        } else {
          return prevCategories.filter((category) => category !== value);
        }
      });
    }
    if (event.target.name == "transfer") {
      setSelectedTransfer((prevCategories) => {
        if (checked) {
          return [...prevCategories, value];
        } else {
          return prevCategories.filter((category) => category !== value);
        }
      });
    }
  };

  const filteredFlights = arr
    .sort((a, b) => {
      if (sort === "upPrice") {
        return a.flight.price.total.amount - b.flight.price.total.amount;
      } else if (sort === "downPrice") {
        return b.flight.price.total.amount - a.flight.price.total.amount;
      }
    })
    .filter((flight) => {
      if (priceRange.minPrice > 0 || priceRange.maxPrice !== Infinity) {
        return (
          flight.flight.price.total.amount >= parseInt(priceRange.minPrice) &&
          flight.flight.price.total.amount <= parseInt(priceRange.maxPrice)
        );
      }
      return true;
    })
    .filter((flight) => {
      if (selectedTransfer.includes("without")) {
        return (
          flight.flight.legs[0].segments[1] == undefined &&
          flight.flight.legs[1].segments[1] == undefined
        );
      } else if (selectedTransfer.includes("one")) {
        return (
          flight.flight.legs[0].segments[1] !== undefined ||
          flight.flight.legs[1].segments[1] !== undefined
        );
      }
      return true;
    })
    .filter((flight) => {
      if (selectedAviaCompany.length > 0) {
        return selectedAviaCompany.includes(flight.flight.carrier.uid);
      }
      return true;
    });
  return [
    handleSortChange,
    handlePriceRangeChange,
    handleCategoryChange,
    filteredFlights,
  ];
};
