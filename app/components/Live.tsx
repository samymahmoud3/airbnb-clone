import { liveData } from "../utils/data";
import LiveCard from "./LiveCard";
import MainHeading from "./MainHeading"

const Live = () => {
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title="Live AnyWhere" />
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {
            liveData.map((item) => (
              <LiveCard key={item.id} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Live