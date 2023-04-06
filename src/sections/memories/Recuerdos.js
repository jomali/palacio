import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";
import ToggableContainer from "components/ToggableContainer";
import MemoryCard from "./MemoryCard";
import useMemories from "./useMemories";

const Recuerdos = (props) => {
  const { visible } = props;

  const memories = useMemories();

  const currentDate = new Date("2023-05-27T17:14");

  const sortingOptions = [
    { label: "Ordenar por estado", value: "status" },
    { label: "Ordenar por fecha", value: "date" },
    { label: "Ordenar por nombre", value: "alpha" },
  ];

  const [sort, setSort] = React.useState(sortingOptions[0].value);

  React.useEffect(
    () => {
      if (visible) {
        memories.refresh();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible]
  );

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

  const formatDistanceLocale = {
    lessThanXSeconds: "{{count}} s.",
    xSeconds: "{{count}} s.",
    halfAMinute: "30 s.",
    lessThanXMinutes: "{{count}} mins.",
    xMinutes: "{{count}} mins.",
    aboutXHours: "{{count}} horas",
    xHours: "{{count}} horas",
    xDays: "{{count}} días",
    aboutXWeeks: "{{count}} semanas",
    xWeeks: "{{count}} semanas",
    aboutXMonths: "{{count}} meses",
    xMonths: "{{count}} meses",
    aboutXYears: "{{count}} años",
    xYears: "{{count}} años",
    overXYears: "{{count}} años",
    almostXYears: "{{count}} años",
  };

  function handleFormatDistance(token, count, options) {
    options = options || {};

    const result = formatDistanceLocale[token].replace("{{count}}", count);

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return "Dentro de " + result;
      } else {
        return "Hace " + result;
      }
    }

    return result;
  }

  return (
    <ToggableContainer delayed maxWidth="lg" visible={visible}>
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
        {[...memories.values]
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
                onClick={() => memories.start(element)}
                status={element.status}
                subtitle={formatDistance(element.date, currentDate, {
                  addSuffix: true,
                  locale: {
                    ...es,
                    formatDistance: handleFormatDistance,
                  },
                })}
                options={element.options}
              />
            </Grid>
          ))}
      </Grid>
    </ToggableContainer>
  );
};

export default Recuerdos;
