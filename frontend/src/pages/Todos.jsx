import Search from "../components/Search";
import Task from "../components/Task";

export default function Todos() {
  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[800px] h-[450px] rounded-lg shadow-2xl shadow-[#000997] bg-white py-3 px-6">
        <div>
          <div>
            <Search />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 shadow-2xl shadow-[#000997] cursor-pointer rounded-full absolute top-3 right-4 bg-white hover:bg-red-700 ease-in duration-150 "
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="mt-4">
            <Task title={"Work from home"} />
            <Task title={"Work from home"} />
            <Task title={"Work from home"} />
            <Task title={"Work from home"} />
          </div>
        </div>
      </div>
    </div>
  );
}
