import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "@api/Api";
import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

export type GalleryPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  const response = await apiRequest<unknown, GalleryPhoto[]>({
    url: "photos?_limit=12",
    method: "GET",
  });

  return response.data;
};

export const Gallery = () => {
  const { data, isLoading, isError } = useQuery<GalleryPhoto[]>({
    queryKey: ["gallery-photos"],
    queryFn: fetchGalleryPhotos,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <div className="flex flex-col justify-between w-full gap-6 py-6 md:flex-row md:items-end md:gap-0">
        <div>
          <h1 className="text-4xl font-bold text-left text-slate-900 dark:text-slate-100">
            Gallery
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Thumbnails from the API.
          </p>
        </div>
      </div>

      {isError ? (
        <div className="flex items-center justify-center h-full px-6 py-24 text-center rounded-xl bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-200">
          <div>
            <p className="text-xl font-semibold">
              Could not load gallery photos.
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
                Loading gallery...
              </p>
            </div>
          }
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data?.map((photo) => (
              <article
                key={photo.id}
                className="overflow-hidden rounded-3xl border border-slate-300/80 bg-white/90 shadow-sm shadow-slate-200/80 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-950/80 dark:shadow-black/20"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
                <div className="p-5">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {photo.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </HandleRequestState>
      )}
    </div>
  );
};
