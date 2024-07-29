import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";
import Link from "next/link";

export default function CardChamada() {
    return (
        <Link href={'/cadastros/aluno/create'} className="w-[50%]">
            <Card className="">
                <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                    <CardTitle className="text-base font-semibold">Chamada</CardTitle>
                    <Plus className="w-6 h-6 text-black dark:text-white" />
                </CardHeader>

                <CardContent className="space-y-1">
                    <span className="text-xl font-bold tracking-tight">
                        Realizar chamada
                    </span>
                </CardContent>
            </Card>
        </Link>
    )
}