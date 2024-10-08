'use client';

import Image from "next/image";

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 flex items-center justify-center">
        <Image src="/logo-cara.png" alt="Logo Projeto CARA" width={40} height={40} />
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Leonardo Betetto</p>
        <p className="text-[12px] text-neutral-500">leonardo@email.com</p>
      </div>
    </div>
  )
}