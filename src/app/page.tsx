import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-cover bg-center bg-no-repeat grayscale p-8 pb-20 gap-16 sm:p-20 bg-[url('/colden-from-marcy-dam.jpg')]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <p className="text-5xl text-center text-shadow-md text-shadow-black">
          david r. saeva<br/>
          developer
        </p>
        <div className="flex gap-[24px] align-self-center">
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://www.github.com/drsaeva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="Github"
              width={24}
              height={24}
            />
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            href="www.linkedin.com/in/david-r-saeva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </div>
      </main>
    </div>

  );
}
