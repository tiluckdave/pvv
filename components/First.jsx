import FirstDesktop from './FirstDesktop' 
import FirstMobile from './FirstMobile'
 
const First = ({isTabletOrMobile}) => {
  return (
    isTabletOrMobile ?  <FirstMobile/>:<FirstDesktop/> 
  )
}

export default First