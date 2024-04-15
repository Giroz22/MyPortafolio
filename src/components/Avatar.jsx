import "atropos/css";

// import Atropos component
import Atropos from "atropos/react";

export default function Avatar() {
  return (
    <div id="app" className="basis-1/2 flex justify-center">
      <div className="rounded-full overflow-hidden w-[340px] h-[340px]">
        <Atropos
          className="my-atropos w-full h-full relative"
          shadow={false}
          highlight={false}
        >
          <img
            src="../../public/imgs/avatar/imagen-bg.jpg"
            className="absolute bottom-0 w-full h-full rounded-full overflow-hidden"
            data-atropos-offset="-5"
          />
          <img
            src="../../public/imgs/avatar/tierra.png"
            className="absolute bottom-0 w-full h-full"
            data-atropos-offset="-3"
          />
          <img
            src="../../public/imgs/avatar/image-middle.png"
            className="absolute"
            data-atropos-offset="0"
          />
        </Atropos>
      </div>
    </div>
  );
}
