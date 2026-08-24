import { Clock, Mail, MapPin, Phone } from "lucide-react";

import type { ContactMethod } from "@/types";

export const contacts = {
  email: {
    icon: Mail,
    label: "Email Us",
    value: "hello@buildwithbrand.com",
    sub: "We reply within 24 hours",
  },
  phone: {
    icon: Phone,
    label: "Call Us",
    value: "+91 9870114941",
    sub: "Mon - Sun, 10:00 AM - 7:00 PM IST",
  },
  location: {
    icon: MapPin,
    label: "Location",
    value: "India",
    sub: "We're available worldwide",
  },
  hours: {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sun, 10:00 AM - 7:00 PM IST",
  },
} satisfies Record<string, ContactMethod>;

/** Delhi NCR viewport for the contact map. */
export const mapView = {
  center: { lat: 28.681675, lng: 77.362306 },
  zoom: 18,
} as const;
