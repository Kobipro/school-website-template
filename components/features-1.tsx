import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Empowering Students to Excel
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            A modern approach to education, combining tradition with innovation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Zap className="size-6" aria-hidden />}
            title="Personalized Learning"
            description="Tailored educational paths that adapt to each student's strengths, interests, and goals."
          />

          <FeatureCard
            icon={<Settings2 className="size-6" aria-hidden />}
            title="Experienced Faculty"
            description="Dedicated educators committed to nurturing student success through mentorship and guidance."
          />

          <FeatureCard
            icon={<Sparkles className="size-6" aria-hidden />}
            title="Smart Classrooms"
            description="AI-powered tools and interactive tech create a dynamic and engaging learning environment."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="group shadow-zinc-950/5 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardDecorator>{icon}</CardDecorator>
        <h3 className="mt-6 text-lg font-medium">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto size-36 duration-200 group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div
        aria-hidden
        className="bg-radial to-background absolute inset-0 from-transparent to-75%"
      />
      <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
        {children}
      </div>
    </div>
  );
}


// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Settings2, Sparkles, Zap } from "lucide-react";
// import { ReactNode } from "react";

// export default function Features() {
//   return (
//     <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
//       <div className="@container mx-auto max-w-5xl px-6">
//         <div className="text-center">
//           <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
//               Empowering Students to Excel
//           </h2>
//           <p className="mt-4">
//              A modern approach to education, combining tradition with innovation.
//           </p>
//         </div>
//         <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
//           <Card className="group shadow-zinc-950/5">
//             <CardHeader className="pb-3">
//               <CardDecorator>
//                 <Zap className="size-6" aria-hidden />
//               </CardDecorator>

//               <h3 className="mt-6 font-medium">Personalized Learning</h3>
//             </CardHeader>

//             <CardContent>
//               <p className="text-sm">
//                Tailored educational paths that adapt to each student's strengths, interests, and goals.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="group shadow-zinc-950/5">
//             <CardHeader className="pb-3">
//               <CardDecorator>
//                 <Settings2 className="size-6" aria-hidden />
//               </CardDecorator>

//               <h3 className="mt-6 font-medium">Experienced Faculty</h3>
//             </CardHeader>

//             <CardContent>
//               <p className="mt-3 text-sm">
//                   Dedicated educators committed to nurturing student success through mentorship and guidance.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="group shadow-zinc-950/5">
//             <CardHeader className="pb-3">
//               <CardDecorator>
//                 <Sparkles className="size-6" aria-hidden />
//               </CardDecorator>

//               <h3 className="mt-6 font-medium">Smart Classrooms</h3>
//             </CardHeader>

//             <CardContent>
//               <p className="mt-3 text-sm">
//                AI-powered tools and interactive tech create a dynamic and engaging learning environment.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// const CardDecorator = ({ children }: { children: ReactNode }) => (
//   <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
//     <div
//       aria-hidden
//       className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
//     />
//     <div
//       aria-hidden
//       className="bg-radial to-background absolute inset-0 from-transparent to-75%"
//     />
//     <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
//       {children}
//     </div>
//   </div>
// );
