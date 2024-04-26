import Image from "next/image";
import { LiveItem } from "../types/app"

type LiveCarsProps = LiveItem;

const LiveCard = ({img, title} :LiveCarsProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} alt={title} fill/>
      </div>
      <div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </div>
  )
}

export default LiveCard