'use client';

import { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Select } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { schema, Schema } from "../../create/schema";
import { FaltaDisciplinarPayload } from "@/service/faltas-disicplinares";
import { Curso } from "@/service/curso";
import { TurmaPayload } from "@/service/turma";
import { editTurma } from "../../create/actions";

const fetchUserData = async (id: string) => {
    try {
        const response = await fetch(`/api/turma?id=${id}`, {
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

export default function UserPage() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [message, setMessage] = useState("");
    const [cursos, setCursos] = useState<Curso[]>([]);

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    async function fetchCursos() {
        const response = await fetch('/api/curso', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setCursos(data);
        };
    }

    useEffect(() => {
        fetchCursos();
        if (id) {
            fetchUserData(id as string)
                .then((data) => {
                    form.reset({
                        curse: data.idCurso,
                        nomeTurma: data.nomeTurma
                    });
                })
                .catch((error) => console.error("Error fetching user data:", error));
        } else {
            console.error("ID não encontrado na URL");
        }
    }, [form, id]);

    const onSubmit = async (data: Schema) => {
        if (id) {
            try {
                const payload: TurmaPayload = {
                    idCurso: Number(data.curse),
                    nomeTurma: data.nomeTurma
                };
                await editTurma(Number(id), payload);
                toast({
                    title: "Sucesso!",
                    description: "Turma editada com sucesso!",
                });
            } catch (error) {
                toast({
                    title: "Erro",
                    description: "Ocorreu um erro ao editar a turma.",
                    variant: "destructive",
                });
            }
        } else {
            console.error("ID não encontrado na URL");
        }
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    return (
        <ScrollArea className="h-[34rem] w-[853px] pr-[250px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2 pt-0">
                    <FormField
                        control={form.control}
                        name="nomeTurma"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome da Turma *</FormLabel>
                                <FormControl>
                                    <Input {...field} />
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
