import { CropFree } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { restrauntNames, foodItems } from "../Resources/RestaurantDetails";
import "./RestrauntList.css";
import image from "../../assets/background.jpg";

function RestaurantList(props) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="grid-container">
        {restrauntNames.map((restaurant, index) => (
          <div key={index} className="item-container">
            <img className="image" alt="img" src={restaurant.image}></img>
            <div className="content">
              <div className="name-rating">
                <h2>{restaurant.name}</h2>
                <h5>Rating: {restaurant.rating + "/ 5"}</h5>
              </div>
              <h4>Location :</h4>
              <h5>
                {restaurant.street1}, {restaurant.street2}, {restaurant.state},{" "}
                {restaurant.zipCode}
              </h5>
              <br></br>
              <h4>Contact :</h4>
              <h5>{restaurant.phone}</h5>
              <h5>{restaurant.email}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RestaurantList;
