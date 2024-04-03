import React from 'react'
import Image from 'next/image'
import FooterSection from './footer-section'

const footerShop = ['Coffee', 'Merch', 'Events']

const footerLocations = ['New York', 'Melbourne', 'San Francisco']

const footerSocials = ['Instagram', 'Facebook', 'Twitter']

export default function Footer() {
  return (
    <footer className=" bg-zinc-300 mt-auto flex flex-1 items-center justify-around p-4 gap-4 flex-wrap-reverse">
      <FooterSection title="Shop" links={footerShop} />
      <FooterSection title="Locations" links={footerLocations} />
      <FooterSection title="Socials" links={footerSocials} />
      <Image
        className="pb-4 sm:pb-initial"
        src="/logo.svg"
        alt="logo"
        width={100}
        height={100}
      />
    </footer>
  )
}
