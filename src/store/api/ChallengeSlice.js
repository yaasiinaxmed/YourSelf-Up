import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import baseURL from "./BaseUrl"
import Cookies from "js-cookie"

const getToken = () => {
    return Cookies.get("token")
}

export const challengeSlice = createApi({
    reducerPath: "challengeApi",
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
    tagTypes: ["challengeApi"],
    endpoints: (builder) => ({
        // get challenges
        getChallenges: builder.query({
            query: () => "/challenges",
            providesTags: ["challengeApi"]
        }),

        // create challenge
        createChallenge: builder.mutation({
            query: (newChallenge) => ({
                url: "/challenges/create",
                method: "POST",
                body: newChallenge
            }),
            invalidatesTags: ["challengeApi"]
        }), 

        // delete challenge
        deleteChallenge: builder.mutation({
            query: (id) => ({
                url: `/challenges/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["challengeApi"]
        })
    })
})

export const {useGetChallengesQuery, useCreateChallengeMutation, useDeleteChallengeMutation } = challengeSlice