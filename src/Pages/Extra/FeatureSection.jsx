import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { FaHome, FaBuilding, FaMoneyBill } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ marginTop: "80px", marginBottom: "30px" }}
      >
        Explore BengalBreeze Features
      </Typography>

      <Grid container spacing={3}>
        {/* Feature 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <FaHome
                size={40}
                color="#3f51b5"
                style={{ marginBottom: "10px" }}
              />
              <Typography variant="h6" component="div" gutterBottom>
                Stylish Homes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover stylish homes with modern amenities, designed to
                elevate your living experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <FaBuilding
                size={40}
                color="#e91e63"
                style={{ marginBottom: "10px" }}
              />
              <Typography variant="h6" component="div" gutterBottom>
                Prime Locations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore properties in prime locations, ensuring convenience and
                access to essential services.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <FaMoneyBill
                size={40}
                color="#009688"
                style={{ marginBottom: "10px" }}
              />
              <Typography variant="h6" component="div" gutterBottom>
                Affordable Pricing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BengalBreeze offers affordable pricing options, making your
                dream home within reach.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureSection;
