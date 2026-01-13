import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/d93fb9c4-b108-4e23-be60-2d2f36b7fabb";

type CardSelectorProps = {
  state?: boolean;
  icon?: boolean;
};

export default function CardSelector({ state = false, icon = true }: CardSelectorProps) {
  const isIconAndFalseOrTrue = (!state && icon) || (state && icon);
  const isNotIconAndFalseOrTrue = (!state && !icon) || (state && !icon);
  const isNotStateAndIcon = !state && icon;
  const isNotStateAndNotIcon = !state && !icon;
  const isStateAndIcon = state && icon;
  const isStateAndNotIcon = state && !icon;
  
  return (
    <div 
      id={isNotStateAndIcon ? "node-1_379" : isNotStateAndNotIcon ? "node-1_384" : isStateAndIcon ? "node-1_387" : isStateAndNotIcon ? "node-1_392" : ""} 
      className={
        isNotStateAndIcon ? "bg-[var(--color/bg/tertiary,#1f2937)] content-stretch flex flex-col gap-[var(--spacing/lg,12px)] items-start p-[16px] relative rounded-[40px] w-[130px]" : 
        isNotStateAndNotIcon ? "bg-[var(--color/bg/tertiary,#1f2937)] content-stretch flex flex-col gap-[var(--spacing/lg,12px)] items-start leading-none not-italic p-[16px] relative rounded-[40px] text-[color:var(--color/text/primary,white)] w-[130px] whitespace-pre-wrap" : 
        isStateAndIcon ? "bg-[var(--color/bg/tertiary,#1f2937)] border border-[var(--color/text/primary,white)] border-solid content-stretch flex flex-col gap-[var(--spacing/lg,12px)] items-start p-[16px] relative rounded-[40px] w-[130px]" : 
        isStateAndNotIcon ? "bg-[var(--color/bg/tertiary,#1f2937)] border border-[var(--color/text/primary,white)] border-solid content-stretch flex flex-col gap-[var(--spacing/lg,12px)] items-start leading-none not-italic p-[16px] relative rounded-[40px] text-[color:var(--color/text/primary,white)] w-[130px] whitespace-pre-wrap" : ""
      }
    >
      {isIconAndFalseOrTrue && (
        <div 
          id={isNotStateAndIcon ? "node-1_380" : isStateAndIcon ? "node-1_388" : ""} 
          className="bg-[var(--color/text/primary,white)] content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0"
        >
          <div 
            id={isNotStateAndIcon ? "node-1_381" : isStateAndIcon ? "node-1_389" : ""} 
            className="overflow-clip relative shrink-0 size-[24px]" 
            data-name="dollar"
          >
            <div 
              id={isNotStateAndIcon ? "node-I1_381-2437_45183" : isStateAndIcon ? "node-I1_389-2437_45183" : ""} 
              className="absolute inset-[13.54%_26.04%]" 
              data-name="Vector"
            >
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(3, 7, 18, 1)" } as React.CSSProperties}>
                <img className="block max-w-none size-full" alt="" src={img} />
              </div>
            </div>
          </div>
        </div>
      )}
      <p 
        id={isNotStateAndIcon ? "node-1_382" : isNotStateAndNotIcon ? "node-1_385" : isStateAndIcon ? "node-1_390" : isStateAndNotIcon ? "node-1_393" : ""} 
        className={`font-["Inter:Regular",sans-serif] font-normal relative shrink-0 text-[length:var(--fontsize/sm,14px)] ${
          isIconAndFalseOrTrue ? "leading-none min-w-full not-italic text-[color:var(--color/text/primary,white)] w-[min-content] whitespace-pre-wrap" : 
          isNotIconAndFalseOrTrue ? "w-full" : ""
        }`}
      >
        To order
      </p>
      <p 
        id={isNotStateAndIcon ? "node-1_383" : isNotStateAndNotIcon ? "node-1_386" : isStateAndIcon ? "node-1_391" : isStateAndNotIcon ? "node-1_394" : ""} 
        className={`font-["Inter:Semi_Bold",sans-serif] font-semibold relative shrink-0 text-[length:var(--fontsize/h5,20px)] ${
          isIconAndFalseOrTrue ? "leading-none min-w-full not-italic text-[color:var(--color/text/primary,white)] w-[min-content] whitespace-pre-wrap" : 
          isNotIconAndFalseOrTrue ? "w-full" : ""
        }`}
      >
        $1,120
      </p>
    </div>
  );
}
