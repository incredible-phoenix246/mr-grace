"use client";

import React, { useState, useEffect } from "react";
import { CldUploadButton } from "next-cloudinary";
import { Tiptap } from "@ui/texteditor";
import { Button } from "@ui/button";
import { Uploadresult } from "@/types";
import Image from "next/image";
import { cn } from "@/utils";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface BlogContent {
  title: string;
  desc: string;
  src: string;
  others?: any;
  cart: string;
  links?: Link[];
  draft: boolean;
  isvideo: boolean;
  quote?: string;
}

interface Link {
  platform: string;
  url: string;
}

interface body {
  status: number;
  message: string;
}

const CreatePostForm = () => {
  const [draft, setDraft] = useState(false);
  const [postData, setPostdata] = useState<BlogContent>({
    title: "",
    desc: "",
    isvideo: false,
    src: "",
    cart: "",
    draft: false,
    links: [
      {
        platform: "",
        url: "",
      },
    ],
    others: "",
  });
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [result, setResult] = useState<Uploadresult | null>(null);
  const [status, setStatus] = useState("idle");
  const handleContentChange = (reason: any) => {
    setPostdata({
      ...postData,
      desc: reason,
    });
  };
  const { toast } = useToast();

  const Createpost = async (isDraft: boolean) => {
    if (isDraft) {
      postData.draft = true;
    }
    try {
      setStatus(isDraft ? "saving" : "loading");
      const res = await fetch("/api/createblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const body: body = await res.json();
      if (body.status === 200) {
        setPostdata({
          title: "",
          desc: "",
          isvideo: false,
          src: "",
          cart: "",
          draft: false,
          links: [
            {
              platform: "",
              url: "",
            },
          ],
          others: "",
        });
        toast({
          title: isDraft
            ? "Draft Saved successfully"
            : "Content Created successfully",
          description: isDraft
            ? "Draft has been saved"
            : "New Content has been added",
        });
        setStatus(isDraft ? "saved" : "success");
      }
      if (body.status === 400) {
        setStatus("error");
        toast({
          title: "All feilds are required.",
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
    <section className="flex flex-col w-full h-screen">
      <section className="w-full h-full pt-2 sm:pt-4">
        <form className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start overflow-y-auto overflow-x-hidden sidebar-scroll">
          <div
         
            className="flex w-[400px] h-[400px] max-md:w-full max-md:justify-center "
          >
            {postData?.src ? (
              <div className="flex flex-col gap-y-2 h-full w-full relative overflow-hidden rounded-lg">
                {postData?.isvideo ? (
                  <>
                    <iframe
                      className="w-full h-full object-cover rounded-lg transition-all duration-300"
                      src={postData.src}
                      title="Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                      allowFullScreen
                    />
                  </>
                ) : (
                  <Image
                    width={300}
                    height={300}
                    src={postData.src}
                    alt="Client"
                    className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
                  />
                )}

                <span className="absolute bottom-1 left-0 bg-gradient-to-r from-white-main via-white-main/50 to-white-main/5 px-2 w-full text-left font-medium">
                  {result?.info.original_filename!}
                </span>
                <button
                  type="button"
                  tabIndex={0}
                  aria-label="Remove image"
                  onClick={() => setPostdata({ ...postData, src: "" })}
                  className="text-black-main focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-main rounded-full bg-white-main/60 backdrop-blur-sm absolute top-1 right-1 w-8 h-8 flex items-center justify-center hover:text-red-500 hover:bg-white-main/80 hover:brightness-150 transition-all duration-700 hover:duration-200"
                  title="Remove image"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <Button
                asChild
                className={cn(
                  "flex w-full h-full min-h-[300px] items-center justify-center bg-white-300 text-xl hover:bg-yellow-main/50 hover:text-white-main",
                  {
                    hidden: postData?.src,
                  }
                )}
              >
                <CldUploadButton
                  onSuccess={(result) => {
                    // @ts-ignore
                    setResult(result as Uploadresult);
                    setPostdata({
                      ...postData,
                      // @ts-ignore
                      src: result?.info?.url,
                      // @ts-ignore
                      isvideo: result?.info?.resource_type === "video",
                    });
                  }}
                  uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                />
              </Button>
            )}
          </div>
          <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0">
            <div className="flex flex-col  gap-y-2 w-full">
              <label htmlFor="post-title" className="font-medium">
                Post Tittle
              </label>
              <input
                type="text"
                placeholder="Enter tittle..."
                id="post-title"
                name="title"
                className="w-full rounded-md border border-yellow-300 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-yellow-main font-medium"
                value={postData.title}
                onChange={(e) =>
                  setPostdata({
                    ...postData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col  gap-y-2 w-full">
              <label htmlFor="post-desc" className="font-medium">
                Post Description
              </label>
              <Tiptap
                value={postData.desc}
                onChange={(newContent: string) =>
                  handleContentChange(newContent)
                }
              />
            </div>
            <div className="flex flex-col  gap-y-2 w-full">
              <label htmlFor="post-cart" className="font-medium">
                Post Cartegoty
              </label>
              <input
                type="text"
                placeholder="Enter cart..."
                id="post-cart"
                name="cart"
                className="w-full rounded-md border border-yellow-300 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-yellow-main font-medium"
                value={postData.cart}
                onChange={(e) =>
                  setPostdata({
                    ...postData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex w-full justify-center sm:justify-end items-center gap-x-2 sm:gap-x-3 md:gap-x-6 py-6 max-sm:gap-x-5">
              <button
                type="button"
                onClick={() => Createpost(true)}
                tabIndex={0}
                // disabled={isDisabled}
                aria-label="Remove"
                className={cn(
                  "rounded-lg border border-yellow-main text-yellow-main min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-main"
                )}
              >
                {status === "saving"
                  ? "Saving..."
                  : status === "saved"
                  ? "Saved"
                  : status === "error"
                  ? "Try Again"
                  : "Save as Draft"}
              </button>
              <button
                type="button"
                tabIndex={0}
                onClick={() => Createpost(false)}
                // disabled={isDisabled}
                aria-label="Remove"
                className={cn(
                  "rounded-lg bg-yellow-main text-white-main min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-main"
                )}
              >
                {status === "loading"
                  ? "Please Wait"
                  : status === "success"
                  ? "Created"
                  : status === "error"
                  ? "Try Again"
                  : "Publish"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export { CreatePostForm };
