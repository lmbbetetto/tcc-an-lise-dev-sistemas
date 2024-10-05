import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Falta disciplinar"
}

export default function LayoutCreateTeacher({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex flex-col gap-2 border-b w-full pb-5">
                <h1 className="text-2xl font-bold">Cadastro</h1>
                <p className="text-sm">Cadastre uma nova falta disciplinar</p>
            </div>

            <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] min-h-screen pt-4 ml-[-12px]">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            <Link href="/professor/create"><CommandItem>Formulário de cadastro</CommandItem></Link>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
            <div className="grid w-[55rem] h-full pl-[320px] p-4">
                {children}
            </div>
        </div>
    )
}