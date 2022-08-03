import { Camelize } from "camelize-ts";

interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface TransformedLocation {
  lat: number;
  lng: number;
  viewport: Camelize<Viewport>;
}

export interface Geometry {
  geometry: GeometryData;
}

export interface GeometryData {
  location: Location;
  viewport: Viewport;
}

export interface LocationData {
  results: [Geometry];
  status?: string;
}
