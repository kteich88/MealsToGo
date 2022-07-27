import React from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./Search.styles";
interface SearchProps {
  value: string;
}

export const Search: React.FC<SearchProps> = ({ value }) => {
  return (
    <SearchContainer>
      <Searchbar value={value} />
    </SearchContainer>
  );
};

export default Search;
