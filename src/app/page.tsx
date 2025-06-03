
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h1" align="center" fontSize={60} fontWeight={600} gutterBottom>
        Welcome to Beeo's Dinar
      </Typography>
      <Typography variant="h4" align="center">Meals from all over the world</Typography>

      {/* Skewed Hero Wrapper */}
      <Box id="skew-hero" sx={{
        backgroundImage: "url(backgrounddarkblue.jpg)", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        zIndex: 1,
        width: "100%",
        height: "70vh",
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 100% 100%, 0 85%)", // 🔹 Cuts the bottom right corner

      }}>
        {/* Skewed Section */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            textAlign: "center",
            padding: { xs: "100px 30px", md: "150px 50px" },
            overflow: "hidden",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Hero Heading */}
          <Typography
            variant="h2"
            sx={{
              margin: 0,
              color: "#fff",
              textTransform: "uppercase",
              fontSize: { xs: "32px", md: "60px" }, // Responsive font size
            }}
          >
            Discover Amazing Meals
          </Typography>

          {/* Hero Description */}
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.5, fontWeight: 550, color: "#fff", maxWidth: "800px" }}
          >
            Savor the finest flavors and indulge in exquisite dining experiences crafted just for you.
          </Typography>

          {/* Button */}
          <Button
            href="/recipes"
            sx={{
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#039dc8",
              fontSize: "16px",
              padding: "10px 25px",
              marginTop: "20px",
              maxWidth: "200px",
              width: "100%",
              "&:hover": { backgroundColor: "#027ba4" }, // Hover effect
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
            {/* 🔹 Open Timings Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: 3,
          fontWeight: "bold",
          color: "", // ✅ Golden color for text
          fontSize: { xs: "20px", md: "24px" },
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          borderRadius: "8px",
        }}
      >
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            textTransform: "uppercase", 
            mb: 1,
            position: "relative",
            animation: "revolve 3s ease-out", // ✅ Continuous animation
            "@keyframes revolve": {
            "0%": { transform: "translateX(100%) rotate(0deg)", opacity: 0 }, // ✅ Starts off-screen
            "50%": { transform: "translateX(50%) rotate(10deg)", opacity: 1 }, // ✅ Rotates slightly
            "100%": { transform: "translateX(0) rotate(0deg)", opacity: 1 }, // ✅ Ends i
          },
             }}>
            Beeo’s Dinar
          </Typography>

        <Typography variant="h4" sx={{ 
          fontWeight: 700,
           textTransform: "uppercase",
           mb: 1,
           position: "relative",
           animation: "slideIn 1.2s ease-out", //  Smooth sliding animation
           "@keyframes slideIn": {
           "0%": { transform: "translateX(100%)", opacity: 0 }, // Starts off-screen
           "100%": { transform: "translateX(0)", opacity: 1 }, // Ends in place
          },

           }}>
          Open Hours: Mon - Sat | 10:00 AM - 11:00 PM
        </Typography>
      </Box>
      <Box sx={{ width: "100%", textAlign: "center", mt: 0 }}>
        <Image src="/resto.jpg" alt="Restaurant" width={1300} height={400} 
        style={{ 
          borderRadius: "10px",
          maxWidth: "100%",
          height: "auto",
          clipPath: "polygon(0 5%, 100% 17%, 100% 105%, 0% 100%, 0 100%)"
        }} />
      </Box>
     </Box>
  );
}