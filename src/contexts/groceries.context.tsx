export {};
// import React, { useState, createContext } from "react";
// import { groceryListRequest } from "../services/mocks/groceries/groceries.service";
// import { GroceryListItem } from "../utils/types/grocery.types";

// interface GroceriesContext {
//   groceries: GroceryListItem[];
//   isLoading: boolean;
//   error: string | null;
// }

// export const GroceriesContext = createContext<GroceriesContext>(
//   {} as GroceriesContext,
// );

// export const GroceriesContextProvider: React.FC = ({ children }) => {
//   const [groceries, setGroceries] = useState<GroceryListItem[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>();

//   const searchGroceryList = (grocery: string) => {
//     setIsLoading(true);
//     groceryListRequest(grocery)
//       .then((results) => {
//         setGroceries(results);
//         setIsLoading(false);
//       })
//       .catch((e) => {
//         setError(e);
//         setIsLoading(false);
//       });
//   };

//   return (
//     <GroceriesContext.Provider
//       value={{
//         groceries,
//         isLoading,
//         error,
//       }}
//     >
//       {children}
//     </GroceriesContext.Provider>
//   );
// };
