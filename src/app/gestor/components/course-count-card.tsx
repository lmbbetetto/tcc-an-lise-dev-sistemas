'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Curso } from "@/service/curso";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function CourseCountCard() {
    const [alunos, setAlunos] = useState<Curso[]>([]);

    async function fetchProfessors() {
        const response = await fetch('/api/curso', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setAlunos(data);
        };
    }
    useEffect(() => {
        fetchProfessors();
    }, []);
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Cursos</CardTitle>
                <BookOpen className="w-4 h-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    {alunos.length}
                </span>
                <p className="text-xs text-muted-foreground">
                    Quantidade de cursos cadastrados
                </p>
            </CardContent>
        </Card>
    )
}