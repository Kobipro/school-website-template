using tailwindcss in a react functional component create a component that talks about the schools mision we are importing
navbar and footer from components.each mission statement should be a bullet point.texts should be responsive




import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MissionSection() {
  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              We are committed to shaping well-rounded, future-ready individuals through excellence in education, values, and innovation.
            </p>
          </div>

          <ul className="mt-12 space-y-10 text-left text-zinc-700 dark:text-zinc-200">
            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Academic Excellence</p>
              <p className="mt-2 text-base md:text-lg">
                We aim to deliver a high standard of education that challenges students to think critically, solve problems creatively, and master foundational skills across all disciplines. Our curriculum is designed to prepare students for national and international success.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Moral & Ethical Values</p>
              <p className="mt-2 text-base md:text-lg">
                We instill integrity, honesty, and respect in every learner. By modeling and reinforcing strong moral behavior, we aim to develop responsible citizens who make positive contributions to society.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Holistic Development</p>
              <p className="mt-2 text-base md:text-lg">
                Our mission goes beyond academics—we focus on nurturing each child's physical, emotional, social, and spiritual growth. Sports, arts, leadership, and life skills are embedded in our approach to produce confident, adaptable individuals.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Technology & Innovation</p>
              <p className="mt-2 text-base md:text-lg">
                We embrace modern tools and digital learning to equip students for the future. Through STEM education, digital literacy, and creative problem-solving, learners are prepared to thrive in a tech-driven world.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Community & Global Citizenship</p>
              <p className="mt-2 text-base md:text-lg">
                We foster a strong sense of community involvement, empathy, and awareness of global issues. Students are encouraged to engage with their communities and understand their role in building a better world.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
