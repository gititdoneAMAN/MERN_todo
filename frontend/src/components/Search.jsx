import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const iconRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const icon = iconRef.current;

    function handleClick() {
      navigate("/createtodos");
    }

    if (iconRef) {
      icon.addEventListener("click", () => {
        navigate("/createtodos");
      });
    }

    return () => {
      if (iconRef) {
        icon.removeEventListener("click", handleClick);
      }
    };
  }, []);

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
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 rounded-full hover:bg-red-700 ease-in duration-150"
            ref={iconRef}
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
