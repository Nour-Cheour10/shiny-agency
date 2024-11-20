import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profil.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  padding-bottom: 30px;
`
const CardImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  margin: 0 auto;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const CardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: 'genyour',
  title: 'Mon titre par défaut',
  picture: DefaultPicture,
}

export default Card
