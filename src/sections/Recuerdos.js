import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useStory } from "components";
import ToggableContainer from "components/ToggableContainer";
import MemoryCard from "./MemoryCard";

const Recuerdos = () => {
  const story = useStory();

  const currentDate = new Date("2023-05-27T17:14");

  const memories = [
    {
      id: "erizo",
      title: "El erizo",
      date: new Date("1995-09-10T10:51"),
      status: "new",
      options: {
        objectPosition: "bottom",
      },
    },
    {
      id: "local",
      title: "El local",
      date: new Date("2006-03-19T21:32"),
      status: "disabled",
    },
    {
      id: "vidrieras",
      title: "Las vidrieras",
      date: new Date("2023-05-27T13:21"),
      status: "disabled",
    },
    {
      id: "dibujo",
      title: "El dibujo",
      date: new Date("2017-12-23T21:22"),
      status: "default",
      options: {
        objectPosition: "top",
      },
    },
    {
      id: "discusion",
      title: "La discusión",
      date: new Date("2023-05-18T19:47"),
      status: "disabled",
    },
    {
      id: "pelotas-yoga",
      title: "Las pelotas de yoga",
      date: new Date("2018-04-19T16:35"),
      status: "viewed",
    },
  ];

  return (
    <ToggableContainer
      delayed
      maxWidth="lg"
      visible={story.state["currentSection"] === 2}
    >
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {memories.map((element) => (
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
