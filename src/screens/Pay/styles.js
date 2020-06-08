import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #000;
  padding-top: 40px;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.View`
  margin-left: 20px;
  padding: 10px 20px;
  flex: 1;
  border-radius: 50px;
  background-color: #1e232a;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.6);
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#AAAFBB',
})`
  margin: 0 20px;
  flex: 1;
`;

export const Text = styled.Text`
  margin: 10px 0 -10px;
  padding: 20px 16px;
  background-color: #1e232a;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
