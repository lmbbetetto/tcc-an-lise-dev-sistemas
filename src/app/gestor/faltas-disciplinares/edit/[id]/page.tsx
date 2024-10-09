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
import { TeacherPayload, TeacherShow, updateProfessor } from "@/service/professor";
import { toast } from "@/components/ui/use-toast";
import { editProfessor } from "../../create/actions";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { schema, Schema } from "../../create/schema";
import { Aluno } from "@/service/aluno";
import { FaltaDisciplinarPayload } from "@/service/faltas-disicplinares";

const fetchUserData = async (id: string) => {
    try {
        const response = await fetch(`/api/faltas-disciplinares?id=${id}`, {
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
    const [professors, setProfessors] = useState<TeacherShow[]>([]);
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    async function fetchProfessors() {
        const response = await fetch('/api/professor', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setProfessors(data);
        };
    }

    async function fetchAlunos() {
        const response = await fetch('/api/aluno', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setAlunos(data);
        };
    }

    useEffect(() => {
        fetchProfessors();
        fetchAlunos();
        if (id) {
            fetchUserData(id as string)
                .then((data) => {
                    form.reset({
                        aluno: data.idAluno,
                        data: data.dataFalta,
                        descricao: data.descricao,
                        professor: data.idProfessor
                    });
                })
                .catch((error) => console.error("Error fetching user data:", error));
        } else {
            console.error("ID não encontrado na URL");
        }
    }, [form, id]);

    const onSubmit = async (data: Schema) => {
        if (id) {
            console.log('teste')
            try {
                const payload: FaltaDisciplinarPayload = {
                    dataFalta: data.data,
                    descricao: message,
                    idAluno: Number(data.aluno),
                    idProfessor: Number(data.professor),
                    titulo: data.descricao
                };

                // await editProfessor(Number(id), payload);
                toast({
                    title: "Sucesso!",
                    description: "Professor editado com sucesso!",
                });
            } catch (error) {
                toast({
                    title: "Erro",
                    description: "Ocorreu um erro ao editar o professor.",
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
                        name="descricao"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Titulo da ocorrência:</FormLabel>
                                <FormControl>
                                    <Input {...field} type="tel" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="data"
                        render={({ field }) => (
                            <FormItem className="w-[50%]">
                                <FormLabel>Data: *</FormLabel>
                                <FormControl>
                                    <Input {...field} type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid w-full gap-3">
                        <Label htmlFor="message">Descrição da ocorrência:</Label>
                        <Textarea
                            placeholder="Descreva a ocorrência."
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>

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
                        name="aluno"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alunos *</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {alunos.map((aluno) => (
                                                    <SelectItem key={aluno.id} value={String(aluno.id)}>
                                                        {aluno.nome}
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
