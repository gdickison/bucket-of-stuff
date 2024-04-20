'use client'

// This is made for Next JS. This uses heroicons, but doesn't have to. The styling is done with Tailwind.
// The basic structure is a logo on the left, a navigation menu on the right, and at least one dropdown navigation item.
// The original template had icons on the large-screen dropdown navigation item - this has none, but they can be reintroduced.


/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import { ChevronRightIcon, HomeModernIcon, BuildingStorefrontIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline"
import MobileNavContainer from "./MobileNavContainer"

export default function NavBar () {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuAccordianClick () {
    setMenuOpen(!menuOpen)
  }

  function handleClick () {
    menuOpen ? setMenuOpen(false) : null
  }

  const menuCategories = [
    {
      name: 'Residential',
      href: 'residential',
      value: 'residential',
      icon: <HomeModernIcon/>
    },
    {
      name: 'Commercial',
      href: 'commercial',
      value: 'commercial',
      icon: <BuildingStorefrontIcon/>
    },
    {
      name: 'Infrastructure & Industrial',
      href: 'infrastructure-industrial',
      value: 'infrastructure',
      icon: <BuildingOffice2Icon/>
    },
    {
      name: 'Cabins & Decks',
      href: 'cabins-decks',
      value: 'cabins',
      icon: null
    },
    {
      name: 'Churches',
      href: 'churches',
      value: 'churches',
      icon: null
    }
  ]

  return (
    <header className="bg-[#c2d7b7] z-10">
      <div className="p-4 lg:py-2 mx-auto lg:my-0 max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between relative p-6 lg:px-8">
          <div className="hidden lg:flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" onClick={handleClick}>
              <span className="sr-only">Kerry Garrett Architect LLC</span>
              <img className="h-10 md:h-14 w-auto" src="/images/kga_logo_sm_transparent.png" alt="" />
            </Link>
          </div>
          <MobileNavContainer
            menuCategories={menuCategories}
            handleMenuClick={handleMenuAccordianClick}
          />
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button type="button" className="flex items-center gap-x-1 text-sm leading-6 tracking-widest uppercase text-gray-900" aria-expanded="false" onClick={handleMenuAccordianClick}>
                Portfolio
                <ChevronRightIcon
                  className={`h-4 w-4 flex-none text-gray-400 duration-200 ${menuOpen ? 'rotate-90' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ${menuOpen ? 'transition ease-in duration-150 "opacity-100 translate-y-1' : 'transition ease-out duration-200 opacity-0 translate-y-0'} text-sm leading-6 tracking-widest uppercase`}>
                <div className="p-4">
                  {menuCategories.map(category => {
                    return (
                      <DropdownContent
                        key={category.value}
                        category={category}
                        clickHandler={handleMenuAccordianClick}
                      />
                    )
                  })}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <Link href="#" className="flex items-center justify-center gap-x-2.5 p-3 hover:bg-gray-100">
                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
                    </svg>
                    Watch demo
                  </Link>
                  <Link href="#" className="flex items-center justify-center gap-x-2.5 p-3 hover:bg-gray-100">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-sm leading-6 tracking-widest uppercase text-gray-700" onClick={handleClick}>About</Link>
            <Link href="/contact" className="text-sm leading-6 tracking-widest uppercase text-gray-700" onClick={handleClick}>Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export function DropdownContent ({category, clickHandler}) {
  return (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" onClick={clickHandler}>
      <div className="flex-auto">
        <Link href={`/${category.href}`} className="block">
          {category.name}
          <span className="absolute inset-0"></span>
        </Link>
      </div>
    </div>
  )
}
