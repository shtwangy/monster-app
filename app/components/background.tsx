import img from "./background.jpg";
import Image from "next/image";

export const Background = () => {
  return (
    <div className={"absolute inset-0"}>
      <Image src={img} alt={""} fill className={"object-cover object-center"} />
    </div>
  );
};
