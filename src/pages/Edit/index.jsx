import { Container, Section, InputWrapper, PhotoInput, PhotoInputWrapper } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { IconButton } from "../../components/IconButton";
import { SelectInput } from "../../components/SelectInput";
import { Button } from "../../components/Button";
import { SetIngredients } from "../../components/SetIngredients";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Upload } from "../../icons/Upload";
import { Close } from "../../icons/Close";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";

export function Edit() {
  const [photo, setPhoto] = useState(null);
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const photoInputRef = useRef(null);

  async function handleAdd() {
    console.log("todo...");
  }

  function handlePhoto(event) {
    const file = event.target.files[0];
    setPhoto(file);
  }

  function handleCancelPhoto(event) {
    event.stopPropagation();
    photoInputRef.current.value = "";
    setPhoto(null);
  }

  function handlePrice(event) {
    let formattedValue = event.target.value.replace(/[^0-9,]/g, "");
    
    if(formattedValue === "") {
      setPrice(formattedValue);
      return;
    }

    if (formattedValue.includes(",")) {
      const parts = formattedValue.split(",");
      const integerPart = parts[0];
      let decimalPart = parts[1].substring(0, 2); 
      formattedValue = `${integerPart},${decimalPart}`;
    }
  
    if (Number(formattedValue.replace(",", "."))) {
      setPrice(formattedValue);
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const result = await api.get("categories");
      setCategories(result.data);
    }

    fetchCategories();
  }, []);

  return (
    <>
      <Header/>
      <Container>
        <BackButton/>
        <h1>Adicionar prato</h1>

        <Section>
          <InputWrapper>
            <label htmlFor="photo">Imagem do prato</label>
            <PhotoInputWrapper>
              <PhotoInput htmlFor="photo">
                <Upload/> 
                { photo?.name ? photo.name : "Selecione a imagem"}
                <input 
                  type="file" 
                  id="photo" 
                  accept="image/*" 
                  onChange={handlePhoto}
                  ref={photoInputRef}
                />
              </PhotoInput>
              { photo?.name && <IconButton icon={Close} onClick={handleCancelPhoto}/> } 
            </PhotoInputWrapper>
          </InputWrapper>
          <InputWrapper $flexOne={"1"}>
            <label htmlFor="name">Nome</label>
            <Input
              label={"Nome"}
              inputId={"name"}
              placeholder={"Ex.: Salada Ceasar"}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="category">Categoria</label>
            <SelectInput
              label={"Categoria"}
              inputId={"category"}
              items={categories}
              selectedOption={selectedCategory}
              setSelectedOption={setSelectedCategory}
            />
          </InputWrapper>
        </Section>

        <Section>
        <InputWrapper $flexOne={"1"}>
            <label>Ingredientes</label>
            <SetIngredients/>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="price">Preço (R$)</label>
            <Input
              label={"Preço"}
              inputId={"price"}
              placeholder={"R$ 00,00"}
              onChange={handlePrice}
              value={price}
            />
          </InputWrapper>
        </Section>

        <Section>
          <InputWrapper $flexOne={"1"}>
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  
            />
          </InputWrapper>
        </Section>
        <Button
          className={"saveButton"}
          title={"Salvar alterações"}
          onClick={handleAdd}
        />
      </Container>
      <Footer/>
    </>
  );
}