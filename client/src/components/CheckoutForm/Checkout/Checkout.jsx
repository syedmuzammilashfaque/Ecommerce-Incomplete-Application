import * as React from "react";
import {
  CssBaseline,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@material-ui/core";
import useStyles from "./Style";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import AddressForm from "../Addressform";
import PaymentForm from "../Paymentform";
import Review from "../Reviewform";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.toolbar} />
      <Container
        className={classes.layout}
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
      >
        <Paper
          className={classes.paper}
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            sx={{ pt: 3, pb: 5 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
