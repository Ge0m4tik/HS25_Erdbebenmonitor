import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Slider from "@mui/material/Slider";

export const Sidebar = ({ info, size, setSize }) => (
  <div className="aside">
    <aside>
      <Card>
        <CardContent>
          <Box sx={{ minWidth: 275 }}>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Informationen zum Erdbeben:
            </Typography>
            <Typography variant="body2">
              Ort: {info.properties?.place ?? ""}
            </Typography>
            <Typography variant="body2">
              Magnitude (Stärke): {info.properties?.mag ?? ""}
            </Typography>
            <Typography variant="body2">
              Lat: {info.geometry?.coordinates?.[1] ?? ""}
            </Typography>
            <Typography variant="body2">
              Lon: {info.geometry?.coordinates?.[0] ?? ""}
            </Typography>
            <Typography variant="body2">
              Datum:{" "}
              {info.properties?.time
                ? new Date(info.properties.time).toLocaleString()
                : ""}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ width: 200, p: 2 }}>
        <Slider
          aria-label="Grösse"
          defaultValue={size}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          onChange={(event, value) => setSize(value)}
        />
      </Box>
    </aside>
  </div>
);
