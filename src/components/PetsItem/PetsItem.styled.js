import styled from 'styled-components';

export const Card = styled.div`
/* position: relative; */
  padding: 16px 20px 40px 20px;
  width: 280px;
  height: 541px;
  left: 20px;
  top: 754px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
`;
export const Photo = styled.img`
/* position: absolute; */
  background-color: gray;
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  left: center;
  top: 0px;

  /* background: url(.jpg); */
  border-radius: 20px;
`;

export const Label = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const LastLabel = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const Btn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: #ffffff;
`;

export const Icon = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
  fill: #54adff;
`;
