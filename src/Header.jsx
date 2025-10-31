import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Header = () => (
  <div className="header">
    <header>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" color="#ff0000ff" gutterBottom>
          IGEO Erdbebenmonitor
        </Typography>
      </Box>
    </header>
  </div>
);
