import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../contexts/location.context";
import { SearchContainer } from "./Search.styles";

interface SearchProps {
  placeholder: string;
  icon?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder, icon }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        value={searchKeyword}
        icon={icon}
        placeholder={placeholder}
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
