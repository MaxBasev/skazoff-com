import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Format from '../layout/format'

//components
import TopComponents from '../components/top-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (    
  <Format>
    <TopComponents></TopComponents>
  </Format>
  )
}
