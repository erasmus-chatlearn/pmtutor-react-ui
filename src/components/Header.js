import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "./Header.css";
import { useNavigate } from "react-router-dom";

//Import icons for the menu
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { FaRobot, FaBook } from "react-icons/fa";
import { IoMdCheckmarkCircle, IoMdHelpCircle } from "react-icons/io";
// import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Header = () => {
  document.documentElement.style.setProperty(
    "--window-width",
    `${window.innerWidth}px`
  ); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty(
    "--window-height",
    `${window.innerHeight}px`
  ); //enables the use of the current viewport height in the CSS file
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    //changes width and height values when viewport is resizing
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { collapseSidebar, collapsed } = useProSidebar();

  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  const [logOut, setLogOut] = useState(false);

  //This controls whether to  display or hide the confirmation box depending on the current situation
  const handleConfirmationBox = () => {
    if (!logOut) {
      document.querySelector(".confirm-bg").style.display = "flex";
      document.querySelector(".container").style.display = "flex";
      setLogOut(true);
    } else {
      document.querySelector(".confirm-bg").style.display = "none";
      document.querySelector(".container").style.display = "none";
      setLogOut(false);
    }
  };

  const handleLogOut = async () => {
    handleConfirmationBox();
    fetch("/appid/logout").then(res => {
      window.location.reload();
    }).catch(err => console.log(err));
  };

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/Profile");
  // };

  if (window.innerWidth > `769`) {
    return (
      <div className="header">
        <Sidebar className="sidebar" defaultCollapsed={collapsed}>
          <Menu>

            <MenuItem
              icon={collapsed ? <SlArrowRight /> : <SlArrowLeft />} //Displays either menu icon or close icon whether the menu is collapsed or not
              onClick={() => collapseSidebar()}
              style={{ height: window.innerHeight / 10 }}
            ></MenuItem>

            <MenuItem
              active={true}
              icon={<AiFillHome />}
              style={{ height: window.innerHeight / 10 }}
              component={<NavLink to="/" onClick={activateNav}></NavLink>}
            > ChatLearn </MenuItem>

            <MenuItem
              icon={<FaRobot />}
              style={{
                height: window.innerHeight / 10,
              }}
              component={<NavLink to="/Tutor" onClick={activateNav}></NavLink>}
            >
              PM Tutor
            </MenuItem>

            <MenuItem
              icon={<IoMdHelpCircle />}
              style={{ height: window.innerHeight / 10 }}
              component={<NavLink to="/Help" onClick={activateNav}></NavLink>}
            >
              Help
            </MenuItem>

            <MenuItem
              icon={<FiLogOut />}
              style={{ height: window.innerHeight / 10 }}
              onClick={() => handleConfirmationBox()}
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="container">
          <div className="confirmation-text">
            Are you sure you want to log out?
          </div>
          <div className="button-container">
            <button
                id="confirm-logout-btn"
              className="confirmation-button"
              onClick={() => handleLogOut()}
            >
              Yes
            </button>
            <button
              className="cancel-button"
              onClick={() => handleConfirmationBox()}
            >
              Cancel
            </button>
          </div>
        </div>
        <div
          className="confirm-bg"
          onClick={() => handleConfirmationBox()}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="upperbar">
          <hr
            style={{
              margin: 0,
              zIndex: 1000,
              borderTop: "2px solid #000000 ",
              position: "absolute",
              top: "100%",
              width: "100%",
            }}
          />
          <h1
            id="cl"
            style={{
              left: "20%",
              fontSize: window.innerWidth / 25,
              margin: 0,
              width: "60%",
              top: "50%",
              msTransform: "translateY(-50%)",
              transform: "translateY(-50%)",
              position: "absolute",
              textAlign: "center",
            }}
          ></h1>
          {collapsed ? (
            <AiOutlineMenu
              onClick={() => collapseSidebar()}
              style={{
                top: "50%",
                left: "6%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
                position: "absolute",
                zIndex: 1000,
                width: window.innerWidth / 15,
                height: window.innerHeight / 15,
              }}
            />
          ) : (
            <SlArrowLeft
              onClick={() => collapseSidebar()}
              style={{
                top: "50%",
                left: "6%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
                position: "absolute",
                zIndex: 1000,
                width: window.innerWidth / 15,
                height: window.innerHeight / 15,
              }}
            />
          )}

          <div className="sideb">
            <Sidebar
              style={{
                width: collapsed ? window.innerWidth / 7 : window.innerWidth,
              }}
              defaultCollapsed={true}
            >
              <Menu>
                {!collapsed && (
                  <MenuItem
                    active={true}
                    icon={<AiFillHome size={"2em"} />}
                    style={{
                      height:
                        (window.innerHeight - window.innerHeight / 10) / 6,
                    }}
                    component={<NavLink
                      to="/"
                      onClick={() => {
                        activateNav();
                        setTimeout(() => {
                          document.getElementById("cl").innerHTML = "ChatLearn"; //the purpose of this is to update the page selected in the top bar in the mobile view
                        }, 0);
                      }}
                    ></NavLink>}
                  >
                    ChatLearn
                  </MenuItem>
                )}
                {!collapsed && (
                  <MenuItem
                    icon={<FaRobot size={"2em"} />}
                    style={{
                      height:
                        (window.innerHeight - window.innerHeight / 10) / 6,
                    }}
                    component={<NavLink
                      to="/Tutor"
                      onClick={() => {
                        activateNav();
                        setTimeout(() => {
                          document.getElementById("cl").innerHTML = "PM Tutor"; //the purpose of this is to update the page selected in the top bar in the mobile view
                        }, 0);
                      }}
                    ></NavLink>}
                  >
                    PM Tutor
                  </MenuItem>
                )}
                {!collapsed && (
                  <MenuItem
                    icon={<IoMdHelpCircle size={"2em"} />}
                    style={{
                      height:
                        (window.innerHeight - window.innerHeight / 10) / 6,
                    }}
                    component={<NavLink
                      to="/Help"
                      onClick={() => {
                        activateNav();
                        setTimeout(() => {
                          document.getElementById("cl").innerHTML = "Help"; //the purpose of this is to update the page selected in the top bar in the mobile view
                        }, 0);
                      }}
                    ></NavLink>}
                  >
                    Help
                  </MenuItem>
                )}
                {!collapsed && (
                  <MenuItem
                    icon={<FiLogOut size={"2em"} />}
                    style={{
                      height:
                        (window.innerHeight - window.innerHeight / 10) / 6,
                    }}
                    onClick={() => handleConfirmationBox()}
                  >
                    Logout
                  </MenuItem>
                )}
              </Menu>
            </Sidebar>
          </div>
          <div className="container">
            <div className="confirmation-text">
              Are you sure you want to log out?
            </div>
            <div className="button-container">
              <button
                  id="confirm-logout-btn"
                className="confirmation-button"
                onClick={() => handleLogOut()}
              >
                Yes
              </button>
              <button
                className="cancel-button"
                onClick={() => handleConfirmationBox()}
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            className="confirm-bg"
            onClick={() => handleConfirmationBox()}
          ></div>
        </div>
      </div>
    );
  }
};

export default Header;
