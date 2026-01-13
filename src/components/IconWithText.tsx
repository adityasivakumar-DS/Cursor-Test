import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/7c7ed929-a3e4-4365-92cc-35a9937418e0";

type IconWithTextProps = {
  icon?: boolean;
};

export default function IconWithText({ icon = true }: IconWithTextProps) {
  const isIcon = icon;
  const isNotIcon = !icon;
  
  return (
    <div 
      id={isIcon ? "node-1_396" : isNotIcon ? "node-1_398" : ""} 
      className={isIcon ? "content-stretch flex items-center relative" : isNotIcon ? "content-stretch flex gap-[8px] items-center relative" : ""}
    >
      <p 
        id={isIcon ? "node-1_397" : isNotIcon ? "node-1_400" : ""} 
        className={`font-["Inter:Regular",sans-serif] font-normal leading-none not-italic relative shrink-0 text-[14px] text-[color:var(--color/text/primary,white)]`}
      >
        To order
      </p>
      {isNotIcon && (
        <div data-node-id="1:399" className="overflow-clip relative shrink-0 size-[24px]" data-name="truck">
          <div data-node-id="I1:399;1517:32430" className="absolute inset-[17.71%_11.5%_17.71%_11.46%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <img className="block max-w-none size-full" alt="" src={img} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
