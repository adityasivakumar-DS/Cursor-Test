import React from 'react';
import ThumbnailRow from './ThumbnailRow';
import AngleRight from './AngleRight';
import AngleLeft from './AngleLeft';

// Fix for AngleRight/AngleLeft props
type AngleRightProps = {
  className?: string;
  state?: boolean;
  size?: "56x56" | "48x48" | "40x40";
};

type AngleLeftProps = {
  className?: string;
  state?: boolean;
  size?: "56x56" | "48x48" | "40x40";
};

const imgVector2 = "https://www.figma.com/api/mcp/asset/0f196d27-0bf6-4da9-9e80-0301c4be152e";

type ProductMediaSectionProps = {
  nav?: boolean;
  thumbnailCount?: "3" | "4";
};

export default function ProductMediaSection({ nav = false, thumbnailCount = "3" }: ProductMediaSectionProps) {
  const isNavAnd3 = nav && thumbnailCount === "3";
  const isNavAnd4 = nav && thumbnailCount === "4";
  const isNotNavAnd3 = !nav && thumbnailCount === "3";
  const isNotNavAnd4 = !nav && thumbnailCount === "4";
  
  return (
    <div 
      id={isNotNavAnd3 ? "node-1_210" : isNotNavAnd4 ? "node-1_213" : isNavAnd3 ? "node-1_216" : isNavAnd4 ? "node-1_222" : ""} 
      className="content-stretch flex flex-col gap-[8px] items-start relative w-[708px]"
    >
      <div 
        id={isNotNavAnd3 ? "node-1_211" : isNotNavAnd4 ? "node-1_214" : isNavAnd3 ? "node-1_217" : isNavAnd4 ? "node-1_223" : ""} 
        className="h-[552px] relative rounded-[8px] shrink-0 w-full"
      >
        <img className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" alt="" src={imgVector2} />
      </div>
      {(isNotNavAnd3 || isNavAnd3) && (
        <ThumbnailRow className="content-stretch flex gap-[8px] h-[184px] items-start relative shrink-0 w-full" />
      )}
      {(isNotNavAnd4 || isNavAnd4) && (
        <ThumbnailRow className="content-stretch flex gap-[8px] h-[184px] items-start relative shrink-0 w-full" thumbnailCount="4" />
      )}
      {(isNavAnd3 || isNavAnd4) && (
        <div 
          id={isNavAnd3 ? "node-1_218" : isNavAnd4 ? "node-1_224" : ""} 
          className={`absolute content-stretch flex items-center left-0 px-[8px] py-0 top-[248px] ${
            isNavAnd3 ? "gap-[596px]" : isNavAnd4 ? "justify-between w-[708px]" : ""
          }`}
        >
          <AngleLeft className="overflow-clip relative shrink-0 size-[40px]" state={true} size="40x40" />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <AngleRight className="overflow-clip relative size-[40px]" state={true} size="40x40" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
