import { Container, PaymentMethods, Details, InputWrapper, Section, CreditCardDetails, OrderStatus } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import QrCode from "../../assets/qrCode.png";
import { Pix } from "../../icons/Pix";
import { CreditCard } from "../../icons/CreditCard";
import { Approved } from "../../icons/Approved";
import { Clock } from "../../icons/Clock";
import { Receipt } from "../../icons/Receipt";
import { useState } from "react";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
import { useToast } from "../../hooks/toast"; 
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";

export function Payment({ dishes }) {
  const navigate = useNavigate();
  const { resetCart } = useCart();
  const { addToast, toastTypes } = useToast(); 
  const theme = useTheme();
  const methods = {
    PIX: 0,
    CREDIT_CARD: 1
  };
  const creditCardPaymentStages = {
    WAITING: 0,
    PROCESSING: 1,
    APPROVED: 2
  };

  const [selectedMethod, setSelectedMethod] = useState(methods.PIX);
  const [creditCardPaymentStage, setCreditCardPaymentStage] = useState(creditCardPaymentStages.WAITING);

  async function handleCreditCardPayment() {
    setCreditCardPaymentStage(creditCardPaymentStages.PROCESSING);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setCreditCardPaymentStage(creditCardPaymentStages.APPROVED);
    const order = {
      dishes: dishes.map(dish => ({
        id: dish.id,
        quantity: dish.quantity
      }))
    };

    try {
      await api.post("/orders", order);
      addToast("Pedido concluído com sucesso!", toastTypes.SUCCESS);
      resetCart();
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate("/");
      window.location.reload();
    } catch (error) {
      addToast("Erro ao concluir o pedido. Tente novamente.", toastTypes.ERROR);
    }
  }

  function numericMask(e) {
    const value = e.target.value;
    const numericPattern = /^\d*$/;
  
    if (!numericPattern.test(value)) {
      e.target.value = "";
    }
  }

  function setCreditCardComponent() {
    if(creditCardPaymentStage === creditCardPaymentStages.WAITING) {
      return (
        <CreditCardDetails>
          <InputWrapper>
            <label htmlFor="card-number">Número do Cartão</label>
            <Input
              label={"Número do Cartão"}               
              inputId={"card-number"}
              placeholder={"0000 0000 0000 0000"}
              onChange={(e) => numericMask(e)}
              maxLength="16"
            />
          </InputWrapper>
          <Section>
            <InputWrapper>
              <label htmlFor="expiration-date">Validade</label>
              <Input
                label={"Validade"}
                inputId={"expiration-date"}
                placeholder={"04/25"}
                maxLength="4"
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="cvc">CVC</label>
              <Input
                label={"CVC"}
                inputId={"cvc"}
                placeholder={"000"}
                maxLength="3"
              />
            </InputWrapper>
          </Section>
          <Button
            icon={Receipt}
            title={"Finalizar pagamento"}
            width={"100%"}
            padding={"1.6rem"}
            onClick={handleCreditCardPayment}
          />
        </CreditCardDetails>
      );
    }

    if(creditCardPaymentStage === creditCardPaymentStages.PROCESSING) {
      return (
        <OrderStatus>
          <Clock/>
          <h1>Processando...</h1>
        </OrderStatus>
      );
    }

    return (
      <OrderStatus>
          <Approved/>
          <h1>Pagamento aprovado!</h1>
      </OrderStatus>
    );
  }

  const paymentDetailsMap = {
    [methods.PIX]: (
      <img src={QrCode} alt="Qr code" />       
    ),
    [methods.CREDIT_CARD]: (
      setCreditCardComponent()
    )
  };

  return (
    <Container>
      <PaymentMethods>
        <Button
          title={"Pix"}
          icon={Pix}
          bgColor={selectedMethod == methods.PIX ? theme.COLORS.DARK_800 : "transparent"}
          padding={"2.4rem"}
          width={"100%"}
          borderRadius={"0px"}
          onClick={() => setSelectedMethod(methods.PIX)}
        />
        <Button
          title={"Crédito"}
          icon={CreditCard}
          bgColor={selectedMethod == methods.CREDIT_CARD ? theme.COLORS.DARK_800 : "transparent"}
          padding={"2.4rem"}
          width={"100%"}
          borderRadius={"0px"}
          onClick={() => setSelectedMethod(methods.CREDIT_CARD)}
        />
      </PaymentMethods>
      <Details>
        {paymentDetailsMap[selectedMethod]}
      </Details>
    </Container>    
  );
}
