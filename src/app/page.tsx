import Link from "next/link";
import { FiFileText, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="mt-20">
      <h2 className="font-bold text-lg">Hello, my name is</h2>
      <h1 className="bg-gradient-to-r from-blue to-pink inline-block text-transparent bg-clip-text text-6xl font-bold mt-2">
        Winston Tandi
      </h1>
      <div className="mt-12">Welcome to my slightly fancier resume.</div>
      <div className="mt-4">
        I am a software engineer passionate about creating exciting products
        that can make a difference. I have previous experience working in
        fast-paced startups, where I led the development for multiple projects,
        as well as doing RnD at a large e-commerce company. When not typing
        code, I enjoy playing video games, drinking overpriced coffee and
        staring at cute dogs.
      </div>
      <div className="mt-12 font-bold text-lg">Let&apos;s Connect</div>
      <div className="flex flex-col gap-4 mt-2 lg:grid lg:grid-cols-4">
        <Link href="mailto:tandiw22@gmail.com" className="group min">
          <div className="px-4 py-2 rounded-lg bg-ghost dark:bg-navy">
            <div className="flex flex-row shrink items-center gap-2">
              <FiMail size={40} />
              <div className="leading-4">
                <div>Mail</div>
                <div className="text-grey dark:text-slate text-sm group-hover:text-pink">
                  tandiw22@gmail.com
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="https://linkedin.com/in/winston-tandi"
          target="_blank"
          className="group"
        >
          <div className="px-4 py-2 rounded-lg bg-ghost dark:bg-navy">
            <div className="flex flex-row shrink items-center gap-2">
              <FiLinkedin size={40} />
              <div className="leading-4">
                <div>LinkedIn</div>
                <div className="text-grey dark:text-slate text-sm group-hover:text-pink">
                  Connect with me
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="https://linkedin.com/in/winston-tandi"
          target="_blank"
          className="group"
        >
          <div className="px-4 py-2 rounded-lg bg-ghost dark:bg-navy">
            <div className="flex flex-row shrink items-center gap-2">
              <FiFileText size={40} />
              <div className="leading-4">
                <div>Resume</div>
                <div className="text-grey dark:text-slate text-sm group-hover:text-pink">
                  Download
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
