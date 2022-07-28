interface RestaurantDataResultsPhotos {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface RestaurantDataResultsLocation {
  lat: number;
  lng: number;
}

export interface RestaurantDataResults {
  business_status?: string;
  geometry: {
    location: RestaurantDataResultsLocation;
    viewport: {
      northeast: RestaurantDataResultsLocation;
      southwest: RestaurantDataResultsLocation;
    };
  };
  icon?: string;
  name: string;
  opening_hours?: {
    open_now: boolean;
  };
  photos: RestaurantDataResultsPhotos[];
  place_id: string;
  rating?: number;
  reference: string;
  user_ratings_total?: number;
  vicinity: string;
}

export interface RestaurantDataType {
  html_attributions: never[];
  next_page_token: string;
  results: RestaurantDataResults[];
  status: string;
}
