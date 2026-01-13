import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/9d9adf73-51ba-41bd-bd42-25d62b240df6";

export default function Dropdown() {
  return (
    <div 
      className="bg-[var(--color/bg/tertiary,#1f2937)] content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[32px] w-[267px]" 
      data-name="Dropdown" 
      data-node-id="1:79"
    >
      <p 
        className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-[color:var(--color/text/primary,white)]" 
        data-node-id="1:80"
      >
        Field
      </p>
      <div 
        className="overflow-clip relative shrink-0 size-[24px]" 
        data-name="chevron-down" 
        data-node-id="1:81"
      >
        <div 
          className="absolute inset-[36.9%_26.55%_36.46%_26.41%]" 
          data-name="Vector" 
          data-node-id="I1:81;2:2690"
        >
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}
