"use client";

import { AdvancedMarker, APIProvider, ColorScheme, Map } from "@vis.gl/react-google-maps";
import { MapPin } from "lucide-react";

import { mapView } from "@/content/contacts";
import "./map-placeholder.scss";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID";

function MapPinMarker() {
  return (
    <>
      <span className="map-placeholder__pin-pulse" />
      <span className="map-placeholder__pin">
        <MapPin className="map-placeholder__pin-icon" />
      </span>
    </>
  );
}

function MapFallback() {
  return (
    <div className="map-placeholder">
      <div className="map-placeholder__pin-wrapper">
        <MapPinMarker />
      </div>
    </div>
  );
}

export function MapPlaceholder() {
  if (!apiKey) {
    return <MapFallback />;
  }

  return (
    <div className="map-placeholder">
      <APIProvider apiKey={apiKey} libraries={["marker"]}>
        <Map
          className="map-placeholder__map"
          mapId={mapId}
          defaultCenter={mapView.center}
          defaultZoom={mapView.zoom}
          colorScheme={ColorScheme.DARK}
          gestureHandling="greedy"
          disableDefaultUI
        >
          <AdvancedMarker position={mapView.center}>
            <span className="map-placeholder__pin-cluster">
              <MapPinMarker />
            </span>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}
