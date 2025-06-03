import { HeroHeader } from "@/components/hero8-header";
import FooterSection from "@/components/footer";

export default function AchievementsSection() {
  return (
    <>
      < HeroHeader />

      <section className="py-16 md:py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Our Achievements
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Through dedication, innovation, and community, we’ve reached key milestones that reflect our growth and excellence in education.
            </p>
          </div>

          <ul className="mt-12 space-y-10 text-left text-zinc-700 dark:text-zinc-200">
            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">National Academic Recognition</p>
              <p className="mt-2 text-base md:text-lg">
                Our students have consistently excelled in national exams, placing among the top performers in the region. These achievements highlight our commitment to academic rigor and support systems that help learners thrive.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Award-Winning Robotics Team</p>
              <p className="mt-2 text-base md:text-lg">
                Our robotics team has earned multiple awards at inter-school technology competitions, showcasing our leadership in STEM and innovation. Students build and program autonomous robots, demonstrating advanced problem-solving skills.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Top Sports Performers</p>
              <p className="mt-2 text-base md:text-lg">
                We have earned regional titles in football, athletics, and basketball, nurturing discipline and teamwork. Our students have gone on to represent their districts and regions in national tournaments.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">Community Service & Impact</p>
              <p className="mt-2 text-base md:text-lg">
                From clean-up campaigns to donation drives, our students actively contribute to community development. These initiatives build empathy and civic responsibility while strengthening ties with the local community.
              </p>
            </li>

            <li className="list-disc list-inside">
              <p className="font-semibold text-lg md:text-xl">International Exchange & Exposure</p>
              <p className="mt-2 text-base md:text-lg">
                Selected students have participated in international exchange programs and global academic competitions, expanding their worldview and showcasing the school on an international platform.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
