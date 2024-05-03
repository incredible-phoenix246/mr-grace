import { Skeleton } from "@ui/skeleton";

const HeroSkel = () => {
  return (
    <div className="flex flex-col space-y-3 max-w-[400px] max-h-[630px]">
      <Skeleton className="h-64 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export { HeroSkel };
