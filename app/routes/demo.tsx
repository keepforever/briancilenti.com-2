import type { Route } from "./+types/demo";
import { Outlet } from "react-router";

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Brian Cilenti | Demos" },
    {
      name: "description",
      content:
        "Some demos of various react/styling/dom concepts by Brian Cilenti. Includes a video clip demo and more.",
    },
  ];
}

export default function Demo() {
  return (
    <div className="flex flex-col gap-4">
      <Outlet />
    </div>
  );
}
