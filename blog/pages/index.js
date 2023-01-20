import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Format from '../layout/format'

//components
import TopComponents from '../components/top-section'
import MainComponents from '../components/main-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (    
  <Format>
    <TopComponents></TopComponents>
    <MainComponents></MainComponents>
  </Format>
  )
}
