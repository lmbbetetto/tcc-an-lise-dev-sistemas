'use client';
import { LogOut, Table, User, House } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { Button } from "./ui/button";
import { ModeToggle } from "./toggle-theme";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import { routes } from "@/utils/routes";

export default function Sidebar() {
  const menuTeacher = [
    {
      items: [
        {
          link: routes.professor.new,
          text: "Cadastrar professor"
        },
        {
          link: routes.professor.search,
          text: "Buscar professor"
        }
      ]
    },
  ]
  const menuStudant = [
    {
      items: [
        {
          link: routes.aluno.new,
          text: "Cadastrar aluno"
        },
        {
          link: routes.aluno.search,
          text: "Buscar aluno"
        }
      ]
    },
  ]
  const menuClass = [
    {
      items: [
        {
          link: routes.turma.new,
          text: "Cadastrar turma"
        },
        {
          link: routes.turma.search,
          text: "Buscar turma"
        }
      ]
    },
  ]
  const menuCurse = [
    {
      items: [
        {
          link: routes.curso.new,
          text: "Cadastrar curso"
        },
        {
          link: routes.curso.search,
          text: "Buscar curso"
        }
      ]
    },
  ]
  const menuDisciplina = [
    {
      items: [
        {
          link: routes.disciplina.new,
          text: "Cadastrar disciplina"
        },
        {
          link: routes.disciplina.search,
          text: "Buscar disciplina"
        }
      ]
    },
  ]
  const menuFaltasDisciplinares = [
    {
      items: [
        {
          link: routes.faltasDisciplinares.new,
          text: "Cadastrar faltas disciplinares"
        },
        {
          link: routes.faltasDisciplinares.search,
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
            <Link href={routes.home.home}><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted p-1 rounded-sm"><House size={18} />Início</p></Link>
            <Link href="#chamada"><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted p-1 rounded-sm"><Table size={18} />Chamada</p></Link>
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
              <AccordionTrigger className="text-sm">Curso</AccordionTrigger>
              <AccordionContent>
                <Command style={{ overflow: 'visible' }}>
                  <CommandList style={{ overflow: 'visible' }}>
                    {menuCurse.map((menu: any, key: number) => (
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
              <AccordionTrigger className="text-sm">Disciplina</AccordionTrigger>
              <AccordionContent>
                <Command style={{ overflow: 'visible' }}>
                  <CommandList style={{ overflow: 'visible' }}>
                    {menuDisciplina.map((menu: any, key: number) => (
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

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">Turma</AccordionTrigger>
              <AccordionContent>
                <Command style={{ overflow: 'visible' }}>
                  <CommandList style={{ overflow: 'visible' }}>
                    {menuClass.map((menu: any, key: number) => (
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

          <div className="mt-4">
            <h1 className="text-sm text-muted-foreground mb-3">Relatórios</h1>
            <Link href="/"><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted ml-2 p-1 rounded-sm">Relatório por aluno</p></Link>
            <Link href="/"><p className="flex gap-2 items-center text-sm hover:cursor-pointer hover:bg-muted ml-2 p-1 rounded-sm">Relatório por turma</p></Link>
          </div>
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
            <DropdownMenuItem className="flex gap-2 text-rose-500 dark:text-rose-400">
              <span>Sair</span>
              <LogOut className="w-4 h-4" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={routes.userPage.user('H542R5')}><DropdownMenuItem>Perfil</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
      </div>
    </div >
  )
}