import type { Metadata } from "next";

import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Contact — Build With Brand",
  description:
    "Have a project in mind or just want to say hi? We'd love to hear from you.",
};

export const quickContacts = [contacts.email, contacts.phone, contacts.location];
export const otherWays = Object.values(contacts);
