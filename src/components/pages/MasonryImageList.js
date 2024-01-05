import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MasonryImageList() {
  return (
    <Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "../../../images/1.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/2.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/3.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/4.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/5.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/6.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/7.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/8.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/9.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/10.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/11.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/12.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/13.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/14.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/15.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/16.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/17.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/18.jpeg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/19.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/20.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/21.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/22.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/23.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/24.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/25.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/26.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/27.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/28.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/29.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/30.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/31.jpg",
    title: "Mazingira Smart",
  },
  {
    img: "../../../images/32.jpg",
    title: "Mazingira Smart",
  },
];
