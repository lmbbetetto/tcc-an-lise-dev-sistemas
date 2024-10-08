'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilRuler } from "lucide-react";
import { useEffect, useState } from "react";

interface Professor {
    id: number;
}

export default function TeacherCountCard() {
    const [professors, setProfessors] = useState<Professor[]>([]);

    async function fetchProfessors() {
        const response = await fetch('/api/professor', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setProfessors(data);
        };
    }
    useEffect(() => {
        fetchProfessors();
    }, []);
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Professores</CardTitle>
                <PencilRuler className="w-4 h-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    {professors.length}
                </span>
                <p className="text-xs text-muted-foreground">
                    Quantidade de professores cadastrados
                </p>
            </CardContent>
        </Card>
    )
}