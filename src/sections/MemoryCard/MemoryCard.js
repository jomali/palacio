import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const Image = styled("img")(({ disabled, theme }) => ({
  height: "100%",
  objectFit: "cover",
  width: "100%",
  ...(disabled && {
    filter: "grayscale()",
    opacity: theme.palette.action.disabledOpacity,
  }),
}));

const Text = styled(Typography)(({ disabled, theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  ...(disabled && {
    color: theme.palette.action.disabled,
  }),
}));

const Contents = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2),
  },
}));

const StatusContainer = styled(Box)(({ theme }) => ({
  alignItems: "end",
  display: "flex",
  flexDirection: "column",
  height: 24, // chip height (small)
  [theme.breakpoints.up("md")]: {
    height: 32, // chip height (medium)
  },
}));

const MemoryCard = (props) => {
  const { name, options, subtitle, status, title, ...otherProps } = props;
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        ...(status === "new" && {
          borderColor: theme.palette.primary.main,
        }),
      }}
      variant="outlined"
      {...otherProps}
    >
      <Box sx={{ height: 150 }}>
        <Image
          alt={name}
          disabled={status === "disabled"}
          src={`/assets/${name}.png`}
          {...(Boolean(options) && {
            style: options,
          })}
        />
      </Box>
      <Contents>
        <Text disabled={status === "disabled"} gutterBottom>
          {title}
        </Text>
        <Text
          color="text.secondary"
          disabled={status === "disabled"}
          gutterBottom
        >
          {subtitle}
        </Text>
        <Stack direction="column" spacing={{ xs: 1, md: 2 }}>
          <StatusContainer>
            {status !== "default" && (
              <Chip
                color={status === "new" ? "primary" : "default"}
                disabled={status === "disabled"}
                label={
                  status === "new"
                    ? "Nuevo"
                    : status === "viewed"
                    ? "Visto"
                    : status === "disabled"
                    ? "Bloqueado"
                    : ""
                }
                size={matches ? "medium" : "small"}
                sx={{ width: "fit-content" }}
              />
            )}
          </StatusContainer>

          <Button disabled={status === "disabled"} variant={"outlined"}>
            Recordar
          </Button>
        </Stack>
      </Contents>
    </Paper>
  );
};

export default MemoryCard;
