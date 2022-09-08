import { IconProps } from "components/Icon/Icon";
import { useEffect, useState } from "react";

const useIngredients = () => {
  const [ingredientAmount, setIngredientAmount] = useState<number>(0);
  const [ingredientIcon, setIngredientIcon] = useState<IconProps>({
    type: "",
    name: undefined,
  });
  const [ingredientLocation, setIngredientLocation] = useState<string>("");
  const [ingredientName, setIngredientName] = useState<string>("");

  useEffect(() => {
    setIngredientAmount(ingredientAmount);
  }, [ingredientAmount]);

  useEffect(() => {
    setIngredientIcon(ingredientIcon);
  }, [ingredientIcon]);

  useEffect(() => {
    setIngredientLocation(ingredientLocation);
  }, [ingredientLocation]);

  useEffect(() => {
    setIngredientName(ingredientName);
  }, [ingredientName]);
};

export default useIngredients;
