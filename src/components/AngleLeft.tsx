import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/b7dab6ca-97f4-40e1-9c7a-196729204f93";
const img1 = "https://www.figma.com/api/mcp/asset/ec959afa-b1c0-4ae4-932b-7cd7e2863efb";
const img2 = "https://www.figma.com/api/mcp/asset/637cea66-5316-4d0b-ac63-4bf99daabec7";
const img3 = "https://www.figma.com/api/mcp/asset/fd4efdf7-bc66-474f-8d7b-92a172d33a86";
const img4 = "https://www.figma.com/api/mcp/asset/966026fa-9417-4150-b69e-a3be3054e863";
const img5 = "https://www.figma.com/api/mcp/asset/780687d8-2a80-4c13-a245-027a1023b965";

type AngleLeftProps = {
  state?: boolean;
  size?: "56x56" | "48x48" | "40x40";
};

export default function AngleLeft({ state = true, size = "56x56" }: AngleLeftProps) {
  const isNotStateAnd40X40 = !state && size === "40x40";
  const isNotStateAnd48X48 = !state && size === "48x48";
  const isNotStateAnd56X56 = !state && size === "56x56";
  const isStateAnd40X40 = state && size === "40x40";
  const isStateAnd48X48 = state && size === "48x48";
  const isStateAnd56X56 = state && size === "56x56";
  
  return (
    <div 
      id={isStateAnd56X56 ? "node-1_230" : isNotStateAnd56X56 ? "node-1_232" : isStateAnd48X48 ? "node-1_234" : isNotStateAnd48X48 ? "node-1_236" : isStateAnd40X40 ? "node-1_238" : isNotStateAnd40X40 ? "node-1_240" : ""} 
      className={`relative ${
        isStateAnd56X56 || isNotStateAnd56X56 ? "size-[56px]" : 
        isStateAnd48X48 || isNotStateAnd48X48 ? "size-[48px]" : 
        isStateAnd40X40 || isNotStateAnd40X40 ? "size-[40px]" : ""
      }`}
    >
      <div 
        id={isStateAnd56X56 ? "node-1_231" : isNotStateAnd56X56 ? "node-1_233" : isStateAnd48X48 ? "node-1_235" : isNotStateAnd48X48 ? "node-1_237" : isStateAnd40X40 ? "node-1_239" : isNotStateAnd40X40 ? "node-1_241" : ""} 
        className="absolute inset-[32.83%_39.59%_32.29%_39.59%]" 
        data-name="Vector"
      >
        <div 
          className="absolute inset-0" 
          style={(isStateAnd56X56 || isStateAnd48X48 || isStateAnd40X40 ? { "--fill-0": "rgba(255, 255, 255, 1)" } : isNotStateAnd56X56 || isNotStateAnd48X48 || isNotStateAnd40X40 ? { "--fill-0": "rgba(156, 163, 175, 1)" } : undefined) as React.CSSProperties}
        >
          <img 
            className="block max-w-none size-full" 
            alt="" 
            src={isStateAnd56X56 ? img : isNotStateAnd56X56 ? img1 : isStateAnd48X48 ? img2 : isNotStateAnd48X48 ? img3 : isStateAnd40X40 ? img4 : isNotStateAnd40X40 ? img5 : ""} 
          />
        </div>
      </div>
    </div>
  );
}
