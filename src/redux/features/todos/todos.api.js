import baseApi from "@/redux/api/baseApi";

const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: ({ searchValue, priority, status }) => {
        const params = new URLSearchParams();

        if (searchValue) {
          params.append("searchTerm", searchValue);
        }

        if (priority) {
          params.append("priority", priority);
        }

        if (status) {
          params.append("status", status);
        }

        return {
          url: "/tasks",
          method: "GET",
          params,
        };
      },
      providesTags: ["todos"],
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),

    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useAddTodoMutation,
  useGetAllTodosQuery,
  useUpdateTodoMutation,
} = todosApi;
