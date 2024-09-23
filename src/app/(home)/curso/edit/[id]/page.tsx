'use client';

import { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { editCurso } from "../../create/actions";
import { schema, Schema } from "../../create/schema";
import { CursoPayload } from "@/service/curso";

const fetchUserData = async (id: string) => {
    try {
        const response = await fetch(`/api/curso?id=${id}`, {
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

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    useEffect(() => {
        if (id) {
            fetchUserData(id as string)
                .then((data) => {
                    form.reset({
                        curso: data.nomeCurso
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
                const payload: CursoPayload = {
                    nomeCurso: data.curso,
                };

                await editCurso(Number(id), payload);
                toast({
                    title: "Sucesso!",
                    description: "Curso editado com sucesso!",
                });
            } catch (error) {
                toast({
                    title: "Erro",
                    description: "Ocorreu um erro ao editar o curso.",
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
                        name="curso"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome do curso *</FormLabel>
                                <FormControl>
                                    <Input {...field} />
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
