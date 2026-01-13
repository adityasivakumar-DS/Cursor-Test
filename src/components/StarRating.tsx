import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/a0175920-1037-4047-86e9-cd0ef85fd8f1";
const img1 = "https://www.figma.com/api/mcp/asset/d8133dbe-2cf6-45ec-a37c-46aa4a6ef049";

type VectorProps = {
  className?: string;
  star?: "filled" | "outlined";
};

function Vector({ className, star = "filled" }: VectorProps) {
  const isFilled = star === "filled";
  const isOutlined = star === "outlined";
  
  return (
    <div 
      id={isFilled ? "node-1_333" : isOutlined ? "node-1_335" : ""} 
      className={className}
    >
      <div 
        className="absolute inset-0" 
        style={(isFilled ? { "--fill-0": "rgba(204, 255, 0, 1)" } : isOutlined ? { "--stroke-0": "rgba(204, 255, 0, 1)" } : undefined) as React.CSSProperties}
      >
        <img className="block max-w-none size-full" alt="" src={isFilled ? img : isOutlined ? img1 : ""} />
      </div>
    </div>
  );
}

type StarRatingProps = {
  className?: string;
  ratingCount?: string;
  starRating?: "5 star" | "4 star" | "3 star" | "2 star" | "1 star";
  ratingCount1?: boolean;
};

export default function StarRating({ className, ratingCount = "786", starRating = "5 star", ratingCount1 = true }: StarRatingProps) {
  const is1StarAndFalse = starRating === "1 star" && !ratingCount1;
  const is1StarAndTrue = starRating === "1 star" && ratingCount1;
  const is2StarAndFalse = starRating === "2 star" && !ratingCount1;
  const is2StarAndTrue = starRating === "2 star" && ratingCount1;
  const is3StarAndFalse = starRating === "3 star" && !ratingCount1;
  const is3StarAndTrue = starRating === "3 star" && ratingCount1;
  const is4StarAndFalse = starRating === "4 star" && !ratingCount1;
  const is4StarAndTrue = starRating === "4 star" && ratingCount1;
  const is5StarAndFalse = starRating === "5 star" && !ratingCount1;
  const is5StarAndTrue = starRating === "5 star" && ratingCount1;
  
  return (
    <div 
      id={is5StarAndTrue ? "node-1_266" : is5StarAndFalse ? "node-1_273" : is2StarAndTrue ? "node-1_279" : is2StarAndFalse ? "node-1_286" : is1StarAndTrue ? "node-1_292" : is1StarAndFalse ? "node-1_299" : is4StarAndTrue ? "node-1_305" : is4StarAndFalse ? "node-1_312" : is3StarAndTrue ? "node-1_318" : is3StarAndFalse ? "node-1_325" : ""} 
      className={className || "content-stretch flex gap-[6px] items-center relative"}
    >
      <Vector className="relative shrink-0 size-[16px]" />
      {(is5StarAndTrue || is5StarAndFalse || is2StarAndTrue || is2StarAndFalse || is4StarAndTrue || is4StarAndFalse || is3StarAndTrue || is3StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" />
      )}
      {(is5StarAndTrue || is5StarAndFalse || is4StarAndTrue || is4StarAndFalse || is3StarAndTrue || is3StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" />
      )}
      {(is5StarAndTrue || is5StarAndFalse || is4StarAndTrue || is4StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" />
      )}
      {(is5StarAndTrue || is5StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" />
      )}
      {(is5StarAndTrue || is2StarAndTrue || is1StarAndTrue || is4StarAndTrue || is3StarAndTrue) && (
        <p 
          className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)]" 
          data-node-id="1:272"
        >
          {ratingCount}
        </p>
      )}
      {(is2StarAndTrue || is2StarAndFalse || is1StarAndTrue || is1StarAndFalse || is4StarAndTrue || is4StarAndFalse || is3StarAndTrue || is3StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" star="outlined" />
      )}
      {(is2StarAndTrue || is2StarAndFalse || is1StarAndTrue || is1StarAndFalse || is3StarAndTrue || is3StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" star="outlined" />
      )}
      {(is2StarAndTrue || is2StarAndFalse || is1StarAndTrue || is1StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" star="outlined" />
      )}
      {(is1StarAndTrue || is1StarAndFalse) && (
        <Vector className="relative shrink-0 size-[16px]" star="outlined" />
      )}
    </div>
  );
}
