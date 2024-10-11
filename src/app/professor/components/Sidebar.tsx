'use client';
import { LogOut, Table, User, House } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import { routes, routesProfessor } from "@/utils/routes";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import UserItem from "@/components/UserItem";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Sidebar() {
  const menuTeacher = [
    {
      items: [
        {
          link: routesProfessor.professor.search,
          text: "Buscar professor"
        }
      ]
    },
  ]
  const menuStudant = [
    {
      items: [
        {
          link: routesProfessor.aluno.search,
          text: "Buscar aluno"
        }
      ]
    },
  ]
  const menuFaltasDisciplinares = [
    {
      items: [
        {
          link: routesProfessor.faltasDisciplinares.new,
          text: "Cadastrar faltas disciplinares"
        },
        {
          link: routesProfessor.faltasDisciplinares.search,
          text: "Buscar faltas disciplinares"
        }
      ]
    },
  ]

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <ScrollArea className="h-[35rem] w-[282px] pr-4">
        <div className="grow">
          <section className="flex flex-col gap-2  mt-2 mb-6">
            <Link href={routesProfessor.home.home}><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted p-1 rounded-sm"><House size={18} />Início</p></Link>
            <Link href={routesProfessor.chamada.home}><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted p-1 rounded-sm"><Table size={18} />Chamada</p></Link>
            <Link href={routesProfessor.chamada.search}><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted p-1 rounded-sm"><Table size={18} />Listar chamadas</p></Link>
          </section>

          <h1 className="text-sm text-muted-foreground">Cadastros</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">Aluno</AccordionTrigger>
              <AccordionContent>
                <Command style={{ overflow: 'visible' }}>
                  <CommandList style={{ overflow: 'visible' }}>
                    {menuStudant.map((menu: any, key: number) => (
                      <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) =>
                          <CommandItem key={optionKey} className="flex justify-between cursor-pointer">
                            <Link href={option.link}>{option.text}</Link>
                          </CommandItem>
                        )}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">Faltas disciplinares</AccordionTrigger>
              <AccordionContent>
                <Command style={{ overflow: 'visible' }}>
                  <CommandList style={{ overflow: 'visible' }}>
                    {menuFaltasDisciplinares.map((menu: any, key: number) => (
                      <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) =>
                          <CommandItem key={optionKey} className="flex justify-between cursor-pointer">
                            <Link href={option.link}>{option.text}</Link>
                          </CommandItem>
                        )}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">Professor</AccordionTrigger>
              <AccordionContent>
                <Command style={{ overflow: 'visible' }}>
                  <CommandList style={{ overflow: 'visible' }}>
                    {menuTeacher.map((menu: any, key: number) => (
                      <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) =>
                          <CommandItem key={optionKey} className="flex justify-between cursor-pointer">
                            <Link href={option.link}>{option.text}</Link>
                          </CommandItem>
                        )}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <h1 className="text-sm text-muted-foreground mb-3 mt-5">Relatórios</h1>
          <Link href={routesProfessor.faltas.faltas}><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted p-1 rounded-sm">Faltas</p></Link>
        </div>
      </ScrollArea>

      <div className="flex gap-2 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <User className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Link href={routesProfessor.auth.home} className="flex gap-2 text-rose-500 dark:text-rose-400">
                <span>Sair</span>
                <LogOut className="w-4 h-4" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={routesProfessor.userPage.user('H542R5')}><DropdownMenuItem>Perfil</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
      </div>
    </div >
  )
}