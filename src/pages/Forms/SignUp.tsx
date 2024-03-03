// Reminder: Props to change between SignIn and SignUp

import { useSignUp } from "./useSignUp";

export function SignUpPage() {
  const hook = useSignUp();
  return (
    <div className="h-screen max-h-screen max-w-screen overflow-hidden flex items-center justify-center">
      <div className="flex items-center gap-8 h-[34rem] px-12 py-4 rounded-lg w-4/5 bg-turquoise-400 shadow-md shadow-turquoise-500">
        {hook.page}
      </div>
    </div>
  );
}
