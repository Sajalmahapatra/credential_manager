import * as React from "react";
const SadFaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-20 h-20 text-gray-400 mb-6" fill="none" stroke="currentColor" strokeWidth="{1.5}" viewBox="0 0 48 48" {...props}>
    <circle cx={24} cy={24} r={22} stroke="currentColor" strokeWidth={3} fill="none" />
    <circle cx={17} cy={20} r={2.5} fill="currentColor" />
    <circle cx={31} cy={20} r={2.5} fill="currentColor" />
    <path d="M16 32c2-2 6-2 8-2s6 0 8 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />
  </svg>
);

export default SadFaceIcon;
