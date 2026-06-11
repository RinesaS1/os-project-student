import { Button } from "@components/shared/Button/Button";

export const Camera = () => {
  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <h1 className="w-full text-4xl font-bold text-left">Camera</h1>
      <div className="my-3 flex flex-col gap-y-3 flex-1 max-h-[600px] rounded-xl bg-slate-700"></div>
      <Button>Take a picture</Button>
    </div>
  );
};
