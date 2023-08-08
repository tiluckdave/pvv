import { useMediaQuery } from 'react-responsive'

import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Forth from "@/components/Forth";
import ReportsAndFilling from "@/components/ReportsAndFilling";
import PdfComponents from "@/components/PdfComponents";
import Layout from "@/components/Layout";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
  return (
    <Layout>
      <First isTabletOrMobile={isTabletOrMobile} />
      <Second isTabletOrMobile={isTabletOrMobile} />
      <Third isTabletOrMobile={isTabletOrMobile} />
      <Forth isTabletOrMobile={isTabletOrMobile} />
      <ReportsAndFilling />
      <PdfComponents />
    </Layout>
  )
}
