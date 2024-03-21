import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function CourseCountCard() {
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Cursos</CardTitle>
                <BookOpen className="w-4 h-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    3
                </span>
                <p className="text-xs text-muted-foreground">
                    Quantidade de cursos cadastrados
                </p>
            </CardContent>
        </Card>
    )
}