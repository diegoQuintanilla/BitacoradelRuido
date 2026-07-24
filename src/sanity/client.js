import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "3uyluxnt",
  dataset: "production",
  apiVersion: "2026-07-22",
  useCdn: false,
});