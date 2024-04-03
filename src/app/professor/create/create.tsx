import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import FormDadosPessoais from "./dados-pessoais";
import FormEndereco from "./endereco";
import FormFormacao from "./formacao";
import LayoutCreateTeacher from "./layout";

export default function CreateTeacher() {
    return (
        <LayoutCreateTeacher>
            {/* <FormDadosPessoais /> */}
            {/* <FormEndereco /> */}
            <FormFormacao />
        </LayoutCreateTeacher>
    )
}