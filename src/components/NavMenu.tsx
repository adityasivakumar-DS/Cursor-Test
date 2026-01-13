import React from 'react';
import Menu from './Menu';

type NavMenuProps = {
  navMenuCount?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8";
};

export default function NavMenu({ navMenuCount = "1" }: NavMenuProps) {
  const is1 = navMenuCount === "1";
  const is2 = navMenuCount === "2";
  const is2Or3Or4Or5Or6Or7Or8 = ["2", "3", "4", "5", "6", "7", "8"].includes(navMenuCount);
  const is3 = navMenuCount === "3";
  const is4 = navMenuCount === "4";
  const is5 = navMenuCount === "5";
  const is6 = navMenuCount === "6";
  const is7 = navMenuCount === "7";
  const is8 = navMenuCount === "8";
  
  return (
    <div 
      id={is1 ? "node-1_105" : is2 ? "node-1_107" : is3 ? "node-1_110" : is4 ? "node-1_114" : is5 ? "node-1_119" : is6 ? "node-1_125" : is7 ? "node-1_132" : is8 ? "node-1_140" : ""} 
      className={`content-stretch flex items-center relative ${
        is1 ? "gap-[var(--spacing/2xl,0px)]" : 
        is2Or3Or4Or5Or6Or7Or8 ? "gap-[var(--spacing/2xl,24px)]" : ""
      }`}
    >
      <Menu className="content-stretch flex items-center justify-center relative shrink-0" />
      {is2Or3Or4Or5Or6Or7Or8 && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
      {["3", "4", "5", "6", "7", "8"].includes(navMenuCount) && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
      {["4", "5", "6", "7", "8"].includes(navMenuCount) && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
      {["5", "6", "7", "8"].includes(navMenuCount) && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
      {["6", "7", "8"].includes(navMenuCount) && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
      {["7", "8"].includes(navMenuCount) && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
      {is8 && <Menu className="content-stretch flex items-center justify-center relative shrink-0" />}
    </div>
  );
}
