import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const Header = ({ mag, setMag, time, setTime }) => (
  <div className="header">
    <header>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" color="#ff0000ff" gutterBottom>
          IGEO Erdbeerenmonitor
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "left",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h6" color="#000000ff" gutterBottom>
            Aktuelle Magnitude: {mag}
          </Typography>
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="Basic button group"
          >
            <Button onClick={() => setMag("significant")}>Significant</Button>
            <Button onClick={() => setMag("4.5")}>M4.5+</Button>
            <Button onClick={() => setMag("2.5")}>M2.5+</Button>
            <Button onClick={() => setMag("1.0")}>M1.0+</Button>
            <Button onClick={() => setMag("all")}>All</Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h6" color="#000000ff" gutterBottom>
            Aktuelle Zeit: {time}
          </Typography>
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="Basic button group"
          >
            <Button onClick={() => setTime("hour")}>Past Hour</Button>
            <Button onClick={() => setTime("day")}>Past Day</Button>
            <Button onClick={() => setTime("week")}>Past 7 Days</Button>
            <Button onClick={() => setTime("month")}>Past 30 Days</Button>
          </ButtonGroup>
        </Box>
      </Stack>
    </header>
  </div>
);
