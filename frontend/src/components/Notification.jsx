export default function Notification({ data, showAlert, setShowAlert }) {
  setTimeout(() => {
    setShowAlert(false);
  }, 5000);

  return (
    <div className="bg-[#000517]">
      <div className="flex gap-1">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 rounded-full bg-[#f2ebda] "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div>
          <div className="font-bold text-white">{data}</div>
        </div>
      </div>
    </div>
  );
}
