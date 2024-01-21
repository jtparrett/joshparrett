import { Flex, styled } from "~/styled-system/jsx";
import { Role as RoleType } from "~/utils/roles";
import { Tags } from "./Tags";

interface Props {
  role: RoleType;
}

export const Role = ({ role }: Props) => {
  return (
    <styled.article>
      <styled.h1
        fontSize="lg"
        fontWeight="bold"
        pos="relative"
        zIndex={1}
        _after={{
          content: '""',
          pos: "absolute",
          top: "50%",
          left: -4,
          h: "1px",
          bgColor: "brand",
          w: 4,
          zIndex: -1,
        }}
      >
        {role.company} <styled.span color="gray.600">//</styled.span>{" "}
        {role.title}
      </styled.h1>
      <styled.span color="brand" display="block" fontWeight="semibold" mb={2}>
        {role.date}
      </styled.span>

      <Tags tags={role.tools} />

      <styled.p color="gray.400" textWrap="balance">
        {role.body}
      </styled.p>
    </styled.article>
  );
};
