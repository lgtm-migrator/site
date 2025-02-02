import { Button, Flex, Spacer } from "@chakra-ui/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <Flex as="nav" mt={4} mb={4} color="highlighted">
    {prevLinkHref !== null && (
      <NextLink href={prevLinkHref} passHref>
        <Button as="a" leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
          前
        </Button>
      </NextLink>
    )}
    <Spacer />
    {nextLinkHref !== null && (
      <NextLink href={nextLinkHref} passHref>
        <Button as="a" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
          次
        </Button>
      </NextLink>
    )}
  </Flex>
);
