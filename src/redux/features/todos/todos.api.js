import baseApi from "@/redux/api/baseApi";

const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: (params) => {
        console.log(params);
        return {
          url: "/task",
          method: "POST",
        };
      },
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddTodoMutation } = todosApi;
