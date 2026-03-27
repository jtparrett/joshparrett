import { styled } from "~/styled-system/jsx";

export const DashedDivider = () => {
  return (
    <styled.svg w="full" h="1px" color="gray.200">
      <line
        x1="0"
        y1="0.5"
        x2="100%"
        y2="0.5"
        stroke="currentColor"
        strokeDasharray="4 6"
        strokeLinecap="round"
      ></line>
    </styled.svg>
  );
};
