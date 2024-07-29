import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";
import Link from "next/link";

export default function CardAddStudent() {
    return (
        <Link href={'/cadastros/aluno/create'} className="w-[50%]">
            <Card className="hover:bg-muted-foreground hover:text-black">
                <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                    <CardTitle className="text-base font-semibold">Matrícula</CardTitle>
                    <Plus className="w-6 h-6 text-black dark:text-white hover:text-black" />
                </CardHeader>

                <CardContent className="space-y-1">
                    <span className="text-xl font-bold tracking-tight">
                        Realize uma nova matícula
                    </span>
                </CardContent>
            </Card>
        </Link>
    )
}