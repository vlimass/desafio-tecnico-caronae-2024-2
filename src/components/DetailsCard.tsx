import React from "react"

interface DetailsCardProps {
  title: string;
  children: React.ReactElement;
}

export function DetailsCard(props: DetailsCardProps) {
  return (
    <div className="w-[21.2rem] shadow-sm border border-[#DFDFDF] rounded-lg px-6 pt-6 pb-4">
      <span className="font-semibold text-2xl text-neutral-900 inline-block mb-6">
        {props.title}
      </span>

      {props.children}
    </div>
  )
}