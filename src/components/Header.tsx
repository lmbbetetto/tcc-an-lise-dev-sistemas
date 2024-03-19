'use client';
import { useState } from "react";
import { CommandDemo } from "./Command";

export default function Header() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 pb-4 border-b">
      <CommandDemo />
    </div>
  )

}