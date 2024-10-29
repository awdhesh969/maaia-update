import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

function CollectionSection({ data }) {
    // console.log("👉🏼👉🏼👉🏼 => CollectionSection => data:", data)
    return (
        <div
            style={{ backgroundImage: `url(${data?.mediaItemUrl})` }}
            className={`bg-cover bg-center h-screen py-20 w-full relative`}>
            <div className="absolute bg-gradient-to-t from-black to-transparent  left-0 right-0 bottom-0 top-0" />
            <div className="absolute lg:left-[10vh] left-5 lg:top-[10vh] top-[15vh] text-white">
                <div className="text-3xl uppercase leading-relaxed lg:text-[28px] font-satoshi">
                    {data?.collectionSectionTitle || 'Collection'}
                </div>
            </div>
            <div className="absolute lg:left-[10vh] left-5 lg:bottom-[10vh] right-5 bottom-[10vh] text-white">
                <div className="lg:text-6xl text-3xl uppercase font-bold leading-relaxed font-satoshi">
                    {data?.title}
                </div>
                <div className="lg:text-xl lg:mt-5 mt-2 text-3xl uppercase leading-relaxed lg:text-[22px] font-satoshi">
                    {data?.location} 
                </div>
                <div className="lg:mt-5 mt-2 flex gap-10 justify-between lg:justify-start capitalize">
                    {data?.is_launching_soon &&
                        <span className="my-auto lg:text-[16px] font-neueHaasUnicaPro">
                            {data?.launchingSoonText}
                        </span>
                    }
                    <Link href="/the-collection">
                        <MdOutlineArrowOutward className="my-auto text-3xl bg-black cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionSection