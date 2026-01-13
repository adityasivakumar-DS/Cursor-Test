import React from 'react';

type ProductPriceProps = {
  price?: string;
  strikeoutPrice?: boolean;
  discountPercentage?: boolean;
};

export default function ProductPrice({ price = "$2,223", strikeoutPrice = false, discountPercentage = false }: ProductPriceProps) {
  const isNotStrikeoutPriceAndNotDiscountPercentage = !strikeoutPrice && !discountPercentage;
  const isStrikeoutPriceAndDiscountPercentage = strikeoutPrice && discountPercentage;
  const isStrikeoutPriceAndNotDiscountPercentage = strikeoutPrice && !discountPercentage;
  
  return (
    <div 
      id={isNotStrikeoutPriceAndNotDiscountPercentage ? "node-1_355" : isStrikeoutPriceAndNotDiscountPercentage ? "node-1_357" : isStrikeoutPriceAndDiscountPercentage ? "node-1_361" : ""} 
      className={`h-[36px] relative ${
        isNotStrikeoutPriceAndNotDiscountPercentage ? "w-[169px]" : 
        isStrikeoutPriceAndNotDiscountPercentage ? "w-[280px]" : 
        isStrikeoutPriceAndDiscountPercentage ? "w-[353px]" : ""
      }`}
    >
      {isNotStrikeoutPriceAndNotDiscountPercentage && (
        <p 
          className="absolute font-['Inter:Regular',sans-serif] font-normal leading-none left-0 not-italic right-[27.81%] text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/h2,36px)] top-[calc(50%-13px)]" 
          data-node-id="1:356"
        >
          {price}
        </p>
      )}
      {(isStrikeoutPriceAndNotDiscountPercentage || isStrikeoutPriceAndDiscountPercentage) && (
        <div 
          id={isStrikeoutPriceAndNotDiscountPercentage ? "node-1_358" : isStrikeoutPriceAndDiscountPercentage ? "node-1_362" : ""} 
          className={`absolute content-stretch flex font-["Inter:Regular",sans-serif] font-normal gap-[16px] items-center leading-none left-0 not-italic text-[color:var(--color/text/primary,white)] top-1/2 translate-y-[-50%]`}
        >
          <p className="relative shrink-0 text-[length:var(--fontsize/h2,36px)]" data-node-id="1:359">
            {price}
          </p>
          <p 
            id={isStrikeoutPriceAndNotDiscountPercentage ? "node-1_360" : isStrikeoutPriceAndDiscountPercentage ? "node-1_364" : ""} 
            className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through relative shrink-0 text-[length:var(--fontsize/h4,24px)]"
          >
            $2,223
          </p>
          {isStrikeoutPriceAndDiscountPercentage && (
            <p data-node-id="1:365" className="relative shrink-0 text-[length:var(--fontsize/h4,24px)]">
              25%
            </p>
          )}
        </div>
      )}
    </div>
  );
}
