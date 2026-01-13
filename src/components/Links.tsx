import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/7df93dcc-52b5-46a3-9f87-3a954407d4d1";

type LinksProps = {
  icon?: boolean;
  text?: boolean;
};

export default function Links({ icon = true, text = true }: LinksProps) {
  const isIconAndNotText = icon && !text;
  const isIconAndText = icon && text;
  const isNotIconAndText = !icon && text;
  const isTextAndTrueOrFalse = (icon && text) || (!icon && text);
  
  return (
    <div 
      id={isIconAndText ? "node-1_150" : isIconAndNotText ? "node-1_156" : isIconAndText ? "node-1_161" : isIconAndNotText ? "node-1_167" : isNotIconAndText ? "node-1_172" : isNotIconAndText ? "node-1_174" : ""} 
      className={`content-stretch flex h-[24px] items-center relative ${
        isIconAndText || isIconAndText ? "gap-[var(--spacing/m,8px)]" : 
        isIconAndNotText || isIconAndNotText || isNotIconAndText || isNotIconAndText ? "" : ""
      }`}
    >
      {(isIconAndText || isIconAndNotText || isIconAndText || isIconAndNotText) && (
        <div 
          id={isIconAndText ? "node-1_151" : isIconAndNotText ? "node-1_157" : isIconAndText ? "node-1_162" : isIconAndNotText ? "node-1_168" : ""} 
          className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" 
          data-name="Container"
        >
          <div 
            id={isIconAndText ? "node-1_152" : isIconAndNotText ? "node-1_158" : isIconAndText ? "node-1_163" : isIconAndNotText ? "node-1_169" : ""} 
            className="relative shrink-0 size-[20px]" 
            data-name="Icon"
          >
            <img className="block max-w-none size-full" alt="" src={img} />
          </div>
        </div>
      )}
      {(isIconAndText || isIconAndText || isNotIconAndText || isNotIconAndText) && (
        <p 
          id={isIconAndText ? "node-1_155" : isIconAndText ? "node-1_166" : isNotIconAndText ? "node-1_173" : isNotIconAndText ? "node-1_175" : ""} 
          className={isTextAndTrueOrFalse ? 'font-[family-name:var(--fontfamily/body,"Inter:Regular",sans-serif)] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)]' : isTextAndTrueOrFalse ? '[text-underline-position:from-font] decoration-solid font-[family-name:var(--fontfamily/body,"Inter:Regular",sans-serif)] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)] underline' : ""}
        >
          Why choose us?
        </p>
      )}
    </div>
  );
}
