import React from 'react';

import {
  Wrapper,
  Title,
  Notification,
  NotificationItem,
  NotificationTitle,
  NotificationDate,
} from './styles';

export default function Notifications() {
  return (
    <Wrapper>
      <Title>Notificações</Title>

      <Notification>
        <NotificationItem>
          <NotificationTitle>
            Identificamos um novo acesso à sua conta. Toque aqui para saber mais
          </NotificationTitle>
          <NotificationDate>Ontem às 22:50</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            Você tem 10% por nossa conta pra pagar um boleto hoje! Toque para
            saber mais
          </NotificationTitle>
          <NotificationDate>30 de mai às 17:12</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            Tá devendo aquela grana pra um amigo? Pague com PicPay e ganhe 20%
            de volta, SÓ HOJE!
          </NotificationTitle>
          <NotificationDate>29 de mai às 13:31</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            20% por nossa conta pra você pagar estabelecimentos ou comprar na
            PicPay Store hoje!
          </NotificationTitle>
          <NotificationDate>29 de mai às 10:02</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            Divida a conta do happy hour com seus amigos com PicPay e ganhe 40%
            de volta, SÓ HOJE! Toque para saber mais
          </NotificationTitle>
          <NotificationDate>28 de mai às 09:45</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            Você tem 10% por nossa conta pra pagar um boleto hoje! Toque para
            saber mais
          </NotificationTitle>
          <NotificationDate>27 de mai às 17:12</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            Identificamos um novo acesso à sua conta. Toque aqui para saber mais
          </NotificationTitle>
          <NotificationDate>27 de mai às 12:31</NotificationDate>
        </NotificationItem>

        <NotificationItem>
          <NotificationTitle>
            Você tem 10% por nossa conta pra pagar um boleto hoje! Toque para
            saber mais
          </NotificationTitle>
          <NotificationDate>23 de mai às 17:12</NotificationDate>
        </NotificationItem>
      </Notification>
    </Wrapper>
  );
}
