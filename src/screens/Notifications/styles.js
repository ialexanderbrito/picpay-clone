import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Notification = styled.ScrollView`
  background: #303338;
  margin-top: 20px;
`;

export const NotificationItem = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
`;

export const NotificationTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const NotificationDate = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
