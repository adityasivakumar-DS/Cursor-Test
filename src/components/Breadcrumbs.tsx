import React from 'react';

export default function Breadcrumbs() {
  return (
    <div 
      className="content-stretch flex font-[family-name:var(--fontfamily/body,'Inter:Regular',sans-serif)] font-normal gap-[var(--spacing/xl,16px)] items-center justify-center not-italic px-0 py-[8px] relative text-[color:var(--color/text/secondary,#9ca3af)]" 
      data-name="Breadcrumbs" 
      data-node-id="1:91"
    >
      <p className="leading-[normal] relative shrink-0 text-[length:var(--fontsize/xs,12px)]" data-node-id="1:92">
        Level 1
      </p>
      <p className="leading-[30px] relative shrink-0 text-[12px]" data-node-id="1:93">
        /
      </p>
      <p className="leading-[normal] relative shrink-0 text-[length:var(--fontsize/xs,12px)]" data-node-id="1:94">
        Level 2
      </p>
      <p className="leading-[30px] relative shrink-0 text-[12px]" data-node-id="1:95">
        /
      </p>
      <p className="leading-[normal] relative shrink-0 text-[length:var(--fontsize/xs,12px)]" data-node-id="1:96">
        Level 3
      </p>
      <p className="leading-[30px] relative shrink-0 text-[12px]" data-node-id="1:97">
        /
      </p>
      <p className="leading-[normal] relative shrink-0 text-[length:var(--fontsize/xs,12px)]" data-node-id="1:98">
        Level 4
      </p>
    </div>
  );
}
