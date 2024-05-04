"use client";

import useInView from "@/hooks/useInView";
import React from "react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { admin } from "@prisma/client";
import { useRouter } from "next/navigation";

interface body {
  status: number;
  message: string;
  user: admin;
}

const Login = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  const { toast } = useToast();
  const [Status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState({
    name: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("loading");
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const body: body = await res.json();
      if (body.status === 200) {
        toast({
          title: "Welcome",
          description: "Login sucessful",
        });
        setStatus("success");
        localStorage.setItem("admin", JSON.stringify(body.user));
        router.push("/dashboard");
        setData({
          name: "",
          password: "",
        });
      }
      if (body.status === 400) {
        setStatus("error");
        toast({
          title: "All feilds are required.",
          description: body.message,
        });
      }
      if (body.status === 401) {
        setStatus("error");
        toast({
          title: "invalid details.",
          description: body.message,
        });
      }
    } catch (e: any) {
      setStatus("error");
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <section
      ref={HomePageRef}
      className={cn(
        "w-full font-poppins bg-white-300 items-center py-[100px] justify-center relative",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex items-center justify-center w-full">
        <div className="self-center items-center bg-white-300 justify-center p-8 rounded-lg shadow-lg w-[80%] md:w-[60%]">
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-9">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
            </div>
            <Button
              type="submit"
              className="items-center justify-center flex text-white-100 w-full text-center py-3 mt-10"
            >
              {Status === "loading"
                ? "Please wait"
                : Status === "success"
                ? "Success"
                : Status === "error"
                ? "Try again"
                : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Login };
