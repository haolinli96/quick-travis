import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import CustomTabs from "components/CustomTabs/CustomTabs.js";




const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};



const useStyles = makeStyles(styles);

const CuisineList = [
  "Pizza", "Chinese", "Mexican", "Burgers", "Thai", "Seafood", "Italian", "Steakhouse", "Korean", "Japanese",
  "Sandwiches", "Breakfast", "Vietnamese", "Vegetarian", "Sushi Bars", "American",
]



export default function Register() {
  const classes = useStyles();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostCode] = useState();
  const [aboutMe, setAboutMe] = useState("");
  const [preferredCuisines, setPreferredCuisines] = useState([]);


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>

          <CustomTabs
            title={"Edit Profile"}
            headerColor="primary"
            tabs={[
              {
                tabName: "Personal Info",
                tabContent: (
                  <div>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Username"
                          id="username"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: (event) => { setUserName(event.target.value) }
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText={email}
                          id="email-address"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            disabled: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="First Name"
                          id="first-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: (event) => { setFirstName(event.target.value) }
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="last-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: (event) => { setLastName(event.target.value) }
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="City"
                          id="city"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: (event) => { setCity(event.target.value) }
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Country"
                          id="country"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: (event) => { setCountry(event.target.value) }
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Postal Code"
                          id="postal-code"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: (event) => { setPostCode(event.target.value) }
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                        <CustomInput
                          labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                          id="about-me"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5,
                            onChange: (event) => { setAboutMe(event.target.value) }
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                )
              },
              {
                tabName: "Restaurant Preferences",

              }
            ]}
          />


          <Button
            color="primary"
            onClick={() => { console.log(username, email, city) }}
          >
            Update Profile
              </Button>


        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
