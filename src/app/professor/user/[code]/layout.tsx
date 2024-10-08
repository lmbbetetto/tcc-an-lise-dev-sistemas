import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Usuário"
}

export default function LayoutUserProfile({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex flex-col gap-2 border-b w-full pb-5">
                <h1 className="text-2xl font-bold">Página do usuário</h1>
                <p className="text-sm">Gerencie as informações do seu cadastro</p>
            </div>

            <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] min-h-screen pt-4 ml-[-12px]">
                <h1 className="bg-muted p-1 rounded-sm">Cadastro</h1>
            </div>
            <div className="grid w-[55rem] h-full pl-[320px] p-4">
                {children}
            </div>
        </div>
    )
}