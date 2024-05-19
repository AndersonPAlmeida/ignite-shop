import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti repellat non nobis eum voluptates harum sapiente, saepe pariatur neque officia illo alias, eaque autem at architecto sequi facere repudiandae!</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
