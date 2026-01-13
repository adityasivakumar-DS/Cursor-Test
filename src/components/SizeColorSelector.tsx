import React from 'react';

const imgSizeChart = "https://www.figma.com/api/mcp/asset/184fb028-5165-480c-ac4e-27bde299e4a8";

type SizeColorSelectorProps = {
  sizeChart?: boolean;
};

export default function SizeColorSelector({ sizeChart = true }: SizeColorSelectorProps) {
  const isNotSizeChart = !sizeChart;
  const isSizeChart = sizeChart;
  
  return (
    <div 
      id={isSizeChart ? "node-1_368" : isNotSizeChart ? "node-1_373" : ""} 
      className={`content-stretch flex flex-col items-start relative w-[553px] ${
        isSizeChart ? "gap-[24px]" : isNotSizeChart ? "" : ""
      }`}
    >
      {isSizeChart && (
        <p 
          data-node-id="1:369" 
          className={`[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-["Inter:Regular",sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-[color:var(--color/text/primary,white)] underline w-full whitespace-pre-wrap`}
        >
          Size chart
        </p>
      )}
      <div 
        id={isSizeChart ? "node-1_370" : isNotSizeChart ? "node-1_374" : ""} 
        className="content-stretch flex gap-[var(--spacing/xl,16px)] items-center relative shrink-0 w-full"
      >
        <div 
          id={isSizeChart ? "node-1_371" : isNotSizeChart ? "node-1_375" : ""} 
          className="bg-[var(--color/bg/tertiary,#1f2937)] content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px px-[16px] py-[12px] relative rounded-[32px]" 
          data-name="Dropdown"
        >
          <p 
            id={isSizeChart ? "node-I1_371-1_80" : isNotSizeChart ? "node-I1_375-1_80" : ""} 
            className={`font-["Inter:Regular",sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-[color:var(--color/text/primary,white)]`}
          >
            Size
          </p>
          <div 
            id={isSizeChart ? "node-I1_371-1_81" : isNotSizeChart ? "node-I1_375-1_81" : ""} 
            className="overflow-clip relative shrink-0 size-[24px]" 
            data-name="chevron-down"
          >
            <div 
              id={isSizeChart ? "node-I1_371-1_81-2_2690" : isNotSizeChart ? "node-I1_375-1_81-2_2690" : ""} 
              className="absolute inset-[36.9%_26.55%_36.46%_26.41%]" 
              data-name="Vector"
            >
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={imgSizeChart} />
              </div>
            </div>
          </div>
        </div>
        <div 
          id={isSizeChart ? "node-1_372" : isNotSizeChart ? "node-1_376" : ""} 
          className="bg-[var(--color/bg/tertiary,#1f2937)] content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px px-[16px] py-[12px] relative rounded-[32px]" 
          data-name="Dropdown"
        >
          <p 
            id={isSizeChart ? "node-I1_372-1_80" : isNotSizeChart ? "node-I1_376-1_80" : ""} 
            className={`font-["Inter:Regular",sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-[color:var(--color/text/primary,white)]`}
          >
            Color
          </p>
          <div 
            id={isSizeChart ? "node-I1_372-1_81" : isNotSizeChart ? "node-I1_376-1_81" : ""} 
            className="overflow-clip relative shrink-0 size-[24px]" 
            data-name="chevron-down"
          >
            <div 
              id={isSizeChart ? "node-I1_372-1_81-2_2690" : isNotSizeChart ? "node-I1_376-1_81-2_2690" : ""} 
              className="absolute inset-[36.9%_26.55%_36.46%_26.41%]" 
              data-name="Vector"
            >
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={imgSizeChart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
