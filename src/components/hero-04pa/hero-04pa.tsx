import ContactQrCard from "@/components/contact-qr-card/contact-qr-card";
import React from "react";
import Image from "next/image";

const Hero04pa = () => {
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto flex flex-col items-center gap-12 px-6 lg:px-10 xl:px-16 py-12 lg:py-0">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-6 max-w-[30ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
              อุบัติเหตุไม่เคยบอกล่วงหน้า แต่คุณเลือกปกป้องได้
            </h1>
            <p className="mt-6 max-w-[70ch] text-lg text-muted-foreground">
              ประกันอุบัติเหตุนี้ครอบคลุมค่ารักษาพยาบาล เงินชดเชยรายได้ระหว่างพักฟื้น คุ้มครองกรณีเสียชีวิตหรือทุพพลภาพถาวร รวมถึงอุบัติเหตุจากการขับขี่หรือโดยสารรถสาธารณะ และยังมีค่าชดเชยการผ่าตัดหรือการทำกายภาพบำบัดเพิ่มเติมอีกด้วย
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              {
                src: "/pades.jpg",
                alt: "ประกันอุบัติเหตุพร้อมคุ้มครองครบวงจร",
                priority: true,
              },
              {
                src: "/pai.jpg",
                alt: "ภาพโปรโมชันประกันอุบัติเหตุเวอร์ชันก่อนหน้า",
              },
            ].map(({ src, alt, priority }) => (
              <div
                key={src}
                className="relative h-[550px] w-full max-w-[360px] rounded-[2.5rem] border border-border/60 bg-background/60 shadow-2xl shadow-primary/10 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width:1024px) 360px, 80vw"
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

export default Hero04pa;
