"use client";

import React from "react";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { Call } from "iconsax-react";
import { Mail, Pentagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactHero = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  return (
    <section
      ref={HomePageRef}
      className={cn(
        "w-full font-poppins bg-white-300 py-16",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 py-8 text-center w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-medium font-poppins uppercase tracking-wide text-zinc-500 w-full">
          Get in Touch
        </h1>
        <p className="text-zinc-600 mb-8">
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 self-center">
          <div className="bg-white-200 rounded-lg shadow-lg p-6 w-64">
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-main p-4 rounded-full text-white-main">
                <Pentagon />
              </span>
            </div>
            <h2 className="font-semibold">Office</h2>
            <p className="text-zinc-600">Victoria Street, London, UK</p>
          </div>
          <div className="bg-white-200 rounded-lg shadow-lg p-6 w-64">
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-main p-4 rounded-full text-white-main">
                <Mail />
              </span>
            </div>
            <h2 className="font-semibold">Email</h2>
            <p className="text-zinc-600">hello@zarrin.com</p>
          </div>
          <div className="bg-white-200 rounded-lg shadow-lg p-6 w-64">
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-main p-4 rounded-full text-white-main">
                <Call />
              </span>
            </div>
            <h2 className="font-semibold">Phone</h2>
            <p className="text-zinc-600">(001) 2342 3451</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  return (
    <section
      ref={HomePageRef}
      className={cn(
        "w-full font-poppins bg-white-300 py-16 items-center justify-center relative",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div
        id="map"
        className="relative h-[300px] overflow-hidden  bg-cover bg-[50%] bg-no-repeat z-[-10]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="480"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-center w-full -mt-[100px]">
        <div className="self-center items-center bg-white-300 justify-center p-8 rounded-lg shadow-lg w-[80%] md:w-[60%]">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-9">
              <div className="relative">
                <input
                  id="contactname"
                  name="contactname"
                  type="text"
                  placeholder="John Doe"
                  className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
                />
                <label
                  htmlFor="contactname"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="(234) 123 456 789"
                  className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="subject"
                  className="peer h-12 w-full bg-transparent border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Subject
                </label>
              </div>
            </div>
            <div className="relative my-5">
              <textarea
                id="hs-floating-textarea-underline"
                className="peer py-4 px-0 block w-full bg-transparent border-t-transparent resize-none h-52 border-b-2 border-x-transparent border-b-gray-300 text-sm placeholder:text-transparent focus:outline-none focus:border-t-transparent focus:border-x-transparent focus:border-b-yellow-main focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
                placeholder="This is a textarea placeholder"
              />
              <label
                htmlFor="hs-floating-textarea-underline"
                className="absolute top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:text-xs
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-[:not(:placeholder-shown)]:text-xs
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Comment
              </label>
            </div>
            <Button
              type="button"
              className="items-center justify-center flex text-white-100 w-full text-center py-3"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { ContactHero, ContactForm };

// placehold.co
