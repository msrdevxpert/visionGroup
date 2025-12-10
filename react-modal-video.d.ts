// react-modal-video.d.ts
declare module "react-modal-video" {
  import { ComponentType } from "react";

  interface ModalVideoProps {
    channel: "youtube" | "vimeo" | "custom";
    videoId: string;
    isOpen: boolean;
    onClose: () => void;
    youtube?: {
      autoplay?: 0 | 1;
      mute?: 0 | 1;
    };
    vimeo?: {
      autoplay?: 0 | 1;
    };
  }

  const ModalVideo: ComponentType<ModalVideoProps>;
  export default ModalVideo;
}
