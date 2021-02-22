import React, { useContext } from "react";
import axios from "axios";

import ListsContext from "../../../contexts/lists/Lists";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Trash from "../../../img/svgr/Trash";

import "./ModaleDeleteProduct.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#FCFCFC",
    boxShadow: theme.shadows[2],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  button: {
    border: "none",
    marginTop: 25,
    backgroundColor: "#301e70",
    color: "#FCFCFC",
    padding: 10,
    fontFamily: "Poppins-Medium",
    borderRadius: "10px",
    cursor: "pointer"
  },
  close: {
    fontWeight: 600,
    paddingBottom: 40,
    cursor: "pointer",
  },
   trash: {
    cursor: "pointer",
  },
}));

export default function ModaleDeleteList({ list }) {
  const context = useContext(ListsContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("token");

  const handleDelete = async (event) => {
    try {
      event.preventDefault();
      const data = context.lists.filter((item) => item.id !== list.id);
      context.setLists(data);
      await axios.delete(
        `http://localhost:5000/forecast/list/delete/${list.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p type="button" onClick={handleOpen} className={classes.trash}>
        <Trash />
      </p>
      <Modal
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} id="container">
            <div className={classes.close} onClick={handleClose}>
              <p className="para">X</p>
            </div>
            <p id="transition-modal-description">
              Êtes-vous sûr de vouloir supprimer cette liste ?
            </p>
            <button
              className={classes.button}
              type="submit"
              onClick={handleDelete}
            >
              {" "}
              Supprimer{" "}
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
