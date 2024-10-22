import baseApi from "@/redux/api/baseApi";

const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: ({ searchValue, priority }) => {
        const params = new URLSearchParams();

        if (searchValue) {
          params.append("searchTerm", searchValue);
        }

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: "/task",
          method: "GET",
          params,
        };
      },
      providesTags: ["todos"],
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),

    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/task/${id}`,
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
