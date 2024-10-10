'use client'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react"
import Image from "next/image"

export default function HomeGestor() {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    const images = [
        "/fundo.jpg",
        "/login-picture.jpg",
        "/fundo.jpg",
        "/login-picture.jpg",
        "/fundo.jpg"
    ]

    return (
        <main className="mt-10 pl-8 pr-8 flex flex-col items-center">
            <Carousel
                plugins={[plugin.current]}
                className="w-[97%] h-[30rem]"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="h-full">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="h-[30rem] flex">
                            <div className="p-1 h-full w-full relative">
                                <Card className="h-full w-full">
                                    <CardContent className="flex items-center justify-center p-0 h-full relative">
                                        <Image
                                            src={image}
                                            alt={`Carousel item ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <section className="space-y-4 w-full max-w-6xl mt-[5rem]">
                <h1 className="text-center font-semibold text-2xl mt-[-2rem] mb-[4rem]">Aprimoramento da gestão no Projeto CARA: Desenvolvimento de um sistema integrado</h1>
                <div className="grid grid-cols-10 gap-4">
                    <p className="col-span-7">
                        Com o avanço da tecnologia da informação (TI), tornaram-se amplas as oportunidades em agilizar e otimizar os processos. Uma empresa hoje torna-se obrigada a aderir a meios tecnológicos para suprir demandas e cumprir curtos prazos de entrega. No meio escolar, a TI se tornou uma grande aliada de escolas e centros de ensino, proporcionando que gestores controlem os alunos, matrículas, cursos, colaboradores e demais meios escolares.
                        Em projetos sociais de menor escala, como o Projeto CARA, que é uma iniciativa social em que visa o desenvolvimento comportamental e profissional de adolescentes para a inclusão ao mercado de trabalho, a organização de tarefas e documentos relacionados à gestão se torna um desafio significativo, especialmente quando se trata da administração de um Serviço de Convivência e Fortalecimento de Vínculos (SCFV).
                    </p>
                    <p className="col-span-3">
                        O SCFV integra o conjunto de serviços do SUAS, oferecendo à população que vivencia situações de vulnerabilidades sociais, novas oportunidades de reflexão acerca da realidade social, contribuindo dessa forma para a planejamento de estratégias e na construção de novos projetos de vida (MEDEIROS, 2023, p. ).
                    </p>
                </div>
                <p>
                    O objetivo primordial deste trabalho de conclusão de curso é a criação de um sistema integrado abrangente, com foco em otimizar a gestão do Serviço de Convivência e Fortalecimento de Vínculos destacado. Esse sistema visa preencher as lacunas decorrentes da gestão manual, abrangendo não apenas os processos internos e a documentação relacionada, mas também a eficaz administração dos adolescentes envolvidos no Projeto CARA.
                </p>
                <p>Para alcançar os objetivos propostos, o projeto seguirá as seguintes etapas: primeiramente, será realizada uma fase de pesquisa e entendimento, isso inclui estudos teóricos para examinar projetos similares e reuniões diretas com o gestor a fim de obter todos os requisitos necessários para o desenvolvimento do software. Após a conclusão dessa fase inicial, os requisitos levantados serão analisados. Para essa análise, será usado o software Astah Community, que auxiliará na criação de mapas mentais, diagramas de casos de uso, diagramas de atividade, de sequência, de classes. Por fim, a elaboração do protótipo funcional do projeto ocorrerá com o auxílio da plataforma Figma.
                    Posteriormente, a etapa de desenvolvimento, a qual será iniciada com a implementação do banco de dados. Opto por empregar o PostgreSQL, um banco de dados relacional, e a ferramenta de mapeamento objeto-relacional (ORM) Prisma. Essa escolha visa garantir a estruturação e estabilidade do banco para suportar entradas e saídas de dados. Para o desenvolvimento dos processos de criação, leitura, atualização e exclusão (CRUD) e demais operações, utilizando Typescript, ReactJS e o Framework NextJS para o Front-end, além do NodeJS para o Back-end. Essa abordagem, baseada em tecnologias modernas e eficazes, permitirá construir um software robusto e adequado aos requisitos estabelecidos.
                    Após a conclusão da implementação do software, será finalizado com a fase de testes, aplicando testes unitários e modulares. Esse processo visará garantir que a solução seja entregue com funcionamento adequado, pronto para uma futura implantação.
                </p>
            </section>
        </main>

    )
}
