import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Lottie from "react-lottie";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";

import { ReactComponent as CustomSoftwareIcon } from "../assets/customSoftwareIcon.svg";
import { ReactComponent as MobileIcon } from "../assets/mobileIcon.svg";
import { ReactComponent as WebsitesIcon } from "../assets/websitesIcon.svg";
import repeatingBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  hero: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  buttonsContainer: {
    marginTop: "1em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnMoreButtonHero: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  arrow: {
    marginLeft: 10,
  },
  servicesSection: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  learnMoreButton: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: { marginBottom: "1em" },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMinYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {" "}
        {/** HERO SECTION */}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.hero}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonsContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnMoreButtonHero}
                >
                  Learn More
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                    className={classes.arrow}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/** SERVICES SECTION : Custom software */}
        <Grid
          container
          direction="row"
          className={classes.servicesSection}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnMoreButton}>
              Learn More
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
                className={classes.arrow}
              />
            </Button>
          </Grid>
          <Grid item>
            <CustomSoftwareIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/** SERVICES SECTION : Mobile apps development*/}
        <Grid
          container
          direction="row"
          className={classes.servicesSection}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? " " : <br />}with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnMoreButton}>
              Learn More
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
                className={classes.arrow}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <MobileIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/** SERVICES SECTION : Website development */}
        <Grid
          container
          direction="row"
          className={classes.servicesSection}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnMoreButton}>
              Learn More
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
                className={classes.arrow}
              />
            </Button>
          </Grid>
          <Grid item>
            <WebsitesIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      {/* REVOLUTION SECTION */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    receipe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnMoreButtonHero}
                  >
                    Learn More
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                      className={classes.arrow}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}></div>
        </Grid>
      </Grid>
      {/* INFORMATION SECTION */}
      <Grid item>
        <Grid
          container
          direction="row"
          style={{ height: "80em" }}
          alignItems="center"
        >
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
          >
            <Grid
              sm
              item
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnMoreButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    Learn More
                    <ButtonArrow
                      width={15}
                      height={15}
                      className={classes.arrow}
                      fill="white"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnMoreButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    Learn More
                    <ButtonArrow
                      width={15}
                      height={15}
                      className={classes.arrow}
                      fill="white"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground}></div>
        </Grid>
      </Grid>
      {/* CALL TO ACTION SECTION */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
