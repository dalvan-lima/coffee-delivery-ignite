import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderContext } from '../../contexts/OrderContext';

import { OrderItem } from '../../components/OrderItem';
import { CheckoutContainer, OrderInfo, TitleCheckoutFrame, AddressInfo, DescriptionAddressContainer, DescriptionAddressContainerTitle, Input, InputSelect, SelectBox, PaymentInfo, OrderSummary, OrderSummaryItem, SelectionInfo, FormContainer } from "./styles";

import { CurrencyDollar, MapPinLine, } from "phosphor-react";
import { useNavigate } from 'react-router-dom';

const addressFormValidationSchema = zod.object({
  methodPayment: zod.string(),
  cep: zod.string(),
  rua: zod
    .string()
    .min(5, 'No mínimo 5 caracteres.')
    .max(60, 'No máximo 60 caracteres.'),
  numero: zod.string(),
  complemento: zod.string().optional(),
  bairro: zod.string()
    .min(3, 'No mínimo 3 caracteres.')
    .max(60, 'No máximo 60 caracteres.'),
  cidade: zod.string()
    .min(3, 'No mínimo 3 caracteres.')
    .max(60, 'No máximo 60 caracteres.'),
  uf: zod.string()
    .min(2, 'É preciso informar exatos 2 caracteres.')
    .max(2, 'É preciso informar exatos 2 caracteres.'),
  
})

export type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const { order, total, orderFinalize } = useContext(OrderContext)

  const navigate = useNavigate()

  const [methodPayment, setMethodPayment] = useState<string | null>(null)

  const { register, setValue, handleSubmit, formState: {errors} } = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema)
  })

  function onSubmit(data: addressFormData) {
    if(total > 0) {
      console.log("deu bom")
      orderFinalize(data)
      navigate('/checkout/success')
    }
  }

  useEffect(() => { methodPayment !== null && setValue('methodPayment', methodPayment) }, [methodPayment])
  useEffect(() => { console.log(errors) }, [errors])

  const toBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <OrderInfo>
        <TitleCheckoutFrame>Complete seu pedido</TitleCheckoutFrame>
        <AddressInfo>
          <DescriptionAddressContainer>
            <MapPinLine color='#C47F17' size={24} />
            <DescriptionAddressContainerTitle>
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </DescriptionAddressContainerTitle>
          </DescriptionAddressContainer>

          <FormContainer>
            <input {...register('methodPayment')} hidden={true} />
            <Input {...register('cep')} placeholder='CEP' width='12.5rem' />
            <Input {...register('rua')} placeholder='Rua' width='100%' />
            <Input {...register('numero')} placeholder='Número' width='12.5rem' />
            <Input {...register('complemento')} placeholder='Complemento' width='21.75rem' />
            <Input {...register('bairro')} placeholder='Bairro' width='12.5rem' />
            <Input {...register('cidade')} placeholder='Cidade' width='17.25rem' />
            <Input {...register('uf')} placeholder='UF' width='3.75rem' />
          </FormContainer>
        </AddressInfo>

        <AddressInfo>
          <DescriptionAddressContainer>
            <CurrencyDollar color='#4B2995' size={24} />
            <DescriptionAddressContainerTitle>
              <h1>Pagamento</h1>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </DescriptionAddressContainerTitle>

          </DescriptionAddressContainer>
          <SelectBox>
            <InputSelect className={methodPayment === 'credit' ? 'active' : ''} onClick={() => setMethodPayment('credit')}>Cartão de Crédito</InputSelect>
            <InputSelect className={methodPayment === 'debit' ? 'active' : ''} onClick={() => setMethodPayment('debit')}>Cartão de Débito</InputSelect>
            <InputSelect className={methodPayment === 'money' ? 'active' : ''} onClick={() => setMethodPayment('money')}>Dinheiro</InputSelect>
          </SelectBox>
        </AddressInfo>

      </OrderInfo>

      <SelectionInfo>
        <TitleCheckoutFrame>Cafés selecionados</TitleCheckoutFrame>
        <PaymentInfo>
          {
            order.map(item => (
              <OrderItem key={item.name} coffee={item}  />
            ))
          }

          <OrderSummary>
            <OrderSummaryItem>
              <p>Total de itens</p>
              <p>{toBRL.format(order.length ? total - 3.5 : total)}</p>
            </OrderSummaryItem>
            <OrderSummaryItem>
              <p>Entrega</p>
              <p>R$ {order.length ? '3,50' : '0,00'}</p>
            </OrderSummaryItem>

            <OrderSummaryItem>
              <strong>Total</strong>
              <strong>{toBRL.format(total)}</strong>
            </OrderSummaryItem>

            <button type='submit'>Confirmar Pedido</button>
          </OrderSummary>
        </PaymentInfo>
      </SelectionInfo>

    </CheckoutContainer>
  )
}
