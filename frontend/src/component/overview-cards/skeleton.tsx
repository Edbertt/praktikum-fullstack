import { Skeleton } from "@/component/ui/skeleton";

export function OverviewCardsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
        >
          <Skeleton className="w-12 h-12 rounded-full" />

          <div className="mt-6 flex items-end justify-between">
            <div>
              <Skeleton className="mb-1.5 h-7 w-20" />
              <Skeleton className="h-5 w-20" />
            </div>

            <Skeleton className="h-5 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}