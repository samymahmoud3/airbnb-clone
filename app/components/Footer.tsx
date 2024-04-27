import Link from "next/link"

const Footer = () => {
  const links = [
    {
      title: "About",
      links: [
        'How Airbnb works',
        'Newsroom',
        'Investors',
        'Airbnb Plus',
        'Airbnb Luxe',
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        'Accessability',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals',
        'PapaFam',
      ],
    },
    {
      title: "HOST",
      links: [
        'Accessability',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals',
        'PapaFam',
      ],
    },
    {
      title: "SUPPORT",
      links: [
        'Accessability',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals',
        'PapaFam',
      ],
    },
  ]
  return (
    <footer className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-2 py-12">
        {
          links.map((link) => (
            <div key={link.title} className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">{link.title}</h5>
              {
                link.links.map((item) => (
                  <Link href={item} key={item} className="block">{item}</Link>
                ))
              }
            </div>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer