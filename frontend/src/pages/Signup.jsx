import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import Notification from "../components/Notification";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] h-[520px] rounded-lg shadow-2xl shadow-[#000997] bg-white py-3 px-6">
        <div>
          <Heading label={"Signup"} />
          <div className="">
            <div className="mb-2">
              <Input
                label={"Username"}
                placeholder={"aman@gmail.com"}
                type={"text"}
                onChange={(e) => {
                  setUserName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <Input
                label={"First name"}
                placeholder={"Aman Kumar"}
                type={"text"}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <div className="mb-1">
              <Input
                label={"Last name"}
                placeholder={"Pandey"}
                type={"text"}
                onChange={(e) => {
                  setLastName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <div className="mb-1">
              <Input
                label={"Password"}
                placeholder={"Type your password here."}
                type={"password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div>
              <ButtonComponent
                label={"Signup"}
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      username,
                      firstname,
                      lastname,
                      password,
                    }
                  );
                  localStorage.setItem(
                    "token",
                    `Bearer ${response.data.token}`
                  );
                  console.log(response.data);
                  setValue(response);
                  setShowAlert(true);
                  setTimeout(() => {
                    navigate("/todos");
                  }, 1000);
                }}
              />
            </div>
            <div className="absolute top-5 right-[100px]">
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
            <div>
              <SubHeading value={"Already a user? Signin"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
