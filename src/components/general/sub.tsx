"use client";

import React, { useState } from "react";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { Button } from "@ui/button";
import { useToast } from "../ui/use-toast";

interface body {
  status: number;
  message: string;
}

const Sub = () => {
  const [email, setEmail] = useState("");
  const [Status, setStatus] = useState("idle");
  const SubRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SubRef);
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!email) {
        setStatus("error");
      }
      setStatus("loading");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      });

      const body: body = await res.json();

      if (body.status === 201) {
        setEmail("");
        toast({
          title: "Thank you for subscribing.",
          description: "Watch out for our newssletter.",
        });
        setStatus("success");
      }
      if (body.status === 400) {
        setStatus("error");
        toast({
          title: "Sorry you already subscribed.",
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
    <div
      ref={SubRef}
      className={cn(
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 max-h-[534px] h-[388px] md:h-[327px] lg:h-[534px] flex items-center justify-center bg-yellow-main"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex flex-col w-full h-full items-center justify-center space-y-6 md:space-y-9">
        <p className="text-[24px] md:text-[32px] lg:text-[52px]  lg:leading-[52px] leading-7 font-poppins lg:w-[70%] font-bold text-center text-white-main">
          Get our stories delivered From us to your inbox weekly.
        </p>
        <form className="flex items-center">
          <input
            type="text"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="lg:w-[320px] w-[212px] rounded-md border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none"
          />
          <Button
            onClick={handleSubmit}
            disabled={Status === "loading"}
            className="lg:ml-4 ml-2 h-[40px] lg:h-[56px] w-[109px] lg:w-[166px]"
            variant={"outline"}
          >
            {Status === "loading"
              ? "Please wait"
              : Status === "success"
              ? "Success"
              : Status === "error"
              ? "Try again"
              : "Get Started"}
          </Button>
        </form>

        <p className="text-center text-base lg:w-[30%] text-white-main w-[80%]">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
    </div>
  );
};

export default Sub;

// 534, 327,  388, 32, 24
