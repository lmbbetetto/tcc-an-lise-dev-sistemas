'use client';

import { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { editDisciplina } from "../../create/actions";
import { schema, Schema } from "../../create/schema";
import { Curso } from "@/service/curso";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TeacherShow } from "@/service/professor";
import { DisciplinaPayload } from "@/service/disciplina";

export default function UserPage() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const [professors, setProfessors] = useState<TeacherShow[]>([]);
    const [cursos, setCursos] = useState<Curso[]>([]);

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    const fetchUserData = async (id: string) => {
        try {
            const response = await fetch(`/api/disciplina?id=${id}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Failed to fetch user data", error);
            throw error;
        }
    };

    async function fetchProfessors() {
        const response = await fetch('/api/professor', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setProfessors(data);
        }
    }

    async function fetchCursos() {
        const response = await fetch('/api/curso', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setCursos(data);
        }
    }

    useEffect(() => {
        async function fetchInitialData() {
            await fetchCursos();
            await fetchProfessors();

            if (id) {
                const data = await fetchUserData(id as string);
                form.reset({
                    curse: data.idCurso,
                    professor: data.idProfessor,
                    name: data.nomeDisciplina,
                });
            }
        }

        fetchInitialData();
    }, [id]);

    const onSubmit = async (data: Schema) => {
        console.log("Dados do formulário:", data);
        if (id) {
            try {
                const payload: DisciplinaPayload = {
                    idCurso: Number(data.curse),
                    idProfessor: Number(data.professor),
                    nomeDisciplina: data.name,
                };
                await editDisciplina(Number(id), payload);
                toast({
                    title: "Sucesso!",
                    description: "Disciplina editada com sucesso!",
                });
            } catch (error) {
                toast({
                    title: "Erro",
                    description: "Ocorreu um erro ao editar a disciplina.",
                    variant: "destructive",
                });
            }
        } else {
            console.error("ID não encontrado na URL");
        }
    };

    return (
        <ScrollArea className="h-[34rem] w-[853px] pr-[250px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2 pt-0">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome da disciplina *</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="professor"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Professor *</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {professors.map((professor) => (
                                                    <SelectItem key={professor.id} value={String(professor.id)}>
                                                        {professor.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="curse"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Curso *</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {cursos.map((curso) => (
                                                    <SelectItem key={curso.id} value={String(curso.id)}>
                                                        {curso.nomeCurso}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Confirmar</Button>
                </form>
            </Form>
        </ScrollArea>
    );
}
