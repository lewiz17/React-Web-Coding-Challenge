import styled from 'styled-components';
import HeadLogo from '../assets/berlin_police.webp';

const HeroSite = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background: #ccc;

  .hold-head{
    width: 90%;
    display: flex;
    gap: 20px;
  }

  img{
    max-width: 160px;
  }

  @media screen and (max-width: 768px){

    .hold-head{
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;

    }

    img{
      max-width: 100px;
    }
  }


`

const Head = (): JSX.Element => {
	return (
		<HeroSite>
			<div className="hold-head">
				<img src={HeadLogo} alt="Logo" />
				<div className="title-site">
					<h1>Police Departament of Berlin</h1>
					<h3>Stolen bykes</h3>
				</div>
			</div>
		</HeroSite>
	)
}

export default Head