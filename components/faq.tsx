'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export default function FAQsTwo() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What grade levels do you serve?',
      answer:
        'We offer educational programs from Kindergarten through JHS and SHS (Senior High School).',
    },
    {
      id: 'item-2',
      question: 'How much is the school fees?',
      answer:
        'Tuition starts at GHS 2,000 per term for Kindergarten, GHS 2,800 for Primary, and up to GHS 4,500 per term for SHS. Discounts are available for siblings and early payments.',
    },
    {
      id: 'item-3',
      question: 'Are there any extra charges apart from tuition?',
      answer:
        'Yes. Additional costs may include books, uniforms, PTA dues, ICT levy, and meals. A detailed breakdown is provided during enrollment.',
    },
    {
      id: 'item-4',
      question: 'Do you offer scholarships or financial aid?',
      answer:
        'Yes. We offer limited scholarships for outstanding academic performance and financial assistance for families in need. Application is required each academic year.',
    },
    {
      id: 'item-5',
      question: 'How can I apply to the school?',
      answer:
        'Visit our Admissions page to start your application online, or pick up a form at the school office. Our admissions team is happy to assist you every step of the way.',
    },
  ];

  return (
    <section className="py-16 md:py-24" id="faqs">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Get answers to common questions about school fees, admissions, and academic life.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-6 py-4 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-dashed last:border-none"
              >
                <AccordionTrigger className="cursor-pointer text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-2 text-center text-sm md:text-base">
            Can’t find what you’re looking for? Contact our{' '}
            <Link href="#contact" className="text-primary font-medium hover:underline">
              admissions office
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}


// 'use client';

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';
// import Link from 'next/link';

// export default function FAQsTwo() {
//   const faqItems = [
//     {
//       id: 'item-1',
//       question: 'What grade levels do you serve?',
//       answer:
//         'We offer educational programs from Kindergarten through JHS and SHS (Senior High School).',
//     },
//     {
//       id: 'item-2',
//       question: 'How much is the school fees?',
//       answer:
//         'Tuition starts at GHS 2,000 per term for Kindergarten, GHS 2,800 for Primary, and up to GHS 4,500 per term for SHS. Discounts are available for siblings and early payments.',
//     },
//     {
//       id: 'item-3',
//       question: 'Are there any extra charges apart from tuition?',
//       answer:
//         'Yes. Additional costs may include books, uniforms, PTA dues, ICT levy, and meals. A detailed breakdown is provided during enrollment.',
//     },
//     {
//       id: 'item-4',
//       question: 'Do you offer scholarships or financial aid?',
//       answer:
//         'Yes. We offer limited scholarships for outstanding academic performance and financial assistance for families in need. Application is required each academic year.',
//     },
//     {
//       id: 'item-5',
//       question: 'How can I apply to the school?',
//       answer:
//         'Visit our Admissions page to start your application online, or pick up a form at the school office. Our admissions team is happy to assist you every step of the way.',
//     },
//   ];

//   return (
//     <section className="py-16 md:py-24">
//       <div className="mx-auto max-w-5xl px-4 md:px-6">
//         <div className="mx-auto max-w-xl text-center">
//           <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-muted-foreground mt-4 text-balance">
//             Get answers to common questions about school fees, admissions, and academic life.
//           </p>
//         </div>

//         <div className="mx-auto mt-12 max-w-xl">
//           <Accordion
//             type="single"
//             collapsible
//             className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
//           >
//             {faqItems.map((item) => (
//               <AccordionItem key={item.id} value={item.id} className="border-dashed">
//                 <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
//                   {item.question}
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-base">{item.answer}</p>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>

//           <p className="text-muted-foreground mt-6 px-8">
//             Can’t find what you’re looking for? Contact our{' '}
//             <Link href="#" className="text-primary font-medium hover:underline">
//               admissions office
//             </Link>
//             .
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }