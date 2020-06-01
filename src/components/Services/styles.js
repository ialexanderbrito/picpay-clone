import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  border-top-width: 1px;
  border-color: #3d4451;
  background-color: #1e232a;
`;

export const Title = styled.Text`
  padding: 10px 16px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Service = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px 16px;
`;

export const ServiceImg = styled.Image``;

export const ServiceContent = styled.View`
  margin-left: 20px;
  flex: 1;
`;

export const ServiceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ServiceDescription = styled.Text`
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;
