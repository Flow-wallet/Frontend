import { ReactNode, useState } from "react";
import { RegisterForm } from "./RegisterForm";

export function useSignUp() {
  const [page, setPage] = useState<ReactNode>(<RegisterForm />);

  async function setSignPage(page: ReactNode) {
    setPage(page);
  }

  return { page, setSignPage };
}
