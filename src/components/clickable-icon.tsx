import Image from "next/image";

interface ClickableIconProps {
  altText: string
  link: string
  imgSrc: string
}

export default function ClickableIcon({ imgSrc, altText, link }: ClickableIconProps) {
  return(
    <a
      className="hover:underline hover:underline-offset-4"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src={imgSrc}
        alt={altText}
        width={30}
        height={30}
      />
    </a>
  )
}