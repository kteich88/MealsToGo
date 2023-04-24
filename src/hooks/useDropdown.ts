import { useState } from "react";
import { IngredientLocation } from "screens/ingredients/constants";

const useDropdown = () => {
  const [selected, setSelected] = useState(false);
  const [selection, setSelection] = useState<string>(
    IngredientLocation.Freezer,
  );

  return {
    selected,
    setSelected,
    selection,
    setSelection,
  };
};

export default useDropdown;
