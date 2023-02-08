
import {BaseQueryApi, createApi, EndpointDefinitions, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) =>({

        getTodos: builder.query({
            query: ()=> '/todos'
        }),

        getTodo: builder.query({
            query: (todoId)=> `/todos/${todoId}`
        })
    })

})


// Se crea el custom hook de acuerdo al enpoint utilizado
export const { useGetTodosQuery, useGetTodoQuery} = todosApi;