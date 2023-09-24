import React, { useState } from "react";

export const useLoadArray = (arr, quanityElem) => {
  const [quanity, setQuanity] = useState(quanityElem);
  const sliceArr = arr.slice(0, quanity);
  const loadMore = () => {
    setQuanity(quanity + quanity);
  }
  return [sliceArr, loadMore];
};

