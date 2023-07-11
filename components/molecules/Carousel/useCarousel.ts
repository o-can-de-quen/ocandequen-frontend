import { useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const useCarousel = (length: number) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [itemsOnScreen, setItemsOnScreen] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const isXs = useMediaQuery((theme: any) => theme.breakpoints.only("xs"));
  const isSm = useMediaQuery((theme: any) => theme.breakpoints.only("sm"));
  const isMd = useMediaQuery((theme: any) => theme.breakpoints.only("md"));
  const isLg = useMediaQuery((theme: any) => theme.breakpoints.only("lg"));

  useEffect(() => {
    if (isXs) {
      setItemsOnScreen(1);
    }
    if (isSm) {
      setItemsOnScreen(2);
    }
    if (isMd) {
      setItemsOnScreen(3);
    }
    if (isLg) {
      setItemsOnScreen(4);
    }
  }, [isXs, isSm, isMd, isLg]);

  useEffect(() => {
    if (theme.breakpoints.only("xs")) {
      setItemsOnScreen(1);
    }
    if (theme.breakpoints.only("sm")) {
      setItemsOnScreen(2);
    }
    if (theme.breakpoints.only("md")) {
      setItemsOnScreen(3);
    }
    if (theme.breakpoints.only("lg")) {
      setItemsOnScreen(4);
    }
  }, [theme]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < length - 1 - itemsOnScreen) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }, [currentIndex, length, itemsOnScreen]);

  const handleTouchStart = (e: any) => {
    e.preventDefault();
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault();
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  const handleMouseDown = useCallback((e: any) => {
    setDragStart(e.clientX);
  }, []);

  const handleMouseUp = useCallback(
    (e: any) => {
      if (dragStart === null) {
        return;
      }

      const dragEnd = e.clientX;
      const diff = dragStart - dragEnd;

      if (diff > 5) {
        handleNext();
      }

      if (diff < -5) {
        handlePrev();
      }

      setDragStart(null);
    },
    [dragStart, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return {
    currentIndex,
    itemsOnScreen,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,
    handleMouseUp,
  };
};

export default useCarousel;
