import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cadastro Professor"
}

export default function LayoutCreateTeacher({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex flex-col gap-2 border-b w-full pb-5">
                <h1 className="text-2xl font-bold">Novo professor</h1>
                <p className="text-sm">Adicione um novo professor</p>
            </div>

            <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] min-h-screen pt-4 ml-[-12px]">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            <Link href="/professor/create/dados-pessoais"><CommandItem>Dados pessoais</CommandItem></Link>
                            <Link href="/professor/create/endereco"><CommandItem>Endereço</CommandItem></Link>
                            <Link href="/professor/create/formacao"><CommandItem>Formação</CommandItem></Link>
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