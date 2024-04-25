export function Widget() {
  return (
    <div className="max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-zinc-800">
      <img
        className="w-full h-56 object-cover object-center"
        src="https://placehold.co/600x400"
        alt="VR Technology"
      />

      <div className="p-6">
        <div className="flex items-center text-blue-600 dark:text-blue-400">
          <span className="text-xs font-medium uppercase">Development</span>
          <span className="mx-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            •
          </span>
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            16 March 2023
          </span>
        </div>

        <h2 className="mt-2 text-2xl font-bold text-zinc-800 dark:text-white">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it&apos;s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we&apos;re committed to
          making AI accessible to everyone.
        </p>

        <div className="mt-4">
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

function Widget2() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="https://placehold.co/512x300"
            alt="VR Technology"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="text-sm text-zinc-500">
            DEVELOPMENT | 16 March 2023
          </div>
          <h2 className="text-xl font-bold mt-2">
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p className="text-zinc-700 mt-2">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it&apos;s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we&apos;re committed
            to making AI accessible to everyone.
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
