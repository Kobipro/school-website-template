import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32 bg-muted text-foreground">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-5xl">
          Discover the Difference at Our School
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Join a community where students grow, achieve, and thrive.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/admissions">
              <span>Apply Now</span>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/tour">
              <span>Schedule a Tour</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function CallToAction() {
//   return (
//     <section className="py-16 md:py-32">
//       <div className="mx-auto max-w-5xl px-6">
//         <div className="text-center">
//           <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
//             Discover the Difference at Our School
//           </h2>
//           <p className="mt-4">Join a community where students grow, achieve, and thrive.</p>

//           <div className="mt-12 flex flex-wrap justify-center gap-4">
//             <Button asChild size="lg">
//               <Link href="/admissions">
//                 <span>Apply Now</span>
//               </Link>
//             </Button>

//             <Button asChild size="lg" variant="outline">
//               <Link href="/">
//                 <span>Schedule a Tour</span>
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




