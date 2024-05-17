import Input from "../components/Input";
import TextAreaComponent from "../components/TextAreaComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useState } from "react";
import axios from "axios";

export default function CreateTodos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[500px] h-[420px] rounded-lg shadow-2xl shadow-[#000997] bg-white py-3 px-6">
        <div>
          <div>
            <Input
              label={"Title"}
              placeholder={"Enter the Title here"}
              type={"text"}
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 absolute top-[60px] right-[330px] rounded-full bg-white hover:bg-red-700 ease-in duration-150 cursor-pointer"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="mt-3">
            <TextAreaComponent
              label={"Description"}
              placeholder={"Enter the description here"}
              onChange={(e) => {
                setDescription(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div>
            <ButtonComponent
              label={"Add Todo"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/createTodo",
                  {
                    title,
                    description,
                  },
                  {
                    headers: {
                      authorization: localStorage.getItem("token"),
                    },
                  }
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
