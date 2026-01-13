import React from 'react';
import StarRating from './StarRating';

const img786 = "https://www.figma.com/api/mcp/asset/6ace4d01-1893-4c23-8b91-39035bb113ce";

type ProductBrandRatingProps = {
  wishlist?: boolean;
  brandName?: boolean;
};

export default function ProductBrandRating({ wishlist = true, brandName = true }: ProductBrandRatingProps) {
  const isBrandNameAndTrueOrFalse = (wishlist && brandName) || (!wishlist && brandName);
  const isNotWishlistAndBrandName = !wishlist && brandName;
  const isNotWishlistAndNotBrandName = !wishlist && !brandName;
  const isWishlistAndBrandName = wishlist && brandName;
  const isWishlistAndNotBrandName = wishlist && !brandName;
  
  return (
    <div 
      id={isWishlistAndBrandName ? "node-1_338" : isNotWishlistAndBrandName ? "node-1_343" : isWishlistAndNotBrandName ? "node-1_347" : isNotWishlistAndNotBrandName ? "node-1_351" : ""} 
      className={`content-stretch flex flex-col items-start relative w-[var(--grid/5-column,546px)] ${
        isBrandNameAndTrueOrFalse ? "gap-[16px]" : 
        isWishlistAndNotBrandName || isNotWishlistAndNotBrandName ? "" : ""
      }`}
    >
      {(isBrandNameAndTrueOrFalse || isWishlistAndNotBrandName) && (
        <div 
          id={isWishlistAndBrandName ? "node-1_339" : isNotWishlistAndBrandName ? "node-1_344" : isWishlistAndNotBrandName ? "node-1_348" : ""} 
          className={`content-stretch flex items-start relative shrink-0 w-full ${
            isWishlistAndBrandName ? "justify-between" : 
            isNotWishlistAndBrandName ? "h-[24px]" : 
            isWishlistAndNotBrandName ? "h-[24px] justify-between" : ""
          }`}
        >
          {isBrandNameAndTrueOrFalse && (
            <p 
              id={isWishlistAndBrandName ? "node-1_340" : isNotWishlistAndBrandName ? "node-1_345" : ""} 
              className={`font-["Inter:Regular",sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/xs,12px)]`}
            >
              Brand name
            </p>
          )}
          {(isWishlistAndBrandName || isWishlistAndNotBrandName) && (
            <div 
              id={isWishlistAndBrandName ? "node-1_341" : isWishlistAndNotBrandName ? "node-1_350" : ""} 
              className="overflow-clip relative shrink-0 size-[24px]" 
              data-name="heart"
            >
              <div 
                id={isWishlistAndBrandName ? "node-I1_341-2_2914" : isWishlistAndNotBrandName ? "node-I1_350-2_2914" : ""} 
                className="absolute inset-[17.75%_13.63%_17.71%_13.63%]" 
                data-name="Vector"
              >
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <img className="block max-w-none size-full" alt="" src={img786} />
                </div>
              </div>
            </div>
          )}
          {isWishlistAndNotBrandName && (
            <StarRating className="content-stretch flex gap-[6px] items-center relative shrink-0" />
          )}
        </div>
      )}
      {(isBrandNameAndTrueOrFalse || isNotWishlistAndNotBrandName) && (
        <StarRating className="content-stretch flex gap-[6px] items-center relative shrink-0" />
      )}
    </div>
  );
}
