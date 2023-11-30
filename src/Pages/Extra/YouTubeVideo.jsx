import { Card, CardMedia, Typography, Container } from "@mui/material";

const YouTubeVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/xE2LIuoOGKI";
  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "100px", marginBottom: "40px" }}
    >
      <Typography
        variant="h4"
        component="div"
        textAlign="center"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        Promo of the business
      </Typography>
      <Card>
      
        <CardMedia
          component="iframe"
          height="500" 
          src={videoUrl}
          title="YouTube Video"
        />
      </Card>
    </Container>
  );
};

export default YouTubeVideo;
