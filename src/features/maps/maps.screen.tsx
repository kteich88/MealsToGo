import React, { useContext, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";
import { Map, SearchContainer } from "./maps.styles";
import { LocationContext } from "../../contexts/location.context";
import { RestaurantsContext } from "../../contexts/restaurants.context";
import MapView, { Callout, Marker } from "react-native-maps";
import { TransformedRestaurantDataResults } from "../../services/types/restaurant.types";
import CompactCard from "../../components/Cards/Card";
import { TouchableOpacity } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface MapsScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const MapsScreen: React.FC<MapsScreenProps> = ({ navigation }) => {
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
        {(restaurants as TransformedRestaurantDataResults[]).map(
          (restaurant: TransformedRestaurantDataResults) => {
            return (
              <MapView key={restaurant.name}>
                <Marker
                  key={restaurant.name}
                  coordinate={{
                    latitude: restaurant.geometry.location.lat,
                    longitude: restaurant.geometry.location.lng,
                  }}
                >
                  <Callout>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Restaurant Details", {
                          restaurant,
                        })
                      }
                    >
                      <CompactCard
                        key={restaurant.name}
                        name={restaurant.name}
                        photo={restaurant.photo}
                      />
                    </TouchableOpacity>
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
