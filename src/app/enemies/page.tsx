"use client"

import { useEffect, useRef } from "react";
import card from "../page.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { useSearchParams } from "next/navigation";
import { EnemyArray } from "@/types/type";

const Page = () => {

    const data: EnemyArray = [
        {
            name: "Alien Scum",
            img:"/assets/black-alien-scum.png",
            text: "Ninja killer don't touch him"
        },
        {
            name: "Death Smokie",
            img:"/assets/death-smokie.png",
            text: "Ninja killer don't touch him"   
        },
        {
            name: "Ping Pang",
            img:"/assets/angry-ping.png",
            text: "Just some Penguin Shit"
        }
    ]

    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const id = Number (query)

    // const dataID = query as string;
    // const id = parseInt(dataID);



    const refObj = useRef<HTMLDivElement>(null); //vores reference fra vores hook er null fra start

    useEffect( () => {

        gsap.to( refObj.current, {
            duration: 0.05,
            scaleX: -1,
            alpha: 0,
            repeat: 3,
            yoyo: true,
            onComplete: () => {
                gsap.to( refObj.current, {
                    duration: 0.05,
                    alpha: 1,
                    scaleX: 1
                })
            }
        })
    }, [id])

    return (

        <main>
            <section ref={refObj} id={card.cardContainer}>
                <div id={card.card}>

                    <div id={card.headline}>{data[id].name}</div>
                    <div id={card.imagecon}>
                        <Image src={data[id].img} alt="Picture of the author" width={250} height={250} priority={true}  />
                    </div>


                    <div id={card.content}>{data[id].text}</div>

                </div>
            </section>

        </main>

    )

}

export default Page;