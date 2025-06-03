import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#1976d2", p: 5 }}>
      {/* Light Blue Section */}
      <Box sx={{ backgroundColor: "#90caf9", p: 3, borderRadius: "8px", textAlign: "center" }}>
        <Box sx={{ backgroundColor: "black", p: 1, borderRadius: "8px", mt: 1, textAlign: "justify" }}>
        <Typography variant="h5" color="white" paddingLeft={1}>
          CONTACT US
        </Typography>
      </Box>
       <Box sx={{ 
              display: "grid", 
              gridTemplateColumns: {xs: '1fr' , md:'repeat(2, 1fr)'},
              gridColumnGap: {sx:'5px',md:'250px'},
              gridRowGap: '10px',      
              mt: 3,  
            }}>
        <Box>
        <Typography variant="h2" sx={{textDecoration: "underline dotted", fontWeight:800,  mb: 2}}>
          GET IN TOUGH.
        </Typography>
        <Typography variant="body1">
          Very challenging to make assignment in MUI.
        </Typography>
        </Box>
        <Box sx={{
           display:'flex', 
           flexDirection: 'column',
           alignItems: {xs:'center',md:'flex-start'},
           textAlign: {xs: 'center', md: 'left'},
           gap: 1,
        }}>
          <Typography variant="h5" fontWeight={600}>SCHOOL: FUTURE GAMES</Typography>
          <Typography variant="h5" fontWeight={600}>INSTRUCTOR: ROB</Typography>
          <Typography variant="h5" fontWeight={600}>PHONE NO: +46 78767590</Typography>
          <Typography variant="h6" fontWeight={600}>CONTACT: beeo2123@gmail.com</Typography>
        </Box>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
        © Bushra Rauf 2005
      </Typography>
      </Box>
      </Box>
     
    </Box>
  );
};

export default Footer;