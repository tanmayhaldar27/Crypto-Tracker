import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "../Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {Link} from "react-router-dom";
import "./style.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer">
     
        <MenuRoundedIcon onClick={() => {
          setOpen(true);
        }} className="menuIcon"/>
     
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="mobileLinks">
          <Link to="/">Home</Link>
          <Link to="/compare">Compare</Link>
          {/* <Link to="/watchlist">Watchlist</Link> */}
          <Link to="/dashboard">
            Dashboard
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
