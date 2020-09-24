import tw, { styled } from 'twin.macro';

export const BoldType = styled.p`
  ${tw`text-left uppercase leading-149 break-normal font-helvetica text-base font-bold`}
  ${() => tw`mb-2`}
  ${() => tw`text-offtan`}
`;

export const BoldTypeHeader = BoldType.withComponent(`h1`);

export const BoldTypeLink = styled(BoldType.withComponent(`a`))`
  ${tw`transition-all duration-300 ease-in-out`}
  ${() => tw`my-0`}
  ${() => tw`text-offtan-transparent50`}
  ${() => tw`hover:text-offtan`}
`;

export const NormalType = styled.p`
  ${tw`w-full text-left leading-149 break-normal font-gilda-display text-xl font-normal`}
  ${() => tw`mb-2`}
  ${() => tw`text-offtan`}

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;
