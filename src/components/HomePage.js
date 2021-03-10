import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background: #d9d9d9;
  margin-top: 10rem;
  padding-bottom: 10px;
  width: 30%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-left: 10px;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  padding-left: 10px;
  padding-right: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const ButtonPrimary = styled.button`
  background: #014f86;
  border: 0px;
  padding: 10px;
  color: #fff;
  margin-left: 10px;
`;

export const HomePage = () => {
  return (
    <>
      <Container>
        <Card>
          <Image
            src="https://www.fodors.com/wp-content/uploads/2020/10/AnimalsInIndia__HERO_shutterstock_1703666200.jpg"
            alt="animales"
          />
          <Title> Lorem Ipsum</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <ButtonPrimary>Learn more</ButtonPrimary>
        </Card>
        <Card>
          <Image
            src="https://images.theconversation.com/files/134652/original/image-20160818-12312-4dyz0u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="animales"
          />
          <Title> Lorem Ipsum</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <ButtonPrimary>Learn more</ButtonPrimary>
        </Card>
        <Card>
          <Image
            src="https://www.kiro7.com/resizer/KK9gZy4Ne-5LGVD0_zKDXZVbC3Q=/1200x675/cloudfront-us-east-1.images.arcpublishing.com/cmg/BIHFDAMMDVBMNMIPQQSFF2MRZE.jpg"
            alt="animales"
          />
          <Title> Lorem Ipsum</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <ButtonPrimary>Learn more</ButtonPrimary>
        </Card>
      </Container>

      <GlobalStyle />
    </>
  );
};
