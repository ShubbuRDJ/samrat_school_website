import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './responsive_dialog.scss';
import { Grid } from '@mui/material';
import { removeUnderscores } from '../../../utility/commonUtil';



function ResponsiveDialog({ open, setOpen, dataArray }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={'xs'}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <Grid className='dialog-main-container'>

        <Grid className='cross-button'>
          <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
            <g filter="url(#filter0_d_162_38790)">
              <path d="M29 37C35.6 37 41 31.6 41 25C41 18.4 35.6 13 29 13C22.4 13 17 18.4 17 25C17 31.6 22.4 37 29 37Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25.6035 28.3961L32.3955 21.6041" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.3955 28.3961L25.6035 21.6041" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter id="filter0_d_162_38790" x="0.25" y="0.25" width="57.5" height="57.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_38790" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_38790" result="shape" />
              </filter>
            </defs>
          </svg>
        </Grid>

        <Grid className='dialog-content-box'>


          {
            dataArray?.remark?.map((ele, index) => {
              return (
                <Grid key={index + 1} className="dialog-box-item ">
                  <p>{`${removeUnderscores(ele?.key)} :`}</p>

                  <button
                    style={{ background: `${Math.ceil((ele?.confidence) * 100) >= 50 ? 'radial-gradient(100% 100% at 100% 0,#8caa88 0,#49ed1c 100%)' : 'radial-gradient(100% 100% at 100% 0,#aa8a88 0,#ed341c 100%)'}` }}
                  >
                    {`${Math.ceil((ele?.confidence) * 100)}%`}
                  </button>



                </Grid>
              )
            })
          }

        </Grid>
      </Grid>
    </Dialog>
  );
}

export default React.memo(ResponsiveDialog)
