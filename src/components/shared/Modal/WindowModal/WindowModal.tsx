import { DefaultModal } from "../DefaultModal/DefaultModal";
import { WindowType } from "@context/WindowContext/WindowContext";

import { Camera } from "@components/Applications/Camera/Camera";
import { Browser } from "@components/Applications/Browser/Browser";
import { Documents } from "@components/Applications/Documents/Documents";
import { Gallery } from "@components/Applications/Gallery/Gallery";
import { News } from "@components/Applications/News/News";
import { Preferences } from "@components/Applications/Preferences/Preferences";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  component: WindowType | null;
}

const WindowComponents: { [key in WindowType]: React.FunctionComponent<{}> } = {
  news: News,
  camera: Camera,
  browser: Browser,
  gallery: Gallery,
  folder: Documents,
  preference: Preferences,
};

export const WindowModal = ({ isVisible, onClose, component }: Props) => {
  const Component = component ? WindowComponents[component] : () => <></>;

  return (
    <DefaultModal isVisible={isVisible} onClose={onClose}>
      <div className="flex w-full h-full max-h-[800px] max-w-[1400px]">
        <div className="flex flex-col w-full h-full overflow-hidden bg-[#c0c9d1] rounded-xl">
          <div className="w-full h-5 px-[6px] flex items-center justify-end">
            <div
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
              onClick={onClose}
            ></div>
          </div>
          <Component />
        </div>
      </div>
    </DefaultModal>
  );
};
