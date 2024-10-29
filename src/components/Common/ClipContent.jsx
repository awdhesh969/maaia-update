import React, { useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ClipContent = ({ title, content, id, showItems, toggleItem }) => {
    const dropDownContentRef = useRef(null);

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (dropDownContentRef.current) {
                if (showItems[id]) {
                    dropDownContentRef.current.style.height = 'auto';
                }
            }
        };

        const contentElement = dropDownContentRef.current;
        if (contentElement) {
            contentElement.addEventListener('transitionend', handleTransitionEnd);
            return () => contentElement.removeEventListener('transitionend', handleTransitionEnd);
        }
    }, [showItems, id]);

    return (
        <div className="">
            <div className="accordion mx-auto px-4 w-full flex justify-between items-center cursor-pointer border -mt-[1px]">
                <div className="accordion-item" key={id}>
                    <div
                        className="accordion-header flex justify-between items-center text-[24px] min-h-[70px] lg:text-[22px] font-neueHaasUnicaPro"
                        onClick={() => toggleItem(id)}
                    >
                        {title}
                        <div className="relative cursor-pointer h-6 w-6">
                            <div className={`${showItems[id] ? 'top-1/2 left-1 right-1 -rotate-45' : 'top-2 left-1 right-1'} h-[2px] absolute duration-700 transform origin-center rounded-full bg-[#77787C99]`} />
                            <div className={`${showItems[id] ? 'bottom-1/2 rotate-45 left-1 right-1 -mb-[2px]' : 'bottom-2 left-1 right-1'} h-[2px] absolute duration-700 origin-center transform rounded-full bg-[#77787C99]`} />
                        </div>
                    </div>
                    <div
                        ref={dropDownContentRef}
                        className={`accordion-content overflow-hidden transition-height duration-700 ease-in-out delay-0`}
                        style={{
                            height: showItems[id] ? `${dropDownContentRef.current?.scrollHeight}px` : "0px",
                        }}
                    >
                        <div className="pb-8 lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro">{content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClipContent;
