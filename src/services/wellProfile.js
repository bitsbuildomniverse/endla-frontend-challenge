import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HTTP_PATH } from "../settings/apihost";

export const wellProfileApi = createApi({
  reducerPath: "wellProfile",
  baseQuery: fetchBaseQuery({
    baseUrl: HTTP_PATH + "/api/",
  }),
  endpoints: (builder) => ({
    getWellProfileData: builder.query({
      query: (wellName) => `wellprofile?name=${wellName}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWellProfileDataQuery } = wellProfileApi;
