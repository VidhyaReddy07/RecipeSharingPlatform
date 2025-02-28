import React from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css"; // Ensure CSS is applied 
import parotaImg from "../pages/parota.jpg";
import dosaImg from "../pages/dosa.jpg";
import biryaniImg from "../pages/biryani.jpg";
import idliImg from "../pages/idli.jpg";

// Recipe Data (Including Multiple Recipes)
const recipes = {
  "parota": {
    title: "Parota Recipe",
    image: parotaImg,
    description: "A soft, layered Indian bread perfect with curries.",
    details: (
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 cups all-purpose flour (maida)</li>
          <li>1 teaspoon salt</li>
          <li>1 teaspoon sugar (optional)</li>
          <li>3 tablespoons oil/ghee</li>
          <li>¾ cup warm water (adjust as needed)</li>
          <li>¼ cup milk (optional, for softness)</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Mix flour, salt, sugar, and oil/ghee in a bowl.</li>
          <li>Knead into a soft dough and let it rest.</li>
          <li>Roll the dough thin, fold it, and roll it again.</li>
          <li>Cook on a hot pan with ghee until golden brown.</li>
          <li>Fluff by clapping it to separate the layers.</li>
        </ol>
      </div>
    ),
  },
  "dosa": {
    title: "Dosa Recipe",
    image: dosaImg,
    description: "A crispy South Indian crepe made from rice and lentils.",
    details: (
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 cups rice</li>
          <li>1 cup urad dal (black gram)</li>
          <li>1 teaspoon salt</li>
          <li>Water (as needed)</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Soak rice and dal separately for 6 hours.</li>
          <li>Grind them into a smooth batter and ferment overnight.</li>
          <li>Spread on a hot pan and cook until crisp.</li>
          <li>Serve hot with coconut chutney and sambar.</li>
        </ol>
      </div>
    ),
  },
  "biryani": {
    title: "Biryani Recipe",
    image: biryaniImg,
    description: "A flavorful and aromatic rice dish cooked with spices and meat/vegetables.",
    details: (
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 cups basmati rice</li>
          <li>500g chicken or vegetables</li>
          <li>1 cup yogurt</li>
          <li>Whole spices (cloves, cardamom, bay leaf)</li>
          <li>1 large onion (sliced)</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Marinate chicken with yogurt and spices for 1 hour.</li>
          <li>Fry onions and cook marinated chicken.</li>
          <li>Layer with cooked rice and steam for 15 minutes.</li>
          <li>Serve hot with raita and salad.</li>
        </ol>
      </div>
    ),
  },
  "idli": {
    title: "Idli Recipe",
    image: idliImg,
    description: "A soft and fluffy South Indian steamed rice cake.",
    details: (
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 cups rice</li>
          <li>1 cup urad dal (black gram)</li>
          <li>1 teaspoon salt</li>
          <li>Water (as needed)</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Soak rice and dal separately for 6 hours.</li>
          <li>Grind them into a batter and ferment overnight.</li>
          <li>Pour into idli molds and steam for 10 minutes.</li>
          <li>Serve with chutney and sambar.</li>
        </ol>
      </div>
    ),
  }
};

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = recipes[id]; // Fetch the correct recipe details

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div className="recipe-details-container">
      <img src={recipe.image} className="recipe-details-img" alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div className="recipe-content">{recipe.details}</div>
    </div>
  );
};

export default RecipeDetails;
