import { useEffect, useState } from "react";
import { useWindowContext } from "@context/WindowContext/WindowContext";

import { CurrentTime } from "@components/CurrentTime/CurrentTime";
import { BatteryLife } from "@components/BatteryLife/BatteryLife";
import { Icon } from "@components/shared/Icon/Icon";

export const MenuBar = () => {
  const { openWindow } = useWindowContext();
  const [isFullscreen, setIsFullscreen] = useState(
    Boolean(document.fullscreenElement),
  );

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    window.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      window.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn("Fullscreen toggle failed:", error);
    }
  };

  return (
    <div className="flex justify-between items-center px-2 w-full h-[25px] bg-grey text-black">
      <span
        onClick={() => openWindow("preference")}
        className="flex items-center gap-2 text-xs font-bold cursor-pointer"
      >
        <Icon icon="settings" />
        Preferences
      </span>
      <div className="flex items-center gap-2">
        <BatteryLife />
        <button
          type="button"
          onClick={toggleFullscreen}
          className="flex items-center justify-center w-6 h-6 text-[10px] font-semibold rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          ⛶
        </button>
        <CurrentTime />
      </div>
    </div>
  );
};
