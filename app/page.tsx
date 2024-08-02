import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const ProfilePicture = () => {
  return (
    <img src="/me.png" alt="Profile picture of Rahul" className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[350px] md:w-2/5 p-3" />
  )
}

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>  🏡 Based in Delhi NCR,India</li>
      <li>👾 I speak fluent JavaScript and sarcasm</li>
      <li><a href="mailto:rahuloverhere999@gmail.com">📧 Let's get in touch!</a></li>
    </ul>
  )
}

const WavingHand = () => {
  return (
    <span className="animate-wave inline-block">🤚🏻</span>
  )
}

const socials = [
  {
    icon: <FaInstagram/>,
    href: "https://www.instagram.com/rahuloverhere"
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/OrneyVortex"
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/rahuloverhere/"
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/rahulcodeshere"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">Rahul</span><WavingHand />
          </h1>
          <h2 className="text-3xl">I'm a Software Developer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <br />
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map((social, index) => (
            <li key={index} className="hover:scale-125 hover:text-white transition-all ease-in-out"><Link href={social.href} target="_blank">{social.icon}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
