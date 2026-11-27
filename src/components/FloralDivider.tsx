import { Flower2, Heart } from "lucide-react";

export default function FloralDivider() {
  return (
    <div
      className="flex items-center justify-center gap-5 bg-page py-5"
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-line-strong md:w-28" />

      <Flower2 className="h-5 w-5 text-petal" />

      <Heart className="h-5 w-5 fill-petal text-petal" />

      <Flower2 className="h-5 w-5 text-petal" />

      <span className="h-px w-16 bg-line-strong md:w-28" />
    </div>
  );
}