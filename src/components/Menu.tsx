import React from 'react';

type MenuProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Menu({ className, property1 = "Default" }: MenuProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  
  return (
    <div 
      id={isDefault ? "node-1_100" : isVariant2 ? "node-1_102" : ""} 
      className={className || "content-stretch flex items-center justify-center relative"}
    >
      <p 
        id={isDefault ? "node-1_101" : isVariant2 ? "node-1_103" : ""} 
        className={isDefault ? 'font-[family-name:var(--fontfamily/body,"Inter:Regular",sans-serif)] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)]' : isVariant2 ? '[text-underline-position:from-font] decoration-solid font-[family-name:var(--fontfamily/body,"Inter:Regular",sans-serif)] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)] underline' : ""}
      >
        Home
      </p>
    </div>
  );
}
