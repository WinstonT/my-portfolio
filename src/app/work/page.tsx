import Link from "next/link";

export default function Home() {
  interface Job {
    company: string;
    title: string;
    date: string;
    link: string;
    points: string[];
  }

  const jobs: Job[] = [
    {
      company: "Invigilo AI",
      title: "Software Engineer",
      date: "Sep 2024 - Now",
      link: "https://invigilo.ai/",
      points: [],
    },
    {
      company: "Whiz (YC W22)",
      title: "Software Engineer",
      date: "Aug 2022 - Jul 2023",
      link: "https://whiz.id/en/",
      points: [
        "Oversaw end-to-end development of several key features of the Whiz app",
        "Optimised various parts of the codebase, and improved CI/CD pipeline by adding code coverage tools",
        "Communicated and worked closely with third-party vendor (BCA) to implement a disbursement system into Whiz app, as well as completed User Acceptance Testing",
      ],
    },
    {
      company: "Blibli",
      title: "SDET",
      date: "Feb 2021 - Feb 2022",
      link: "https://www.blibli.com/",
      points: [
        "Researched new technologies and implemented them into demo projects for testing, then presented my findings to the team",
        "Wrote unit and integration tests for several projects, and maintained over 90% code coverage",
      ],
    },
    {
      company: "Coding Bee Academy",
      title: "Educator",
      date: "Jun 2019 - Mar 2020",
      link: "https://codingbee.id/en/homepage/",
      points: [
        "Tutored students aged 12-16 in Python, HTML, CSS, JavaScript, and computer logic",
        "Wrote Python guidebook to help students better understand concepts",
        "Trained other educators in Python and HTML, CSS and JavaScript",
      ],
    },
  ];

  return (
    <>
      <h1 className="font-bold text-4xl">Work</h1>
      <ul className="divide-y divide-grey mt-16">
        {jobs.map((job) => {
          return (
            <li key={job.company} className="py-12">
              <div className="lg:grid lg:grid-cols-4 lg:items-baseline lg:space-y-0">
                <div className="text-grey dark:text-slate mb-4">{job.date}</div>
                <div className="lg:col-span-3">
                  <Link href={job.link}>
                    <h2 className="font-bold text-2xl">{job.company}</h2>
                  </Link>
                  <div className="text-blue">{job.title}</div>
                  {job.points.length > 0 && (
                    <ul className="ml-4 mt-6">
                      {job.points.map((point) => {
                        return (
                          <li key={point} className="list-disc my-1">
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
