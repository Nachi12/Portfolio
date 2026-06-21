import Spline from '@splinetool/react-spline'

const SplineModel = () => {
  return (
    <div
      id="robot"
      aria-hidden="true"
      className="pointer-events-none fixed bottom-3 right-0 z-0 hidden h-[280px] w-[230px] opacity-75 transition-all duration-700 sm:block md:h-[360px] md:w-[300px] xl:h-[460px] xl:w-[380px]"
    >
      <Spline scene="https://prod.spline.design/T7u4nsxVOmAtSMCs/scene.splinecode" />
    </div>
  )
}

export default SplineModel
