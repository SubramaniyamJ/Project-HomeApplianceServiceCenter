import React from "react";

import {
  Box,
  Typography,
  Paper,
  Container,
  Stack,
  IconButton,
  Button,
  CardActionArea,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import TvIcon from "@mui/icons-material/Tv";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import AirIcon from "@mui/icons-material/Air";
import Navbar from "./Navbar";
import img from "./img/background-imag.jpg";
import imag from "./img/appliance3.jpg";
import imag1 from "./img/appliance6.webp";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const setFullSize = {
    backgroundImage: `url(${imag})`,
    width: "100vw",
    height: "100vh",
  };

  const IconButtonSize = {
    width: "130px",
    height: "130px",
    backgroundColor: "white",
  };

  const setcenter = {
    backgroundImage: `url(${imag1})`,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    border: "2px black",
    borderStyle: "solid none",
  };

  const setcenter2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  };
  return (
    <div style={setFullSize}>
      <Box>
        <Paper elevation={20} style={setcenter}>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            fontFamily={"Poppins"}
            style={{ padding: "80px" }}
          >
            Bringing Your Appliances Back to Life!{" "}
          </Typography>
        </Paper>
      </Box>

      <Box style={{ setcenter }}>
        <Paper elevation={20} style={setcenter2}>
          <Stack direction={"row"} spacing={9}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <CurrencyRupeeIcon
                  fontSize="large"
                  style={{ margin: "10px" }}
                />

                <div>
                  <Typography variant="h6">Affordable price</Typography>
                  <Typography variant="subtitle1">
                    checkup at just 90Rs
                  </Typography>
                </div>
              </Stack>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <SupportAgentIcon fontSize="large" style={{ margin: "10px" }} />

                <div>
                  <Typography variant="h6">Appliance Service</Typography>
                  <Typography variant="subtitle1">Reasonable Price</Typography>
                </div>
              </Stack>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <AccessTimeIcon fontSize="large" style={{ margin: "10px" }} />

                <div>
                  <Typography variant="h6">Doorstep Service</Typography>
                  <Typography variant="subtitle1">under 90 mins</Typography>
                </div>
              </Stack>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <ThumbUpIcon fontSize="large" style={{ margin: "10px" }} />

                <div>
                  <Typography variant="h6">Warrenty service</Typography>
                  <Typography variant="subtitle1">for 10 days</Typography>
                </div>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>

      <Box
        style={{
          backgroundColor: "white",
          height: "550px",
          border: "5px black",
          borderStyle: "solid none",
          paddingTop: "70px",
        }}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={3}>
          <Typography variant="h3" fontFamily={"Poppins"}>
            Our Main Service
          </Typography>
          <br></br>
          <br></br>
          <Stack direction={"row"} spacing={5} style={{}}>
            <Stack alignItems={"center"} spacing={2}>
              <Link to = '/refrigirator'>
                 <Button fontFamily={"Poppins"}>
               <Paper
                  elevation={15}
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <KitchenIcon style={IconButtonSize} />{" "}
                </Paper>
              </Button>
              </Link>
             
              <Typography variant="h5" fontFamily={"Poppins"}>
                Refrigirator
              </Typography>
            </Stack>

            <Stack alignItems={"center"} spacing={2}>
              <Button fontFamily={"Poppins"}>
                <Paper
                  elevation={15}
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocalLaundryServiceIcon style={IconButtonSize} />
                </Paper>
              </Button>
              <Typography variant="h5" fontFamily={"Poppins"}>
                Washing Machine
              </Typography>
            </Stack>

            <Stack alignItems={"center"} spacing={2}>
              <Button fontFamily={"Poppins"}>
                <Paper
                  elevation={15}
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TvIcon style={IconButtonSize} />
                </Paper>
              </Button>
              <Typography variant="h5" fontFamily={"Poppins"}>
                Television
              </Typography>
            </Stack>

            <Stack alignItems={"center"} spacing={2}>
              <Button>
                <Paper
                  elevation={15}
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MicrowaveIcon style={IconButtonSize} />
                </Paper>
              </Button>
              <Typography variant="h5" fontFamily={"Poppins"}>
                Microwave Oven
              </Typography>
            </Stack>

            <Stack alignItems={"center"} spacing={2}>
              <Button>
                <Paper
                  elevation={15}
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AirIcon style={IconButtonSize} />
                </Paper>
              </Button>
              <Typography variant="h5" fontFamily={"Poppins"}>
                Air Conditioner
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Footer />
    </div>
  );
};

export default HomePage;
