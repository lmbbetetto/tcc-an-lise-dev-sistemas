import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alunos"
}

export default function LayoutCreateTeacher({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-4">
            <Header />
            {children}
        </div>
    )
}