import { useState } from 'react'
import {contact, contactInfo} from '../data/data'


const Contact = () => {
  const [hoverContact, setHoverContact] = useState<number | null>(null);

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className="grid grid-cols-2 border border-white/10 h-full">
          {contact.map((item: contactInfo, index: number)  => (
            <div className="cursor-pointer border border-white/10 flex items-center justify-center text-4xl text-w hover:border-white/50 hover:shadow-2xl hover:shadow-white/30 duration-300 hover:bg-white"
                 onClick={() => handleClick(item.link)}
                 onMouseOver={() => setHoverContact(index)}
                 onMouseOut={() => setHoverContact(null)}>
              <item.icon className={` text-white/70 ${hoverContact === index ? `text-zinc-900 ` : ''}`} />
            </div>
          ))}
    </div>
  )
}

export default Contact