import React from 'react';
import { bradmdConfig } from "../../bradmd.config"
import { Facebook , Twitter , Instagram , Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {
                        bradmdConfig.footerItems.map((item, idx) => (
                            <ul
                                className="space-y-4 text-black-300"
                                key={idx}
                            >
                                <h4 className="text-black font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="duration-150 hover:text-gray-400"

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-black-300">© 2022 {bradmdConfig.siteName} All rights reserved.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                        <a href="javascript:void()">
                            <Facebook className="hover:text-gray-500 duration-150" />
                        </a>
                        <a href="javascript:void()">
                            <Twitter className="hover:text-gray-500 duration-150" />
                        </a>
                        <a href="javascript:void()">
                            <Github className="hover:text-gray-500 duration-150" />
                        </a>
                        <a href="javascript:void()">
                            <Instagram className="hover:text-gray-500 duration-150" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}