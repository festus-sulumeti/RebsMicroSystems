import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (

  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
     </div>

     <div className="flex-1 flex flex-col ml-3">
      <h4 className="fnt-poppins font-semibold text-white
       text-[18px] leading-[23px] mb-1
      ">{title}</h4>
      <p className="fnt-poppins font-normal text-dimWhite
       text-[16px] leading-[24px] mb-1
      ">{content}</p>
     </div>
  </div>
)

const business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>In need of a faster internet speed, <br
        className="sm:block hidden"/> Well we gat you covered</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We are a reliable and fast providing internet company.
        Our Services are best and to the satisfactions of the intended clients.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index ) => (
            <FeatureCard key={feature. id}
             {...feature} index={index}
            />
          ))}
      </div>
    </section>
  )
}

export default business