import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/2530ef43-aff1-43af-b03b-55a2573c8489";
const img1 = "https://www.figma.com/api/mcp/asset/07989e74-df63-4623-af96-f394ea30de45";

type ThumbnailProps = {
  className?: string;
  property1?: "Default" | "Active";
};

export default function Thumbnail({ className, property1 = "Default" }: ThumbnailProps) {
  const isActive = property1 === "Active";
  const isDefault = property1 === "Default";
  
  return (
    <div 
      id={isDefault ? "node-1_205" : isActive ? "node-1_207" : ""} 
      className={className || "h-[184px] relative w-[230.667px]"}
    >
      <div 
        id={isDefault ? "node-1_206" : isActive ? "node-1_208" : ""} 
        className={isDefault ? "absolute inset-0 rounded-[4px]" : isActive ? "absolute border border-[var(--color/text/primary,white)] border-solid inset-0 rounded-[4px]" : ""}
      >
        {isDefault && (
          <div className="absolute inset-0 pointer-events-none rounded-[4px]" aria-hidden="true">
            <img className="absolute max-w-none object-cover rounded-[4px] size-full" alt="" src={img} />
            <img className="absolute max-w-none object-cover rounded-[4px] size-full" alt="" src={img1} />
          </div>
        )}
        {isActive && (
          <img className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" alt="" src={img1} />
        )}
      </div>
    </div>
  );
}
