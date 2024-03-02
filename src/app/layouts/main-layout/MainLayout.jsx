import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import { Grid } from '@mui/material'
import './main-layout.scss'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className='mainLayout-container'>
      <Topbar logoText={"Boilerplate"} />
      <Grid className='main-container'>
        <Outlet />
      </Grid>
    </div>
  )
}
