import * as React from "react";
const CredentialIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4m4-4c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4m4-4c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4m-6 4a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default CredentialIcon;
