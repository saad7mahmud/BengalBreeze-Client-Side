import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQsSection = () => {
  const faqs = [
    {
      question: "What services does BengalBreeze provide?",
      answer:
        "BengalBreeze offers a range of real estate services, including property listings, buying assistance, and property management.",
    },
    {
      question: "How can I list my property on BengalBreeze?",
      answer:
        'To list your property, you can create an account, go to the "List Your Property" section, and follow the steps to provide property details.',
    },
    {
      question: "Are there any fees for using BengalBreeze services?",
      answer:
        "Listing your property is free on BengalBreeze. However, certain premium services may have associated fees. Please check our pricing page for details.",
    },
  ];

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQsSection;
