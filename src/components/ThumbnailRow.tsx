import React from 'react';
import Thumbnail from './Thumbnail';

type ThumbnailRowProps = {
  thumbnailCount?: "3" | "4";
};

export default function ThumbnailRow({ thumbnailCount = "3" }: ThumbnailRowProps) {
  const is3 = thumbnailCount === "3";
  const is4 = thumbnailCount === "4";
  
  return (
    <div 
      id={is3 ? "node-1_256" : is4 ? "node-1_260" : ""} 
      className="content-stretch flex gap-[8px] h-[184px] items-start relative w-[708px]"
    >
      <Thumbnail className="flex-[1_0_0] h-[184px] min-h-px min-w-px relative" property1="Active" />
      <Thumbnail className="flex-[1_0_0] h-[184px] min-h-px min-w-px relative" property1="Default" />
      <Thumbnail className="flex-[1_0_0] h-[184px] min-h-px min-w-px relative" property1="Default" />
      {is4 && <Thumbnail className="flex-[1_0_0] h-[184px] min-h-px min-w-px relative" property1="Default" />}
    </div>
  );
}
