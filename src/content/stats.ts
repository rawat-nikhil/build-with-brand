import { Hourglass, Rocket, Smile, Users } from "lucide-react";

import type { Stat } from "@/types";

export const stats: Stat[] = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Rocket, value: "70+", label: "Projects Delivered" },
  { icon: Hourglass, value: "05+", label: "Years of Experience" },
  { icon: Smile, value: "100%", label: "Client Satisfaction" },
];
