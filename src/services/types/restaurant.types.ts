import { GeometryData } from "./location.types";

interface OpeningHours {
  open_now: boolean;
}

interface RestaurantDataResultsPhotos {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface RestaurantDataResults {
  business_status?: string;
  geometry: GeometryData;
  icon?: string;
  name: string;
  opening_hours?: OpeningHours;
  photos: RestaurantDataResultsPhotos[];
  place_id: string;
  rating?: number;
  reference: string;
  user_ratings_total?: number;
  vicinity: string;
}

export interface RestaurantData {
  html_attributions: never[];
  next_page_token: string;
  results: RestaurantDataResults[];
  status: string;
}
