import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  RepeatIcon,
  Mic2Icon,
  LayoutListIcon,
  Laptop2Icon,
  VolumeIcon,
  Maximize2Icon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* PRIMARY NAVIGATION  */}
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon /> Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <SearchIcon /> Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <LibraryIcon /> You Library
            </a>
          </nav>

          {/* SECONDARY NAVIGATION  */}
          <nav className="flex flex-col gap-2 mt-6 pt-6 border-t border-zinc-800 text-sm text-zinc-400">
            <a href="" className="hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="hover:text-zinc-100">
              Playlist 2
            </a>
            <a href="" className="hover:text-zinc-100">
              Playlist 3
            </a>
            <a href="" className="hover:text-zinc-100">
              Playlist 4
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeftIcon />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRightIcon />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afeternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong>Bersek Sound Track</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong>Bersek Sound Track</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong>Bersek Sound Track</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong>Bersek Sound Track</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong>Bersek Sound Track</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong>Bersek Sound Track</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-2xl mt-10">
            Made For Anderson Alves
          </h1>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong className="font-semibold">Bersek Sound Track</strong>
              <span className="text-xs text-zinc-400">
                Beserk, COIN, hirl, IN red and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong className="font-semibold">Bersek Sound Track</strong>
              <span className="text-xs text-zinc-400">
                Beserk, COIN, hirl, IN red and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong className="font-semibold">Bersek Sound Track</strong>
              <span className="text-xs text-zinc-400">
                Beserk, COIN, hirl, IN red and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong className="font-semibold">Bersek Sound Track</strong>
              <span className="text-xs text-zinc-400">
                Beserk, COIN, hirl, IN red and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa do álbum Bersek Original Soudtrack"
              />
              <strong className="font-semibold">Bersek Sound Track</strong>
              <span className="text-xs text-zinc-400">
                Beserk, COIN, hirl, IN red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <footer className="flex items-center justify-between bg-zinc-800 border-t border-zinc-700 p-6">
        <div className="flex items-center gap-3">
          <Image
            src="/album.jpg"
            width={56}
            height={56}
            alt="Capa do álbum Bersek Original Soudtrack"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Moon</strong>
            <span className="text-xs text-zinc-400">Bersek</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <ShuffleIcon size={20} className="text-zinc-200" />
            <SkipBackIcon size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto">
              <PlayIcon />
            </button>
            <SkipForwardIcon size={20} className="text-zinc-200" />
            <RepeatIcon size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-300 w-1 h-full rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mic2Icon size={20} />
          <LayoutListIcon size={20} />
          <Laptop2Icon size={20} />
          <div className="flex items-center gap-2">
            <VolumeIcon size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-300 w-10 h-full rounded-full"></div>
            </div>
          </div>
          <Maximize2Icon size={20}/>
        </div>
      </footer>
    </div>
  );
}
