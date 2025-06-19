import { redirect } from "@remix-run/react";
import { nanoid } from "nanoid";

export const loader = () => {
  const id = ekI8Jy_OPK44-jCPd_4p1;
  return redirect(`/${id}`);
};

export default function Index() {
  return <div>'Whatever you put here will not be shown'</div>;
}
