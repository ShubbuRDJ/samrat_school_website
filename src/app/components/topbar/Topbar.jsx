import './topbar.scss'
import { Grid } from '@mui/material';
import emblem_pic from '../../../assets/emblem.png';
import digital_pic from '../../../assets/digital_logo.png';
import azadi_pic from '../../../assets/azadi_logo.png';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();
 
  return (
    <>
    <Grid className='topbar-container'>
      <Grid className='topbar-wrapper'>

        <Grid onClick={(e)=>{
          e.preventDefault();
          navigate('/');
          }} className="upsc_logo-container">
          <Grid className="emblem-img">
            <img src={emblem_pic} alt="emblem" />
          </Grid>
          <Grid className="upsc-text-topbar">
            <h4>Union Public Service Comission</h4>
            <p>संग लोग सेवा आयोग</p>
          </Grid>
        </Grid>

        <Grid className="topbar-right-part">
          <Grid className="digital_img-topbar">
            <img src={digital_pic} alt="digital" />
          </Grid>
          <Grid className="azadi_img-topbar">
            <img src={azadi_pic} alt="azadi" />
          </Grid>
        </Grid>


      </Grid>
    </Grid>
    </>
  )
}
