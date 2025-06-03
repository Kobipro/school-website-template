import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl text-balance max-w-xl">
          A learning environment designed for every student’s success.
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700 rounded-2xl p-px">
              <Image
                src="/payments.png"
                alt="Dark mode illustration"
                width={1207}
                height={929}
                className="hidden dark:block rounded-[15px]"
              />
              <Image
                src="/payments-light.png"
                alt="Light mode illustration"
                width={1207}
                height={929}
                className="rounded-[15px] shadow dark:hidden"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Students are supported academically, socially, and emotionally —{" "}
              <span className="text-accent-foreground font-semibold">
                to thrive in an ever-changing world.
              </span>
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Since enrolling our child, we've seen tremendous academic growth and a
              renewed passion for learning. The teachers truly care, and the
              curriculum is both challenging and inspiring.
            </p>

            <blockquote className="border-l-4 pl-4 text-muted-foreground">
              <p className="italic">“The learning experience here is exceptional.”</p>
              <div className="mt-4">
                <cite className="block font-medium text-foreground">
                  — Jane Smith, Parent
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}




// import Image from "next/image";

// export default function ContentSection() {
//   return (
//     <section className="py-16 md:py-32">
//       <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
//         <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
//            A learning environment designed for every student’s success.
//         </h2>
//         <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
//           <div className="relative mb-6 sm:mb-0">
//             <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
//               <Image
//                 src="/payments.png"
//                 className="hidden rounded-[15px] dark:block"
//                 alt="payments illustration dark"
//                 width={1207}
//                 height={929}
//               />
//               <Image
//                 src="/payments-light.png"
//                 className="rounded-[15px] shadow dark:hidden"
//                 alt="payments illustration light"
//                 width={1207}
//                 height={929}
//               />
//             </div>
//           </div>

//           <div className="relative space-y-4">
//             <p className="text-muted-foreground">
//               students are supported academically, socially, and emotionally.{" "}
//               <span className="text-accent-foreground font-bold">
//                 to thrive in an ever-changing world.
//               </span>{" "}
//              {/* — from products innovate.*/}
//             </p>
//             <p className="text-muted-foreground">
//              Since enrolling our child, we've seen tremendous academic
//             growth and a renewed passion for learning. The teachers truly
//             care, and the curriculum is both challenging and inspiring.
//             </p>

//             <div className="pt-6">
//               <blockquote className="border-l-4 pl-4">
//            {/*     <p>
//                   Using TailsUI has been like unlocking a secret design
//                   superpower. It's the perfect fusion of simplicity and
//                   versatility, enabling us to create UIs that are as stunning as
//                   they are user-friendly.
//                 </p>*/}

//                 <div className="mt-6 space-y-3">
//                   <cite className="block font-medium">Jane Smith, Parent</cite>
//                 {/*  <img
//                     className="h-5 w-fit dark:invert"
//                     src="https://html.tailus.io/blocks/customers/nvidia.svg"
//                     alt="Nvidia Logo"
//                     height="20"
//                     width="auto"
//                   />*/}
//                 </div>
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
