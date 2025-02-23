// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../Utils/baseUrl"; 

// interface IPost {
//   id: number;
//   user_id: number;
//   main_text: string;
// }

// interface ICreatePostPayload {
//   user_id: number;
//   main_text: string;
// }

// interface IUpdatePostPayload {
//   post_id: number;
//   new_text: string;
// }

// interface IDeletePostPayload {
//   post_id: number;
// }

// interface IGetPostsResponse {
//   status: number;
//   posts: IPost[];
// }

// export const postApi = createApi({
//   reducerPath: "postApi",
//   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
//   endpoints: (builder) => ({
//     getPosts: builder.query<IGetPostsResponse, number | void>({
//       query: (postId) => (postId ? `/posts/${postId}` : '/posts'),
//     }),
//     createPost: builder.mutation<IPost, ICreatePostPayload>({
//       query: (payload) => ({
//         url: '/posts',
//         method: 'POST',
//         body: payload,
//       }),
//     }),
//     updatePost: builder.mutation<IPost, IUpdatePostPayload>({
//       query: ({ post_id, new_text }) => ({
//         url: `/posts/${post_id}`,
//         method: 'PUT',
//         body: { new_text },
//       }),
//     }),
//     deletePost: builder.mutation<void, IDeletePostPayload>({
//       query: ({ post_id }) => ({
//         url: `/posts/${post_id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetPostsQuery,
//   useCreatePostMutation,
//   useUpdatePostMutation,
//   useDeletePostMutation,
// } = postApi;

interface IGetPostsResponse {
  status: number;
  message: [
    {
      main_text: string;
      user_id: number;
      id: number;
      reg_date: string;
      user_fk: {
        user_city: string;
        phone_number: string;
        reg_date: string;
        email: string;
        id: number;
        name: string;
        password: string;
      };
      photos: string[];
      comments: string[];
    }
  ]
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Utils/baseUrl";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostsResponse, null>({
      query: () => `/post`,
    })
  })
})

export const {useGetPostListQuery, useLazyGetPostListQuery} = postApi;
