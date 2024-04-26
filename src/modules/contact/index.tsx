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
      <div className="max-w-5xl mx-auto px-4 py-8 text-center w-full">
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
        "w-full font-poppins bg-white-300 py-16 relative flex items-center justify-center",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="self-center items-center justify-center bg-white-200 p-8 rounded-lg shadow-lg w-[80%] md:w-[60%]">
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-9">
            <div className="relative">
              <input
                id="contactname"
                name="contactname"
                type="text"
                placeholder="John Doe"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
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
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
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
                type="number"
                placeholder="(234) 123 456"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
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
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-yellow-main"
              />
              <label
                htmlFor="subject"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
    </section>
  );
};

export { ContactHero, ContactForm };

export function Widget() {
  return (
    <div className="bg-zinc-900 relative">
      <img
        src="https://placehold.co/767x574"
        alt="Map Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-96">
        <form action="#" method="POST">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-zinc-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
