import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import baseURL from "./BaseUrl";
import Cookies from "js-cookie";

const setToken = (token) => {
    Cookies.set("token", token, {expires: 360})
}

export const authSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL
    }),
    tagTypes: ["authApi"],
    endpoints: (builder) => ({
        // Continue with google
        googleAuth: builder.mutation({
            query: (dataUser) => ({
                url: "/auth/googleAuth",
                method: "POST",
                body: dataUser
            }),
           invalidatesTags: ["authApi"],
           onQueryStarted: async (arg, {queryFulfilled}) => {
            try {
                const result = await queryFulfilled
                setToken(result.data.token)
            } catch (error) {
                console.log("Google Auth Error:", error)
            }
           }
        })
    })
})

export const {useGoogleAuthMutation} = authSlice