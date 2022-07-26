import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { spacing } from "../../infrastructure/theme/spacing";

interface SearchProps {
  value: string;
}

const SearchContainer = styled(View)`
  padding: ${spacing.md};
`;

export const Search: React.FC<SearchProps> = ({ value }) => {
  return (
    <SearchContainer>
      <Searchbar value={value} />
    </SearchContainer>
  );
};

export default Search;
