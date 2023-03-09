import * as React from "react";

import { alpha } from "@mui/material/styles";
import { makeStyles } from "../../styles";

import clsx from "clsx";

import Paper from "@mui/material/Paper";

const useStyles = makeStyles()({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  container: {
    position: "absolute",
    top: 35,
    left: 0,
    right: 0,
    bottom: 0,
    height: "calc(100% - 35px)",
    padding: 5,
    width: "100%",
    background: alpha("#000", 0.2),
    overflow: "scroll",
  },
});

interface ICardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children = null, className, style }: ICardProps) => {
  const { classes } = useStyles();
  return (
    <Paper className={clsx(classes.root, className)} style={style}>
      <div className={classes.container}>{children}</div>
    </Paper>
  );
};

export default Card;
