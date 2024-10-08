"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { schema, Schema } from "./schema"
import { createNewProfessor } from "./actions"
import { TeacherPayload, TeacherShow } from "@/service/professor"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { Aluno } from "@/service/aluno"

export default function CreateFaltaDisciplinar() {
   const [message, setMessage] = useState("");
   const [professors, setProfessors] = useState<TeacherShow[]>([]);
   const [alunos, setAlunos] = useState<Aluno[]>([]);

   const form = useForm<Schema>({
      resolver: zodResolver(schema),
      defaultValues: {
         descricao: '',
         professor: '',
         aluno: '',
         data: ''
      },
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
   }, []);

   const { reset } = form;

   const onSubmit = async (data: Schema) => {
      try {
         const payload: TeacherPayload = {
            teacherName: message,
            phone: data.professor,
         };

         console.log('teste')

         await createNewProfessor(payload);

         toast({
            title: "Sucesso!",
            description: "Professor criado com sucesso!",
         });

         reset();
      } catch (error) {
         toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar o professor.",
            variant: "destructive",
         });
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
   )
}