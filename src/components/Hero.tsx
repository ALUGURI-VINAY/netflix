export default function Hero() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-full -z-10">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        Unlimited movies, TV shows, and more
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        Watch anywhere. Cancel anytime.
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-netflix-red hover:bg-[#f40612]">
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info
        </button>
      </div>
    </div>
  )
}