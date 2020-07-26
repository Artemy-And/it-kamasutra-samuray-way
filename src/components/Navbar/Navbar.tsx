import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import state from "./../../redux/state";



const Navbar = () => {
    const bestFriends = state.dialogs.map(friend => {
        return <div>{friend.name}</div> ;
    })
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        {/*<a href="/profile">Profile</a>*/}
      </div>
      <div className={classes.item}>
        <NavLink to ="/dialogs" activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to ="/news" activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to ="/music" activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to ="settings" activeClassName={classes.active}>Settings</NavLink>
      </div>
        <div className={classes.item}>
            <span className={classes.myBestFriends}>{bestFriends}</span>
        </div>



    </nav>
  );
};

export default Navbar;
