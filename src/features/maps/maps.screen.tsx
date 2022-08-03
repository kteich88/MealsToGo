import React from "react";
import Search from "../../components/Search/Search";
import { SafeArea } from "../../utils/SafeArea";
import { Map, SearchContainer } from "./maps.styles";

export const MapsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Search placeholder={"Search for location..."} icon="map-marker" />
    </SearchContainer>
    <Map />
  </SafeArea>
);
