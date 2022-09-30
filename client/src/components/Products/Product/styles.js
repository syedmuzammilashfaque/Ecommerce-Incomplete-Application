import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    paddingTop: 5,
    borderRadius: 2,
    backgroundColor: "#fff",
    maxWidth: "100%",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;",
    },
  },

  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "left",
  },
  cardContent: {
    display: "flex",
    justifyContent: "left",
  },

  linkButton: {
    textDecoration: "none",
  },
}));
