import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/91c99ba6-1151-41a5-a1af-1a3517243acf";
const img1 = "https://www.figma.com/api/mcp/asset/966c1865-e653-4bad-b5f3-4ad903ea680d";

type ButtonProps = {
  type?: "Hyperlink" | "Primary" | "Secondary";
  icon?: boolean;
};

export default function Button({ type = "Primary", icon = true }: ButtonProps) {
  const isHyperlinkAndIcon = type === "Hyperlink" && icon;
  const isHyperlinkAndNotIcon = type === "Hyperlink" && !icon;
  const isIconAndSecondaryOrHyperlink = (type === "Secondary" && icon) || (type === "Hyperlink" && icon);
  const isPrimaryAndIcon = type === "Primary" && icon;
  const isPrimaryAndNotIcon = type === "Primary" && !icon;
  const isSecondaryAndIcon = type === "Secondary" && icon;
  const isSecondaryAndNotIcon = type === "Secondary" && !icon;
  
  return (
    <div 
      id={isPrimaryAndIcon ? "node-1_402" : isPrimaryAndNotIcon ? "node-1_405" : isSecondaryAndIcon ? "node-1_407" : isSecondaryAndNotIcon ? "node-1_410" : isHyperlinkAndIcon ? "node-1_412" : isHyperlinkAndNotIcon ? "node-1_415" : ""} 
      className={`content-stretch flex items-center justify-center px-[12px] py-[16px] relative rounded-[32px] ${
        isPrimaryAndIcon ? "bg-[var(--color/text/accent,#cf0)] gap-[9px]" : 
        isPrimaryAndNotIcon ? "bg-[var(--color/text/accent,#cf0)]" : 
        isSecondaryAndIcon ? "border border-[#5514b4] border-solid gap-[9px]" : 
        isSecondaryAndNotIcon ? "border border-[#5514b4] border-solid" : 
        isHyperlinkAndIcon ? "gap-[9px]" : 
        isHyperlinkAndNotIcon ? "" : ""
      }`}
    >
      {(isPrimaryAndIcon || isSecondaryAndIcon || isHyperlinkAndIcon) && (
        <div 
          id={isPrimaryAndIcon ? "node-1_403" : isSecondaryAndIcon ? "node-1_408" : isHyperlinkAndIcon ? "node-1_413" : ""} 
          className="overflow-clip relative shrink-0 size-[14px]" 
          data-name="check"
        >
          <div 
            id={isPrimaryAndIcon ? "node-I1_403-373_13430" : isSecondaryAndIcon ? "node-I1_408-373_13430" : isHyperlinkAndIcon ? "node-I1_413-373_13430" : ""} 
            className="absolute inset-[17.18%_3.57%]" 
            data-name="Vector"
          >
            <div 
              className="absolute inset-0" 
              style={(isPrimaryAndIcon ? { "--fill-0": "rgba(3, 7, 18, 1)" } : isIconAndSecondaryOrHyperlink ? { "--fill-0": "rgba(85, 20, 180, 1)" } : undefined) as React.CSSProperties}
            >
              <img className="block max-w-none size-full" alt="" src={isPrimaryAndIcon ? img : isIconAndSecondaryOrHyperlink ? img1 : ""} />
            </div>
          </div>
        </div>
      )}
      <p 
        id={isPrimaryAndIcon ? "node-1_404" : isPrimaryAndNotIcon ? "node-1_406" : isSecondaryAndIcon ? "node-1_409" : isSecondaryAndNotIcon ? "node-1_411" : isHyperlinkAndIcon ? "node-1_414" : isHyperlinkAndNotIcon ? "node-1_416" : ""} 
        className={`font-["Inter:Regular",sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] ${
          isPrimaryAndIcon || isPrimaryAndNotIcon ? "text-[#030712]" : 
          isSecondaryAndIcon || isSecondaryAndNotIcon ? "text-[#5514b4]" : 
          isHyperlinkAndIcon || isHyperlinkAndNotIcon ? "[text-underline-position:from-font] decoration-solid text-[#5514b4] underline" : ""
        }`}
      >
        Button
      </p>
    </div>
  );
}
