import {
  StorageDocument,
  useDocumentsContext,
} from "@context/DocumentsContext/DocumentsContext";

import { Icon } from "@components/shared/Icon/Icon";

export const DocumentsListItem = (props: StorageDocument) => {
  const { onEdit, onDelete, onSelect } = useDocumentsContext();

  return (
    <div className="group border-2 min-w-[185px] rounded-xl h-12 overflow-hidden  border-slate-500 px-3 flex items-center justify-between box-border">
      <div
        onClick={() => {
          if (props.type === "folder") {
            onSelect(props.id);
          }
        }}
        className="flex items-center flex-1 cursor-pointer"
      >
        <Icon
          className="w-5 mr-2"
          icon={props.type === "folder" ? "folder" : "file"}
        />
        <h3>{props.name}</h3>
      </div>
      <div className="flex opacity-0 gap-x-2 group-hover:opacity-100">
        <Icon
          icon="edit"
          onClick={() => {
            onEdit(props);
          }}
          className="w-3 cursor-pointer"
        />

        <Icon
          icon="trash"
          className="w-3 cursor-pointer"
          onClick={() => onDelete(props.id)}
        />
      </div>
    </div>
  );
};
