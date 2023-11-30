import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import baseURL from "./BaseUrl"
import Cookies from "js-cookie"

const getToken = () => {
    return Cookies.get("token")
}

export const userSlice = createApi({
    reducerPath: "userApi", 
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL, 
        prepareHeaders: (headers) => {
            const token = getToken()

            if(token) {
                headers.set("Authorization", `Bearer ${token}`)
            }

            return headers
        }
    }),
    tagTypes: ["userApi"],
    endpoints: (builder) => ({
        // get user
        getUser: builder.query({
            query: () => '/user',
            providesTags: ["userApi"]
        })
    })
})

export const {useGetUserQuery} = userSlice