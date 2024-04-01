import React from 'react'

type FooterSectionProps = {
  title: string
  links: string[]
  className?: string
}

export default function FooterSection({
  title,
  links,
  className,
}: FooterSectionProps) {
  return (
    <section>
      <h3 className="font-bold">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </section>
  )
}
