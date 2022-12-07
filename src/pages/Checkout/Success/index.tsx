import { IconContainer, InfoContainer, InfoDelivery, ItemInfo, SuccessContainer } from "./styles";

import deliveryIllustration from '../../../assets/DeliveryIllustration.png'
import { MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { OrderContext } from "../../../contexts/OrderContext";


export function Success() {
  const theme = useTheme() as any
  const { address } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <InfoContainer>
        <InfoDelivery>
          <ItemInfo>
            <IconContainer color={theme.purple}>
              <MapPin weight='fill' />
            </IconContainer>
            <div>
              <p>Entrega em <strong>{address.rua}, {address.numero}</strong></p>
              <p>{address.cidade} - {address.uf}</p>
            </div>

          </ItemInfo>
          <ItemInfo>
            <IconContainer color={theme['yellow']}>
              <MapPin weight='fill' />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>

          </ItemInfo>
          <ItemInfo>
            <IconContainer color={theme['yellow-dark']}>
              <MapPin weight='fill' />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>{address.methodPayment}</strong></p>
            </div>

          </ItemInfo>
        </InfoDelivery>

        <img src={deliveryIllustration} alt="" />

      </InfoContainer>
    </SuccessContainer>
  )
}
