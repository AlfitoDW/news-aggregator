"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = {
  trigger: React.ReactNode;
};

export default function SearchDialog({ trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {/* CUSTOM OVERLAY */}
      <DialogOverlay className="bg-white/10 backdrop-blur-sm" />

      {/* CONTENT */}
      <DialogContent className="sm:max-w-xl top-[20%] translate-y-0">
        <DialogHeader>
          <DialogTitle>Search News</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-4">
          <Input
            autoFocus
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
