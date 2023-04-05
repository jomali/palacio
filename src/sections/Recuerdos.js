import React from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { useStory } from "components";
import ToggableContainer from "components/ToggableContainer";
import MemoryCard from "./MemoryCard";

const Recuerdos = () => {
  const story = useStory();

  const currentDate = new Date("2023-05-27T17:14");

  const memories = [
    {
      id: "vidrieras",
      title: "Las vidrieras",
      date: new Date("2023-05-27T13:21"),
      status: "disabled",
    },
    {
      id: "discusion",
      title: "La discusión",
      date: new Date("2023-05-18T19:47"),
      status: "disabled",
    },
    {
      id: "pelotas-yoga",
      title: "La pelota de yoga",
      date: new Date("2018-04-19T16:35"),
      status: "disabled",
    },
    {
      id: "dibujo",
      title: "El dibujo",
      date: new Date("2017-12-23T21:22"),
      status: "disabled",
      options: {
        objectPosition: "top",
      },
    },
    {
      id: "local",
      title: "El local",
      date: new Date("2006-03-19T21:32"),
      status: "disabled",
    },
    {
      id: "armadura",
      title: "La armadura",
      date: new Date("1995-09-10T10:51"),
      status: "disabled",
      options: {
        objectPosition: "bottom",
      },
    },
  ];

  const sortingOptions = [
    { label: "Ordenar por estado", value: "status" },
    { label: "Ordenar por fecha", value: "date" },
    { label: "Ordenar por nombre", value: "alpha" },
  ];

  const [sort, setSort] = React.useState(sortingOptions[0].value);

  const statusSort = (a, b) => {
    const getStatusCode = (status) => {
      switch (status) {
        case "new":
          return 1;
        case "default":
          return 2;
        case "viewed":
          return 3;
        default:
          // case "disabled":
          return 4;
      }
    };

    const statusA = getStatusCode(a.status);
    const statusB = getStatusCode(b.status);

    return statusA - statusB;
  };

  const alphabeticalSort = (a, b) => {
    const titleA = a.id.toUpperCase();
    const titleB = b.id.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  };

  const dateSort = (a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  };

  return (
    <ToggableContainer
      delayed
      maxWidth="lg"
      visible={story.state["currentSection"] === 2}
    >
      <Box sx={{ display: "flex", justifyContent: "end", marginBottom: 1.5 }}>
        <FormControl
          sx={{ alignSelf: "end", m: 1, minWidth: 120 }}
          variant="standard"
        >
          <Select
            id="demo-simple-select"
            label="Orden"
            labelId="demo-simple-select-label"
            onChange={(event) => setSort(event.target.value)}
            value={sort}
          >
            {sortingOptions.map((element) => (
              <MenuItem key={element.value} value={element.value}>
                {element.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        {[...memories]
          .sort(
            sort === "status"
              ? statusSort
              : sort === "date"
              ? dateSort
              : alphabeticalSort
          )
          .map((element) => (
            <Grid key={`card-${element.id}`} xs={6} sm={4} md={3}>
              <MemoryCard
                name={element.id}
                title={element.title}
                status={element.status}
                subtitle={"Hace 28 años"}
                options={element.options}
              />
            </Grid>
          ))}
      </Grid>
    </ToggableContainer>
  );
};

export default Recuerdos;
