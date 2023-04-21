import { useState } from "react";

const useDropdown = () => {
  const [selected, setSelected] = useState(false);
  const [selection, setSelection] = useState<string>("Make a selection");

  return {
    selected,
    setSelected,
    selection,
    setSelection,
  };
};

export default useDropdown;
