import "atropos/css";

// import Atropos component
import Atropos from "atropos/react";

export default function Avatar() {
  return (
    <div id="app" className="">
      <Atropos
        className="my-atropos w-[360px] h-[360px] relative rounded-full overflow-hidden bg-cover bg-black"
        shadow={false}
        highlight={false}
      >
        <img
          src="../../public/imgs/avatar/imagen-bg.jpg"
          className="absolute w-full h-full"
          data-atropos-offset="-5"
        />
        <img
          src="../../public/imgs/avatar/image-middle.png"
          className="absolute object-fill"
          data-atropos-offset="0"
        />
      </Atropos>
    </div>
  );
}
