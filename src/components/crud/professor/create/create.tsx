import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import FormDadosPessoais from "./dados-pessoais";
import FormEndereco from "./endereco";
import FormFormacao from "./formacao";

export default function CreateTeacher() {
    return (
        <div>
            <div className="flex flex-col gap-2 border-b w-full pb-5">
                <h1 className="text-2xl font-bold">Novo professor</h1>
                <p className="text-sm">Adicione um novo professor</p>
            </div>

            <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] min-h-screen pt-4 ml-[-12px]">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            <CommandItem>Dados pessoais</CommandItem>
                            <CommandItem>Endereço</CommandItem>
                            <CommandItem>Formação</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
            <div className="grid w-[55rem] h-full pl-[320px] p-4">
                {/* <FormDadosPessoais /> */}
                {/* <FormEndereco /> */}
                <FormFormacao />
            </div>
        </div>
    )
}