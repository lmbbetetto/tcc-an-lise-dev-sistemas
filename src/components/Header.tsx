'use client';
import { useState } from "react";
import { CommandDemo } from "./Command";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2015",
      read: true
    },
    {
      text: "This is another notification",
      date: "02-01-2015",
      read: false
    }
  ])

  return (
    <div className="w-full grid grid-cols-2 gap-4 p-4 border-b">
      <CommandDemo />
    </div>
  )

}