import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] ">
      <Image
        src='/banner.jpg'
        alt="banner-img"
        className="object-cover object-left"
        fill
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          type="button"
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-5"
        >
          I am flexible
        </button>
      </div>
    </div>
  )
}

export default Banner