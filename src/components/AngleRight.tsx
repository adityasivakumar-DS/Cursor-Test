import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/e19e1a6d-356c-4e19-94d0-7426a80e7525";
const img1 = "https://www.figma.com/api/mcp/asset/ca727790-0bdb-4c01-b38c-8f7d1f43f812";
const img2 = "https://www.figma.com/api/mcp/asset/a5e73107-7837-4c2e-9f52-8dcb98c6a8ac";
const img3 = "https://www.figma.com/api/mcp/asset/1ae95069-a043-496f-97cc-b6071381c0e8";
const img4 = "https://www.figma.com/api/mcp/asset/d2960d15-94f3-4ef8-87b0-dd25ea526112";
const img5 = "https://www.figma.com/api/mcp/asset/9116963e-3949-4d1e-a8d5-89e207f89458";

type AngleRightProps = {
  state?: boolean;
  size?: "56x56" | "48x48" | "40x40";
};

export default function AngleRight({ state = true, size = "56x56" }: AngleRightProps) {
  const isNotStateAnd40X40 = !state && size === "40x40";
  const isNotStateAnd48X48 = !state && size === "48x48";
  const isNotStateAnd56X56 = !state && size === "56x56";
  const isStateAnd40X40 = state && size === "40x40";
  const isStateAnd48X48 = state && size === "48x48";
  const isStateAnd56X56 = state && size === "56x56";
  
  return (
    <div 
      id={isStateAnd56X56 ? "node-1_243" : isNotStateAnd56X56 ? "node-1_245" : isStateAnd48X48 ? "node-1_247" : isNotStateAnd48X48 ? "node-1_249" : isStateAnd40X40 ? "node-1_251" : isNotStateAnd40X40 ? "node-1_253" : ""} 
      className={`relative ${
        isStateAnd56X56 || isNotStateAnd56X56 ? "size-[56px]" : 
        isStateAnd48X48 || isNotStateAnd48X48 ? "size-[48px]" : 
        isStateAnd40X40 || isNotStateAnd40X40 ? "size-[40px]" : ""
      }`}
    >
      <div 
        id={isStateAnd56X56 ? "node-1_244" : isNotStateAnd56X56 ? "node-1_246" : isStateAnd48X48 ? "node-1_248" : isNotStateAnd48X48 ? "node-1_250" : isStateAnd40X40 ? "node-1_252" : isNotStateAnd40X40 ? "node-1_254" : ""} 
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
