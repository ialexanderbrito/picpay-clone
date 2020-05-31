import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Menu = styled.View`
  flex-direction: row;
`;

export const Select = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const SubTitle = styled.Text`
  color: #10c86e;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
`;

export const SubTitle2 = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: rgba(255, 255, 255, 0.6);
  margin: 0 10px;
`;

export const Date = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;
