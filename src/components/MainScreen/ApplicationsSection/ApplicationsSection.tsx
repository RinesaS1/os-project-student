import { useWindowContext } from "@context/WindowContext/WindowContext";

import { Application } from "@components/Applications/Application";
import { applications } from "@pages/MainScreen/lib/applications";

export const ApplicationsSection = () => {
  const { openWindow } = useWindowContext();

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-wrap justify-center gap-x-7">
        {applications.map(item => (
          <Application
            {...item}
            key={`${item.name}-${item.icon}`}
            onDoubleClick={() => {
              openWindow(item.type);
            }}
          />
        ))}
      </div>
    </div>
  );
};
