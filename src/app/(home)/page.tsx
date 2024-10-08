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
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const images = [
        "/fundo.jpg",
        "/login-picture.jpg",
        "/fundo.jpg",
        "/login-picture.jpg",
        "/fundo.jpg"
    ]

    return (
        <main className="pl-8 pr-8 flex flex-col items-center">
            <Carousel
                plugins={[plugin.current]}
                className="w-[90%] h-[30rem]"
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
            <section className="space-y-4 w-full max-w-4xl mt-[5rem]">
                <div className="grid grid-cols-10 gap-4">
                    <p className="col-span-7">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                    </p>
                    <p className="col-span-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?</p>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut fugit doloremque dolores quo eligendi, incidunt vel placeat quam ex saepe tempore quidem iusto quas cupiditate aliquam nobis ad? Debitis?
                </p>
            </section>
        </main>

    )
}
