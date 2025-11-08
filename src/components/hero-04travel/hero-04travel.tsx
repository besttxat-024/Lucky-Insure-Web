import ContactQrCard from "@/components/contact-qr-card/contact-qr-card";
import React from "react";
import Image from "next/image";

const Hero04travel = () => {
  const travelImages = [
    {
      src: "/Ti.jpg",
      alt: "นักเดินทางกำลังสำรวจเมืองใหม่",
      priority: true,
    },
    {
      src: "/traveldes.jpg",
      alt: "ภาพโปรโมชันประกันเดินทางยุคแรก",
    },
    {
      src: "/traveldes2.jpg",
      alt: "ทีมเพื่อนออกเดินทางพร้อมสัมภาระ",
    },
    {
      src: "/traveldes3.jpg",
      alt: "เครื่องบินและวิวระหว่างเดินทาง",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto flex flex-col items-center gap-12 px-6 lg:px-10 xl:px-16 py-12 lg:py-0">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-6 max-w-[30ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
              เที่ยวทั่วโลก มั่นใจทุกก้าว ด้วยประกันเดินทาง
            </h1>
            <p className="mt-6 max-w-[70ch] text-lg text-muted-foreground">
              ประกันการเดินทางนี้คุ้มครองทั้งค่ารักษาพยาบาลจากอุบัติเหตุหรือเจ็บป่วยระหว่างเดินทาง ค่าชดเชยเมื่อไฟลท์ล่าช้าหรือถูกยกเลิก คุ้มครองกระเป๋าและทรัพย์สินส่วนตัว รวมถึงความเสียหายร้ายแรงถึงชีวิตจากอุบัติเหตุ พร้อมบริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมง
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelImages.map(({ src, alt, priority }) => (
              <div
                key={src}
                className="relative h-[400px] sm:h-[460px] lg:h-[520px] w-full rounded-[2.5rem] border border-border/60 bg-background/60 shadow-2xl shadow-primary/10 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width:1024px) 320px, 80vw"
                  className="object-cover"
                  priority={priority}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-6 pb-20">
        <div className="max-w-(--breakpoint-xl) mx-auto flex flex-col items-center text-center gap-4">
          <ContactQrCard />
        </div>
      </section>
    </div>
  );
};

export default Hero04travel;
