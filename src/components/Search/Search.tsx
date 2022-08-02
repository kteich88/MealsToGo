import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../contexts/location.context";
import { SearchContainer } from "./Search.styles";

export const Search: React.FC = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  return (
    <SearchContainer>
      <Searchbar
        value={searchKeyword}
        placeholder={"Search for location..."}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
