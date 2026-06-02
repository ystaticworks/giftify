import heroVideo from "../assets/hero2.mp4";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Heart,
  House,
  MoreHorizontalIcon,
  Play,
  Search,
  UsersRound,
  Volume2,
  X,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 text-neutral-300">
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-black/30">
            <MoreHorizontalIcon size={20} />
          </button>
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-black/30">
            <ChevronLeft size={20} />
          </button>
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-black/30">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex w-sm items-center gap-2">
          <button className="rounded-full bg-black/30 p-2">
            <House size={20} />
          </button>
          <div className="relative w-full max-w-2xl">
            <Search
              size={22}
              className="absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-full bg-black/30 px-4 py-2 pl-12 text-sm outline-none"
            />
            <div className="absolute top-1/2 right-12 -translate-y-1/2">
              <div className="h-4 w-[1px] bg-neutral-500" />
            </div>
            <Heart
              size={22}
              className="absolute top-1/2 right-3 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-black/30">
            <Bell size={20} />
          </button>
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-black/30">
            <UsersRound size={20} />
          </button>
          <div className="h-6 w-6 overflow-hidden rounded-full">
            <img
              src="https://i.pinimg.com/736x/45/97/6c/45976c6c3a934136e3bee9008e5aff59.jpg"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-black/30">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex h-screen p-20">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md bg-white">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.AH2jTK4GdlfUtY7v9nqPiAHaMB?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="album cover"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl font-black tracking-tight text-white">
                Soul Parade
              </h2>
              <p className="text-xl font-medium text-neutral-400">
                Exclusive Birthday Release · A New Chapter By Nabila Nurfaiza
              </p>
            </div>
          </div>

          <div className="mt-auto flex w-full items-end gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-neutral-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <button className="flex w-fit items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors duration-200">
                <Volume2 size={18} />
                <span>Preview</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-neutral-300">
                <MoreHorizontalIcon size={30} />
              </button>
              <button className="text-neutral-300">
                <CirclePlus size={30} />
              </button>
              <button className="rounded-full bg-emerald-600 p-4 text-black">
                <Play size={30} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
