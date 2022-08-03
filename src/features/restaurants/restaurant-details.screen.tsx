import React from "react";
import { SafeArea } from "../../utils/SafeArea";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";
import AccordionList from "../../components/Lists/AccordionList";
import breakfast from "../../services/mocks/menus/breakfast.json";
import lunch from "../../services/mocks/menus/lunch.json";
import dinner from "../../services/mocks/menus/dinner.json";
import drinks from "../../services/mocks/menus/drinks.json";

interface RestaurantDetailsScreenProps {
  route: any;
}

export const RestaurantDetailsScreen: React.FC<
  RestaurantDetailsScreenProps
> = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <Restaurant
        name={restaurant.name}
        photos={restaurant.photos}
        address={restaurant.address}
        isOpenNow={restaurant.isOpenNow}
        rating={restaurant.rating}
        isClosedTemporarily={restaurant.isClosedTemporarily}
      />
      <AccordionList menu={breakfast} />
      <AccordionList menu={lunch} />
      <AccordionList menu={dinner} />
      <AccordionList menu={drinks} />
    </SafeArea>
  );
};
