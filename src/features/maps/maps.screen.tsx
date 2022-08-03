import React, { useContext, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { SafeArea } from "../../utils/SafeArea";
import { Map, SearchContainer } from "./maps.styles";
import { LocationContext } from "../../contexts/location.context";
import { RestaurantsContext } from "../../contexts/restaurants.context";
import MapView from "react-native-maps";

export const MapsScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <SafeArea>
      <SearchContainer>
        <Search placeholder={"Search for location..."} icon="map-marker" />
      </SearchContainer>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </SafeArea>
  );
};
