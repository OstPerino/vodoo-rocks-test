import $api from "@/api";

export async function fetchPosts() {
  return $api.get("/posts");
}
