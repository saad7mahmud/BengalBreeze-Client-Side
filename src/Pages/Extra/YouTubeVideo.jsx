import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";

const YouTubeVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/pPl3ZZdTP3g"; // Replace with your actual YouTube video ID

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
        {/* YouTube Video */}
        <CardMedia
          component="iframe"
          height="500" // You may need to adjust the dimensions based on your video
          src={videoUrl}
          title="YouTube Video"
        />
      </Card>
    </Container>
  );
};

export default YouTubeVideo;
