import React from 'react';

const imgIcon = "https://www.figma.com/api/mcp/asset/3054a438-3ab7-4f15-86cf-dfa2333b5316";

type LinksProps = {
  className?: string;
  icon?: "on";
  text?: "off";
};

function Links({ className, icon = "on", text = "off" }: LinksProps) {
  return (
    <div data-node-id="1:167" className={className}>
      <div data-node-id="1:168" className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
        <div data-node-id="1:169" className="relative shrink-0 size-[20px]" data-name="Icon">
          <img className="block max-w-none size-full" alt="" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

type UtilityLinksProps = {
  utilityLinks?: "1" | "2" | "3" | "4" | "5" | "6";
};

export default function UtilityLinks({ utilityLinks = "1" }: UtilityLinksProps) {
  const is1 = utilityLinks === "1";
  const is2 = utilityLinks === "2";
  const is2Or3Or4Or5Or6 = ["2", "3", "4", "5", "6"].includes(utilityLinks);
  const is3 = utilityLinks === "3";
  const is4 = utilityLinks === "4";
  const is5 = utilityLinks === "5";
  const is6 = utilityLinks === "6";
  
  return (
    <div 
      id={is1 ? "node-1_177" : is2 ? "node-1_179" : is3 ? "node-1_182" : is4 ? "node-1_186" : is5 ? "node-1_191" : is6 ? "node-1_197" : ""} 
      className={is1 ? "content-stretch flex items-center relative" : is2Or3Or4Or5Or6 ? "content-stretch flex gap-[16px] items-center relative" : ""}
    >
      <Links className="content-stretch flex h-[24px] items-center relative shrink-0" />
      {is2Or3Or4Or5Or6 && <Links className="content-stretch flex h-[24px] items-center relative shrink-0" />}
      {["3", "4", "5", "6"].includes(utilityLinks) && <Links className="content-stretch flex h-[24px] items-center relative shrink-0" />}
      {["4", "5", "6"].includes(utilityLinks) && <Links className="content-stretch flex h-[24px] items-center relative shrink-0" />}
      {["5", "6"].includes(utilityLinks) && <Links className="content-stretch flex h-[24px] items-center relative shrink-0" />}
      {is6 && <Links className="content-stretch flex h-[24px] items-center relative shrink-0" />}
    </div>
  );
}
