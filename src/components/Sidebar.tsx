'use client';

import { BellIcon, ChevronRight, Cookie, CreditCard, Inbox, LogOut, MessageSquare, Settings, User } from "lucide-react";
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

export default function Sidebar() {
  const menuTeacher = [
    {
      items: [
        {
          link: "/",
          text: "Cadastrar professor"
        },
        {
          link: "/",
          text: "Buscar professor"
        }
      ]
    },
  ]

  const menuStudant = [
    {
      items: [
        {
          link: "/",
          text: "Cadastrar aluno"
        },
        {
          link: "/",
          text: "Buscar aluno"
        }
      ]
    },
  ]

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">


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
                          {option.text}
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
            <AccordionTrigger className="text-sm">Aluno</AccordionTrigger>
            <AccordionContent>
              <Command style={{ overflow: 'visible' }}>
                <CommandList style={{ overflow: 'visible' }}>
                  {menuStudant.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                      {menu.items.map((option: any, optionKey: number) =>
                        <CommandItem key={optionKey} className="flex justify-between cursor-pointer">
                          {option.text}
                        </CommandItem>
                      )}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
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
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
      </div>
    </div>
  )
}