import * as S from './styles'

const Main = ({
  title = 'BoilerPlate',
  description = 'TypeScript, NextJS e StyleCompoentes'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor de frente para tela com codigo."
    />
  </S.Wrapper>
)

export default Main
