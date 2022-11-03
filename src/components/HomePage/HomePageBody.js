import { IconButton, InputAdornment, Link, TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import "./styles/HomePageBody.css";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import axios from "axios";
import { restrauntNames, foodItems } from "../Resources/RestaurantDetails";
import RestaurantList from "../Restaurant/RestaurantList";
import { useNavigate } from "react-router-dom";

function HomePageBody(props) {
  const [restaurantname, setrestaurantName] = useState("");
  const [restaurantList, setRestaurantList] = useState(false);
  const navigate = useNavigate();

  const changeHandlerRestaurantName = (event) => {
    event.persist();
    setrestaurantName(event.target.value);
    console.log(event.target.value);
  };

  function getRestaurantList() {
    axios
      .post(" http://localhost:8080/searchRestaurant", "s")
      .then((response, body) => {
        console.log(response.data);

        if (response.data !== null) {
        }
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className="HomePageBody">
      <div>
        <h1>NutraMeals</h1>
      </div>
      <div>
        <h2>Your Healthy Food Delivery Partner</h2>
      </div>
      <div className="textfield-div">
        <TextField
          className="textfield"
          onChange={(value) => changeHandlerRestaurantName(value)}
          id="mySearch"
          variant="outlined"
          size="small"
          placeholder="Search for restaurant"
          title="Type in a category"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  component={Link}
                  to={{
                    pathname: "/searchRestaurant",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
      <div className="button-div">
        <Button
          className="button"
          variant="contained"
          onClick={() => navigate("/restaurantList")}
          sx={{
            borderRadius: 50,
            backgroundColor: "#21b6ae",
            color: "black",
            textAlign: "center",
            fontSize: 13,
          }}
          to={{
            pathname: "/listRestaurants",
          }}
        >
          List All Restaurants
        </Button>
      </div>
    </div>
  );
}
export default HomePageBody;
// {restaurantList && <RestaurantList />}
