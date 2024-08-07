'use client';

import { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { schema, Schema } from "./schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const fetchUserData = async (id: string) => {
    try {
        const response = await fetch(`/api/professor?id=${id}`, {
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
                    console.log("Dados do usuário:", data);
                    form.reset({
                        teacherName: data.name,
                        phone: data.telefone,
                        email: data.email,
                        genero: data.genero,
                        nascimento: data.nascimento,
                        rua: data.rua,
                        numero: data.numero,
                        complemento: data.complemento,
                        bairro: data.bairro,
                        cidade: data.cidade,
                        uf: data.estado,
                        course: data.curso,
                        instituicao: data.instituicao,
                        conclusion: data.anoConclusao,
                    });
                })
                .catch((error) => console.error("Error fetching user data:", error));
        } else {
            console.error("ID não encontrado na URL");
        }
    }, [form, id]);

    return (
        <ScrollArea className="h-[34rem] w-[853px] pr-[250px]">
            <Form {...form}>
                <form onSubmit={() => {}} className="space-y-8 mb-8">
                    <h1 className="text-m text-muted-foreground">Dados pessoais</h1>
                    <FormField
                        control={form.control}
                        name="teacherName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome completo</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="genero"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gênero</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nascimento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Data de nascimento</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <h1 className="pt-10 text-m text-muted-foreground">Endereço</h1>
                    <div className="flex gap-4">
                        <div className="w-[85%]">
                            <FormField
                                control={form.control}
                                name="rua"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rua</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-[15%]">
                            <FormField
                                control={form.control}
                                name="numero"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="complemento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input className="w-[50%]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bairro"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input className="w-[50%]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="cidade"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cidade</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="uf"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Estado</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <h1 className="pt-10 text-m text-muted-foreground">Formação</h1>
                    <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Curso</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="instituicao"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Instituição</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="conclusion"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ano de conclusão</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
                <Button type="submit">Atualizar cadastro</Button>
            </Form>
        </ScrollArea>
    );
}
