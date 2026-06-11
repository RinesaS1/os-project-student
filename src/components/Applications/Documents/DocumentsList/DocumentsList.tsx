import { useDocumentsContext } from "@context/DocumentsContext/DocumentsContext";

import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

import { DocumentsListItem } from "./DocumentsListItem";

export const DocumentsList = () => {
  const { activeList } = useDocumentsContext();

  return (
    <div className="box-border self-stretch flex-1 h-full pt-8 pl-3 pr-5">
      <HandleRequestState
        state={activeList === null || activeList.length === 0}
        placeholder={
          <div className="flex items-center justify-center h-full">
            <p className="text-lg font-semibold">
              No documents found, please add them from the sidebar!
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activeList?.map(document => (
            <DocumentsListItem key={document.id} {...document} />
          ))}
        </div>
      </HandleRequestState>
    </div>
  );
};
