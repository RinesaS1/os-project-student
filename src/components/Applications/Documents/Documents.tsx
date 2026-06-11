import { DocumentsContextProvider } from "@context/DocumentsContext/DocumentsContextProvider";

import { DocumentsList } from "./DocumentsList/DocumentsList";
import { DocumentsForm } from "./DocumentsForm/DocumentsForm";
import { DocumentsHeader } from "./DocumentsHeader/DocumentsHeader";

export const Documents = () => {
  return (
    <DocumentsContextProvider>
      <DocumentsHeader />
      <div className="flex flex-col items-center h-full md:items-stretch md:flex-row">
        <DocumentsList />
        <DocumentsForm />
      </div>
    </DocumentsContextProvider>
  );
};
