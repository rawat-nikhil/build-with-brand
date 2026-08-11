import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

export type ContactMethod = {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
};

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
    sub: "Mon - Sat, 10:00 AM - 7:00 PM IST",
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
    value: "Mon - Sat, 10:00 AM - 7:00 PM IST",
    sub: "Sunday: Closed",
  },
} satisfies Record<string, ContactMethod>;
