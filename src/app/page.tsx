import ClickableIcon from "@/components/clickable-icon";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-cover bg-center bg-no-repeat grayscale p-8 pb-20 gap-16 sm:p-20 bg-[url('/colden-from-marcy-dam.jpg')]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <p className="text-5xl text-center text-shadow-md text-shadow-black">
          david r. saeva<br/>
          developer
        </p>
        <div className="flex gap-[24px] align-self-center">
          <ClickableIcon
            altText="Github"
            imgSrc="/github.svg"
            link="https://www.github.com/drsaeva"
          />
          <ClickableIcon
            altText="LinkedIn"
            imgSrc="/linkedin.svg"
            link="https://www.linkedin.com/in/david-r-saeva"
          />
          <ClickableIcon
            altText="Contact Me"
            imgSrc="/email.svg"
            link="mailto:hi@david-saeva.com"
          />
        </div>
      </main>
    </div>

  );
}
