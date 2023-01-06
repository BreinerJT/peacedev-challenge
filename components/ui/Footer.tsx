import { FC } from "react"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { CircleBackground, FooterItemList, FooterListContainer } from "./"
import { AppStoreButton, PlayStoreButton } from "./buttons"
import { services } from "../../data"
import { Category } from "../../interfaces"

interface Props {
  categories: Category[]
}

export const Footer: FC<Props> = ({ categories }) => {
  return (
    <div className="absolute px-24 left-0 w-screen bg-primary text-white overflow-hidden">

      <div className="flex gap-20 py-16">

        <div className="text-white">
          <h2 className="font-bold text-4xl pb-10">MegaMart</h2>

          <div className="grid gap-4">

            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="flex gap-2 items-center">
              <AiOutlineWhatsApp size={24} />
              <div>
                <h4>Whats App</h4>
                <p className="font-bold">+1 202-918-2132</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <BiPhoneCall size={24} />
              <div>
                <h4>Call Us</h4>
                <p className="font-bold">+1 202-918-2132</p>
              </div>

            </div>

            <div className="grid gap-2">
              <h3 className="font-bold text-lg">Download App</h3>
              <div className="flex gap-4 items-center">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            </div>

          </div>
        </div>

        <div className="flex gap-16 items-start">

          <FooterListContainer
            title="Most Popular Categories"
          >
            {
              categories.map(category => (
                <FooterItemList
                  key={ category } 
                  href={ category }
                  title={ category }
                />
              ))
            }
          </FooterListContainer>
          
          <FooterListContainer
            title="Customer Services"
          >
            {
              services.map(service => (
                <FooterItemList
                  key={ service.title } 
                  href={ service.href }
                  title={ service.title }
                />
              ))
            }
          </FooterListContainer>

        </div>

      </div>
      
      <div className="w-full h-[2px] bg-[#0C9BDA] rounded-full" />
      <p className="text-center text-sm py-6">
        © { new Date().getFullYear() } All rights reserved. Reliance Retail Ltd.
      </p>
       
       <div className="absolute -top-28 -right-28">
        <CircleBackground 
          externalRadius={450} 
          internalRadius={426} 
        />
       </div>

    </div>
  )
}
