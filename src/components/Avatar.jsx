import "atropos/css";

// import Atropos component
import Atropos from "atropos/react";

export default function Avatar() {
  return (
    <div id="app" className="rounded-full overflow-hidden">
      <Atropos
        className="my-atropos w-[360px] h-[360px] relative"
        shadow={false}
        highlight={false}
      >
        <img
          src="../../public/imgs/avatar/imagen-bg.jpg"
          className="absolute bottom-0 w-full h-full rounded-full overflow-hidden"
          data-atropos-offset="-3"
        />
        <img
          src="../../public/imgs/avatar/tierra.png"
          className="absolute bottom-0 w-full h-full"
          data-atropos-offset="-1"
        />
        <img
          src="../../public/imgs/avatar/image-middle.png"
          className="absolute"
          data-atropos-offset="0"
        />
      </Atropos>
    </div>
  );
}
