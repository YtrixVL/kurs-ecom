import type { Load } from "@sveltejs/kit";

export const load: Load = async (event) => {
  const response = await event.fetch("/v1/auth");
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const user = await response.json();

    if (!user.user_id) {
      return {
        status: 401,
        message: "Неавторизовано",
      };
    }

    return {
      props: {
        user,
      },
    };
  } else {
    return {
      status: 500,
      message: "Invalid response format (not JSON)",
      content_type: contentType,
    };
  }
};
