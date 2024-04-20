/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline"

export default function MobileNavContainer ({menuCategories, handleMenuAccordianClick}) {
  const [ariaExpanded, setAriaExpanded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleBurgerClick () {
    !ariaExpanded ?
      setAriaExpanded(true) : (setAriaExpanded(false), setMenuOpen(false))
  }

  function handleMobileLogoClick () {
    ariaExpanded ? (setAriaExpanded(false), setMenuOpen(false)) : null
  }

	return (
    <>
      <div className="flex flex-1 lg:hidden">
        <Link href="/" className="-m-1.5 p-1.5" onClick={handleMobileLogoClick}>
          <span className="sr-only">Kerry Garrett Architect LLC</span>
          <img className="h-10 md:h-14 w-auto" src="/images/kga_logo_sm_transparent.png" alt="" />
        </Link>
      </div>
      <button
        className="button-one lg:hidden absolute right-0"
        aria-controls="primary-navigation"
        aria-expanded={ariaExpanded}
        onClick={handleBurgerClick}
      >
        <div className="hamburger">
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
      </button>
      <div className={`p-6 w-full bg-bg-lightest border border-gray-200 rounded-md shadow-md lg:hidden absolute top-20 right-0 z-10 bg-[#c2d7b7] ${ariaExpanded ? 'transition ease-in duration-150 "opacity-100 translate-y-1' : 'h-0 transition ease-out duration-200 opacity-0 translate-y-0'} text-sm leading-6 tracking-widest uppercase text-gray-700`}>
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <div className="-mx-3">
              <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 hover:bg-gray-50 leading-6 tracking-widest uppercase" aria-controls="disclosure-1" aria-expanded="false" onClick={() => setMenuOpen(!menuOpen)}>
                Portfolio
                <ChevronRightIcon
                  className={`h-4 w-4 flex-none text-gray-400 duration-200 ${menuOpen ? 'rotate-90' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div className={`space-y-2 ${menuOpen ? 'transition ease-in duration-150 "opacity-100 translate-y-1' : 'h-0 transition ease-out duration-200 opacity-0 translate-y-0'}`} id="disclosure-1">
                {menuCategories.map(category => {
                  return (
                    <MobileDropdownContent
                      key={category.value}
                      category={category}
                      clickHandler={handleMenuAccordianClick}
                      menuOpen={menuOpen}
                    />
                  )
                })}
              </div>
            </div>
            <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={handleBurgerClick}>About</Link>
            <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={handleBurgerClick}>Contact Us</Link>
          </div>
        </div>
      </div>
    </>
	);
}

export function MobileDropdownContent ({category, clickHandler, menuOpen}) {
  return (
    <Link href={`/${category.href}`} className={`${menuOpen ? 'block' : 'hidden'} rounded-lg py-2 pl-6 pr-3 lg:hover:bg-gray-50`} onClick={clickHandler}>{category.name}</Link>
  )
}
