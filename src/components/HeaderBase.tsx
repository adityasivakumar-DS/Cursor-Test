import React from 'react';
import Menu from './Menu';
import Links from './Links';

const imgHome = "https://www.figma.com/api/mcp/asset/0bce5c28-a4d7-452e-8de7-5275463a69fd";

type HeaderBaseProps = {
  logoAlign?: "left" | "center";
};

export default function HeaderBase({ logoAlign = "left" }: HeaderBaseProps) {
  const isCenter = logoAlign === "center";
  const isLeft = logoAlign === "left";
  
  return (
    <div 
      id={isLeft ? "node-1_83" : isCenter ? "node-1_87" : ""} 
      className="bg-[var(--color/bg/primary,#030712)] content-stretch flex items-center justify-between px-[40px] py-[24px] relative w-[1440px]"
    >
      <div 
        id={isLeft ? "node-42_386" : isCenter ? "node-1_88" : ""} 
        className={`relative shrink-0 ${
          isLeft ? "h-[32px] w-[126.464px]" : 
          isCenter ? "content-stretch flex gap-[var(--spacing/2xl,24px)] items-center" : ""
        }`}
      >
        {isLeft && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img className="absolute left-0 max-w-none size-full top-0" alt="" src={imgHome} />
          </div>
        )}
        {isCenter && (
          <>
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
          </>
        )}
      </div>
      <div 
        id={isLeft ? "node-1_85" : isCenter ? "node-1_90" : ""} 
        className="content-stretch flex gap-[var(--spacing/xl,16px)] items-center relative shrink-0"
      >
        {isLeft && (
          <>
            <div data-node-id="I1:85;1:187" className="content-stretch flex h-[24px] items-center relative shrink-0">
              <p data-node-id="I1:85;1:187;1:173" className={`font-[family-name:var(--fontfamily/body,"Inter:Regular",sans-serif)] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)]`}>
                Delivery
              </p>
            </div>
            <div data-node-id="I1:85;1:188" className="content-stretch flex h-[24px] items-center relative shrink-0">
              <p data-node-id="I1:85;1:188;1:173" className={`font-[family-name:var(--fontfamily/body,"Inter:Regular",sans-serif)] font-normal leading-[normal] not-italic relative shrink-0 text-[color:var(--color/text/primary,white)] text-[length:var(--fontsize/body,16px)]`}>
                Log In
              </p>
            </div>
          </>
        )}
        <Links className="content-stretch flex h-[24px] items-center relative shrink-0" icon={true} text={false} />
        <Links className="content-stretch flex h-[24px] items-center relative shrink-0" icon={true} text={false} />
        {isCenter && <Links className="content-stretch flex h-[24px] items-center relative shrink-0" icon={true} text={false} />}
      </div>
      <div 
        id={isLeft ? "node-1_86" : isCenter ? "node-42_389" : ""} 
        className={`absolute top-1/2 translate-x-[-50%] translate-y-[-50%] ${
          isLeft ? "content-stretch flex gap-[var(--spacing/2xl,24px)] items-center left-1/2" : 
          isCenter ? "h-[32px] left-[calc(50%+0.23px)] w-[126.464px]" : ""
        }`}
      >
        {isLeft && (
          <>
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
            <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
          </>
        )}
        {isCenter && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img className="absolute left-0 max-w-none size-full top-0" alt="" src={imgHome} />
          </div>
        )}
      </div>
    </div>
  );
}
