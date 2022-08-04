import React, { useContext, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { SafeArea } from "../../utils/SafeArea";
import { Map, SearchContainer } from "./maps.styles";
import { LocationContext } from "../../contexts/location.context";
import { RestaurantsContext } from "../../contexts/restaurants.context";
import MapView, { Callout, Marker } from "react-native-maps";
import { RestaurantDataResults } from "../../services/types/restaurant.types";
import CompactCard from "../../components/Cards/Card";

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
        {(restaurants as RestaurantDataResults[]).map(
          (restaurant: RestaurantDataResults) => {
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
                    onPress={navigation.navigate("Restaurant Details", {
                      restaurant,
                    })}
                  >
                    <CompactCard
                      key={restaurant.name}
                      name={restaurant.name}
                      photos={restaurant.photos}
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
