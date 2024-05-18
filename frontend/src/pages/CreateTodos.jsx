import Input from "../components/Input";
import TextAreaComponent from "../components/TextAreaComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";

export default function CreateTodos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const iconRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
    const icon = iconRef.current;

    function handleClick() {
      navigate("/todos");
    }

    if (iconRef) {
      icon.addEventListener("click", handleClick);
    }

    return () => {
      if (iconRef) {
        icon.removeEventListener("click", handleClick);
      }
    };
  }, []);

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
              ref={iconRef}
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
                setValue(response);
                setShowAlert(true);
                setTimeout(() => {
                  navigate("/todos");
                }, 2000);
              }}
            />
          </div>
          <div className="absolute top-4 left-[600px]">
            {showAlert ? (
              <Notification
                data={value != "" ? value.data.msg : value}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
