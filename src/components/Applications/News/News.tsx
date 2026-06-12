import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "@api/Api";
import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

export type NewsComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const fetchNewsComments = async (): Promise<NewsComment[]> => {
  const response = await apiRequest<unknown, NewsComment[]>({
    url: "comments?_limit=10",
    method: "GET",
  });

  return response.data;
};

export const News = () => {
  const { data, isLoading, isError } = useQuery<NewsComment[]>({
    queryKey: ["news-comments"],
    queryFn: fetchNewsComments,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <div className="flex flex-col justify-between w-full gap-6 py-6 md:flex-row md:items-end md:gap-0">
        <div>
          <h1 className="text-4xl font-bold text-left text-slate-900 dark:text-slate-100">
            News
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Latest comments from the API.
          </p>
        </div>
      </div>

      {isError ? (
        <div className="flex items-center justify-center h-full px-6 py-24 text-center rounded-xl bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-200">
          <div>
            <p className="text-xl font-semibold">
              Could not load news comments.
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Please check your connection and refresh the app.
            </p>
          </div>
        </div>
      ) : (
        <HandleRequestState
          state={isLoading}
          placeholder={
            <div className="flex items-center justify-center h-full px-6 py-24">
              <p className="text-xl font-semibold text-slate-900 dark:text-slate-200">
                Loading comments...
              </p>
            </div>
          }
        >
          <div className="grid gap-4">
            {data?.map((comment) => (
              <article
                key={comment.id}
                className="rounded-3xl border border-slate-300/80 bg-white/90 p-6 shadow-sm shadow-slate-200/80 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-950/80 dark:shadow-black/20"
              >
                <div className="flex flex-col gap-2 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {comment.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {comment.email}
                  </p>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                  {comment.body}
                </p>
              </article>
            ))}
          </div>
        </HandleRequestState>
      )}
    </div>
  );
};
