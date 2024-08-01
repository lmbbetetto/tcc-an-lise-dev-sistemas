import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
export default function StudentCountCard() {
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Alunos</CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    345
                </span>
                <p className="text-xs text-muted-foreground">
                    Quantidade de alunos ativos
                </p>
            </CardContent>
        </Card>
    )
}