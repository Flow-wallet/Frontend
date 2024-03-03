import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as Separator from "@radix-ui/react-separator";
import { PiCaretRightBold } from "react-icons/pi";
import { useSignUp } from "./useSignUp";
import { LoginForm } from "./LoginForm";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  const hook = useSignUp();

  function togglePassword() {
    switch (showPassword) {
      case "password":
        setShowPassword("text");
        break;
      case "text":
        setShowPassword("password");
        break;
      default:
        break;
    }
  }

  function toggleConfirmPassword() {
    switch (showConfirmPassword) {
      case "password":
        setShowConfirmPassword("text");
        break;
      case "text":
        setShowConfirmPassword("password");
        break;
      default:
        break;
    }
  }

  return (
    <>
      <form
        about="register"
        className="w-fit h-full py-14 flex flex-col gap-4 items-center"
      >
        <h1 className="font-urbanist font-bold text-2xl text-turquoise-800">
          Create an account
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Input.Clear
              id="displayName"
              label="Your name"
              placeholder="Your Name"
              required={true}
              type="text"
            />
            <Input.Clear
              id="username"
              label="Username"
              placeholder="@username"
              required={true}
              type="text"
            />
          </div>
          <Input.Clear
            id="email"
            label="Your e-mail"
            placeholder="youremail@email.com"
            required={true}
            type="email"
          />
          <div className="flex gap-2">
            <Input.Password
              label="Password"
              onClick={togglePassword}
              placeholder="Your password"
              type={showPassword}
              required={true}
              id="passWord"
            />
            <Input.Password
              label="Confirm Password"
              onClick={toggleConfirmPassword}
              placeholder="Confirm your password"
              type={showConfirmPassword}
              required={true}
              id="cPassWord"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 items-center">
          <Separator.Root className="bg-turquoise-600 w-10/12 h-px" />
          <Button.Base
            label="Create account"
            variant="primary"
            width="w-full"
            type="submit"
          />
          <div className="w-10/12 flex gap-2 items-center h-1">
            <Separator.Root className="bg-turquoise-600 w-full h-px" />
            <span className="text-nowrap text-turquoise-600 font-urbanist font-semibold text-xs w-full">
              Already has an account?
            </span>
            <Separator.Root className="bg-turquoise-600 w-full h-px" />
          </div>
          <Button.Base
            label="Sign In"
            variant="secondary"
            width="w-full"
            type="button"
            onClick={() => hook.setSignPage(<LoginForm />)}
          />
        </div>
      </form>
      <div className="flex flex-col gap-4 h-5/6 justify-center items-center">
        <Separator.Root className="w-px h-full bg-turquoise-600" />
        <span className="text-nowrap px-1.5 py-1 text-turquoise-600 border border-turquoise-600 font-urbanist rounded-lg font-semibold text-xs w-full hover:bg-turquoise-500 hover:text-turquoise-200 transition-all ease-linear cursor-default">
          or
        </span>
        <Separator.Root className="w-px h-full bg-turquoise-600" />
      </div>
      <div className="w-fit h-full py-14 flex flex-col gap-8 items-center">
        <h1 className="font-urbanist font-bold text-2xl text-turquoise-800">
          Enter with connection
        </h1>
        <div className="flex flex-col gap-4 w-80 h-full mb-16 justify-center items-center">
          <Button.LoginConnection label="Google" variant="google" />
          <Button.LoginConnection label="Facebook" variant="facebook" />
          <Button.LoginConnection label="Apple" variant="apple" />
        </div>
      </div>
      <div className="flex flex-col gap-4 h-5/6 justify-center items-center">
        <Separator.Root className="w-px h-full bg-turquoise-600" />
        <span className="text-nowrap px-1.5 py-1 text-turquoise-600 border border-turquoise-600 font-urbanist rounded-lg font-semibold text-xs w-full hover:bg-turquoise-500 hover:text-turquoise-200 transition-all ease-linear cursor-default">
          or
        </span>
        <Separator.Root className="w-px h-full bg-turquoise-600" />
      </div>
      <div className="flex flex-col w-1/12 items-center justify-center gap-2">
        <span className="text-xs font-urbanist font-medium text-turquoise-700 text-center">
          Continue with your account!
        </span>
        <Button.Icon
          label="Log In"
          icon={[<PiCaretRightBold />]}
          side="right"
          variant="secondary"
          width="w-full"
          type="button"
          onClick={() => hook.setSignPage(<LoginForm />)}
        />
      </div>
    </>
  );
}
