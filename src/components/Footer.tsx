import Link from "next/link";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-32 pb-12 mb-12 self-end text-grey dark:text-slate text-sm">
      <div className="flex justify-end flex-row gap-4">
        <Link
          href="https://linkedin.com/in/winston-tandi"
          className="hover:underline hover:underline-offset-2 self-end"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/WinstonT"
          className="hover:underline hover:underline-offset-2 self-end"
        >
          GitHub
        </Link>
      </div>
      <div className="mt-2">{`© ${year} by Winston Tandi`}</div>
    </footer>
  );
}
