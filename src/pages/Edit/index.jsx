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
import { useToast } from "../../hooks/toast"; 
import { useParams, useNavigate } from "react-router-dom";

export function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const { addToast, toastTypes } = useToast(); 
  const [isEditing, setIsEditing] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [dishId, setDishId] = useState(null);
  const photoInputRef = useRef(null);

  function clear() {
    photoInputRef.current.value = "";
    setPhoto(null);
    setName("");
    setCategory(categories[0].id);
    setIngredients([]);
    setPrice("");
    setDescription("");
  }

  async function uploadPhoto(id) {
    const photoUploadForm = new FormData();
    console.log(photo);
    photoUploadForm.append("photo", photo);

    try {
      await api.post(`/dishes/photo/${id}`, photoUploadForm);
    } catch(error) {
      const errorMessage = error.response.data.message;
      throw new Error("Houve um problema ao cadastrar a foto do prato: " + errorMessage);
    }
  }

  async function handleAdd() {
    if(!name || !category || price === 0 || !description || ingredients.length === 0) {
      addToast("Preencha todos os campos!", toastTypes.ERROR);
      return;
    }

    const dish = {
      name,
      category_id: category,
      price: Number(price.replace(",", ".")),
      description,
      ingredients
    };

    try {
      let id = dishId;

      if(dishId) {
        await api.put(`/dishes/${id}`, dish);
      } else {
        const response = await api.post("/dishes", dish);
        id = response.data.id; 
        setDishId(id);
      }

      if(photo) {
        await uploadPhoto(id);
      }

      if(isEditing) {
        addToast("Atualizado com sucesso!", toastTypes.SUCCESS);
      } else {
        addToast("Cadastrato com sucesso!", toastTypes.SUCCESS);
        clear();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      if(errorMessage) {
        addToast(errorMessage, toastTypes.ERROR);
      } else {
        addToast("Houve um erro ao cadastrar o prato", toastTypes.ERROR);
      }
    }
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
      setCategory(result.data[0].id);
    }

    async function fetchDish(id) {
      const result = await api.get(`/dishes/${id}`);
      if(result.data) {
        const dish = result.data;
        setDishId(id);
        setName(dish.name);
        setCategory(dish.category.id);
        setIngredients(dish.ingredients.map(ingredient => ingredient.name));
        setPrice(dish.price.toString().replace(".", ","));
        setDescription(dish.description);
        setIsEditing(true);
      } else {
        navigate("/");
      }
    }

    if(params.id) {
      fetchDish(params.id);
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
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="category">Categoria</label>
            <SelectInput
              label={"Categoria"}
              inputId={"category"}
              items={categories}
              selectedOption={category}
              setSelectedOption={setCategory}
            />
          </InputWrapper>
        </Section>

        <Section>
        <InputWrapper $flexOne={"1"}>
            <label>Ingredientes</label>
            <SetIngredients
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
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
              onChange={e => setDescription(e.target.value)}
              value={description}
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