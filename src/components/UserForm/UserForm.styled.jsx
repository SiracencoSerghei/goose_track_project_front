import styled from '@emotion/styled';
import { AiFillPlusCircle } from 'react-icons/ai';

export const ContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 40px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 32px 32px;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 40px;
  background-color: #ffffff;
  border-radius: 16px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    height: 100%;
    padding: 60px 0;
  }
`;

export const UserName = styled.h2`
  color: #343434;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  margin-bottom: 18px;

  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid rgb(47, 103, 228);

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -31px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    width: 124px;
    height: 124px;
    margin-bottom: 20px;
  }
`;

export const IconContainer = styled(AiFillPlusCircle)`
  position: absolute;
  bottom: -3px;
  right: 12px;
  background-color: #ffffff;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: rgb(47, 103, 228);
  border: none;
  cursor: pointer;
  @media screen and (min-width: 375px) and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    right: 23px;
    width: 18px;
    height: 18px;
  }
`;

export const InputWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    flex: 1;

    grid-column-gap: 50px;
  }
`;

export const Text = styled.p`
  color: #343434;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Letter = styled.p`
  color: #3e85f3;
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & > div > div {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      gap: 18px;
    }

    @media screen and (min-width: 768px) {
      gap: 24px;
    }
  }

  & > div > div:nth-of-type(1) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  & > div > div > label {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  & > div > div > label > input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #343434;
    outline: none;

    &::placeholder {
      color: #343434;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }

    @media screen and (min-width: 375px) and (max-width: 767px) {
      width: 299px;
    }

    @media screen and (min-width: 768px) {
      width: 354px;
      height: 46px;
    }
  }

  & > div > div > label > p {
    color: #111111;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  max-width: 195px;
  height: 46px;
  border-radius: 16px;
  background: #3e85f3;
  border: none;
  padding: 14px 50px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
  outline: none;
  margin-top: 40px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  &:disabled {
    background-color: #e0e0e0;
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: auto;
    grid-column: span 2;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 12px 14px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #343434;
  outline: none;

  &::placeholder {
    color: #343434;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
`;
