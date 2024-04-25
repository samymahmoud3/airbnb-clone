import { exploreData } from "../utils/data";
import ExploreCard from "./ExploreCard"

const Explore = async () => {
  
  return (
    <section className="pt-6">
      <div className="container">
        <h2 className="text-4xl font-semibold mb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            exploreData.map((item) => (
              <ExploreCard key={item.id} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Explore