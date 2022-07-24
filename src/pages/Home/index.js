import Barchart from '../../components/Barchart';

export default function Home () {
  const chartInfo = {
    title: '图1',
    width: '600px',
    height: '300px'
  }
  const chartInfo1 = {
    title: '图2',
    width: '600px',
    height: '260px'
  }
  return (
    <>
      <Barchart chartInfo={chartInfo}/>
      <Barchart chartInfo={chartInfo1}/>
    </>
  )
}