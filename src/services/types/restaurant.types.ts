import { Camelize } from "camelize-ts";
import { GeometryData } from "./location.types";

interface OpeningHours {
  open_now: boolean;
}

export interface RestaurantDataResultsPhotos {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface RestaurantDataResults {
  business_status?: string;
  geometry: GeometryData | Camelize<GeometryData>;
  icon?: string;
  name: string;
  opening_hours?: OpeningHours | Camelize<OpeningHours>;
  photos:
    | RestaurantDataResultsPhotos[]
    | Camelize<RestaurantDataResultsPhotos[]>;
  place_id?: string;
  rating?: number;
  reference: string;
  user_ratings_total?: number;
  vicinity: string;
}

export type Restaurants =
  | RestaurantDataResults[]
  | undefined[]
  | Camelize<RestaurantDataResults[]>;

export interface RestaurantData {
  html_attributions: never[];
  next_page_token: string;
  results: RestaurantDataResults[] | Camelize<RestaurantDataResults[]>;
  status: string;
}
