import React, { useContext, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { SafeArea } from "../../utils/SafeArea";
import { Map, SearchContainer } from "./maps.styles";
import { LocationContext } from "../../contexts/location.context";
import { RestaurantsContext } from "../../contexts/restaurants.context";
import MapView, { Callout, Marker } from "react-native-maps";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";
import CompactCard from "../../components/Cards/Card";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MapsScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState<number>(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location]);

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
        {/* TODO: Need to figure out why the callout onPress is broken. */}
        {(restaurants as TransformedRestaurantDataResults[]).map(
          (restaurant: TransformedRestaurantDataResults) => {
            return (
              <MapView>
                <Marker
                  key={restaurant.name}
                  coordinate={{
                    latitude: restaurant.geometry.location.lat,
                    longitude: restaurant.geometry.location.lng,
                  }}
                >
                  <Callout
                  // onPress={navigation.navigate("Restaurant Details", {
                  //   restaurant: restaurant,
                  // })}
                  >
                    <CompactCard
                      key={restaurant.name}
                      name={restaurant.name}
                      photo={restaurant.photo}
                    />
                  </Callout>
                </Marker>
              </MapView>
            );
          },
        )}
      </Map>
    </SafeArea>
  );
};
