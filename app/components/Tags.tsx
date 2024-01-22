import { styled, Flex } from "~/styled-system/jsx";

interface Props {
  tags: string;
}

export const Tags = ({ tags }: Props) => {
  return (
    <Flex flexWrap="wrap" gap={1} maxW={600} mb={2}>
      {tags.split(", ").map((tag) => (
        <styled.span
          key={tag}
          bgColor="gray.800"
          rounded="sm"
          px={2}
          py={1}
          fontSize="sm"
        >
          {tag}
        </styled.span>
      ))}
    </Flex>
  );
};
