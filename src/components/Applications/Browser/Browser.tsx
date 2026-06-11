import { useState } from "react";

import { Input } from "@components/shared/Input/Input";
import { Button } from "@components/shared/Button/Button";
import { Icon } from "@components/shared/Icon/Icon";

export const Browser = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    window.open(`https://google.com/search?q=${search}`, "_blank");
    setSearch("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h4 className="mb-6 text-5xl font-bold">Google</h4>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <Input
          required
          type="text"
          value={search}
          className="min-w-[200px]  p-2 mb-4 md:min-w-[600px]"
          onChange={e => setSearch(e.target.value)}
        />
        <Button className="flex justify-center gap-6 ">
          <p>Search</p>
          <Icon icon="search" />
        </Button>
      </form>
    </div>
  );
};
