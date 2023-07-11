import Box from "@mui/material/Box";
import styles from "./Carousel.styles";
import { IconButton, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import useCarousel from "./useCarousel";

const Carousel = ({ items, width }: any) => {
  const {
    currentIndex,
    itemsOnScreen,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,

    handleMouseUp,
  } = useCarousel(items.length);

  const contentWidth = width;
  const spaceWidth = width / 5;

  console.log(itemsOnScreen, items.length);

  return (
    <Box
      sx={[
        styles.carouselContainer,
        {
          width: `${
            contentWidth * itemsOnScreen + spaceWidth * (itemsOnScreen - 1)
          }px`,
        },
      ]}
    >
      <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        sx={[
          styles.carouselWrapper,
          {
            width: `${
              items.length * contentWidth + (items.length - 1) * spaceWidth
            }px`,
            transform: `translateX(-${currentIndex * (width + spaceWidth)}px)`,
          },
        ]}
      >
        <Box
          sx={[
            styles.carouselContent,
            {
              gap: `${spaceWidth}px`,
            },
          ]}
        >
          {items.map((item: any, index: number) => (
            <Box
              className="carousel-item"
              key={index}
              sx={{ width: contentWidth }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="carousel-controls" sx={styles.carouselControls}>
        <IconButton
          sx={styles.button}
          color="inherit"
          aria-label="open drawer"
          onClick={handlePrev}
          disabled={!(currentIndex > 0)}
        >
          <ArrowBackIosNewIcon fontSize={"medium"} />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: currentIndex === 0 ? "gray" : "lightgray",
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor:
                currentIndex > 0 &&
                currentIndex < items.length - 1 - itemsOnScreen
                  ? "gray"
                  : "lightgray",
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor:
                currentIndex === items.length - 1 - itemsOnScreen
                  ? "gray"
                  : "lightgray",
            }}
          />
        </Box>
        <IconButton
          sx={styles.button}
          color="inherit"
          aria-label="open drawer"
          onClick={handleNext}
          disabled={!(currentIndex < items.length - 1 - itemsOnScreen)}
        >
          <ArrowForwardIosIcon fontSize={"medium"} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
