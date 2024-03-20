'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <Link href={"/products"}>
            <MenuItem
            setActive={setActive} active={active} item="Products"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/products">All Products</HoveredLink>
            <HoveredLink href="/products">
            SLIDES
            </HoveredLink>
            <HoveredLink href="/products">
              PLASTIC JARS
            </HoveredLink>
            <HoveredLink href="/products">SHOWCASE</HoveredLink>
            <HoveredLink href="/products">
              MODELS
            </HoveredLink>
            <HoveredLink href="/products">
            CLASS WORK MATERIAL
            </HoveredLink>
               </div>
            </MenuItem>
            </Link>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">       
            </MenuItem>
            </Link>
            <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About">       
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar