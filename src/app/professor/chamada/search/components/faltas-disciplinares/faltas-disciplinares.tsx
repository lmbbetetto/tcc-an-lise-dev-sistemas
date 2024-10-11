import * as React from "react"
import { cn } from "@/lib/utils"

import { CirclePlus } from "lucide-react"

import { useForm } from "react-hook-form";
import { schema, Schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 

export function FaltasDisciplinares() {
    const [date, setDate] = React.useState<Date>()

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {},
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <CirclePlus className="h-3.5 w-3.5" />
                    <span className="sr-only">Cadastrar falta disciplinar</span>
                </Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Cadastrar falta disciplinar</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <Form {...form}>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    pagedNavigation
                                />
                            </PopoverContent>
                        </Popover>
                    </Form>
                </DialogDescription>
                <DialogFooter>
                    <Button variant={"outline"}>Editar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}