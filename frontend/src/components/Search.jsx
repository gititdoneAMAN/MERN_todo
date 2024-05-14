export default function Search() {
  return (
    <div className="flex gap-3 pt-3">
      <div className="w-full">
        <input
          type="text"
          className="border-solid border-2 rounded-lg border-[#000997] hover:border-red-500 w-full pt-1 pb-2 px-2"
          placeholder="Search Todos."
        />
      </div>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
