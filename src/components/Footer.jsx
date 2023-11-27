import React from "react";
import { Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div style={{ height: "300px", width: "auto" }}>
      <Stack
        spacing={20}
        direction={"row"}
        justifyContent={"center"}
        
        style={{ padding: "90px", background: "#03fcad" , borderTop : 'solid 2px', borderColor : "black"}}
      >
        <Stack spacing={2}>
          <Typography variant="h5" fontFamily={"Poppins"} fontWeight={"bold"}>
            Locations
          </Typography>
          <div>
            <Typography variant="h6" fontFamily={"inherit"}>
              Coimbatore
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Chennai
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Selam
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Tuticorin
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}></Typography>
          </div>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h5" fontFamily={"Poppins"} fontWeight={"bold"}>
            Legal
          </Typography>
          <div>
            <Typography variant="h6" fontFamily={"inherit"}>
              Terms and Conditions
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Privacy and Policy
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Copyright
            </Typography>
          </div>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h5" fontFamily={"Poppins"} fontWeight={"bold"}>
            Help
          </Typography>
          <div>
            <Typography variant="h6" fontFamily={"inherit"}>
              email : quickfix@gmail.com
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Tel No : + 91 9876543210
            </Typography>
            <Typography variant="h6" fontFamily={"inherit"}>
              Whatsapp No : + 9123456780
            </Typography>
          </div>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h5" fontFamily={"Poppins"} fontWeight={"bold"}>
            Connect with Us
          </Typography>
          <div>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <WhatsAppIcon />
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                WhatsApp
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <FacebookIcon />
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                FaceBook
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <InstagramIcon />
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                Instagram
              </Typography>
            </Stack>
          </div>
        </Stack>
      </Stack>
      <Stack
        alignItems={"center"}
        style={{
          padding: "20px",
          border: "black 2px",
          borderStyle: "solid none",
        }}
      >
        <Typography variant="h6">
          © Copyright 2023. All rights reserved
        </Typography>
      </Stack>
    </div>
  );
};

export default Footer;
