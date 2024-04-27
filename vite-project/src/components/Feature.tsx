import BusIcon from "../img/bus-front.svg"
import HeartIcon from "../img/chat-square-heart.svg"
import BriefIcon from "../img/briefcase.svg"

const features = [


  {
    name: 'Professional',
    description:
      "Our team of professional movers are trained to prioritize efficiency, organization, and attention to detail. We understand that your possessions are more than just objects - they are a reflection of your life, memories, and experiences. That's why we take extra care to ensure that everything is packed and transported with the utmost care and attention.",
    icon: BusIcon,
  },
  {
    name: 'Countrywide',
    description:
      "We offer a range of services to suit your individual needs, whether you're moving locally or across the country. Our team can handle everything from packing and loading to unloading and unpacking, so you can focus on settling into your new home. And with our transparent pricing and no hidden fees, you can trust that you're getting a fair and competitive rate for our services.",
    icon: BriefIcon,
  },
  {
    name: 'Personal Touch',
    description:
      'At our core, we believe that moving should be an exciting and positive experience, not a stressful one. By providing exceptional moving services in the US, we hope to revolutionize the way people think about moving and provide a better, more personalized experience for our customers. Contact us today to learn more about how we can help you with your next move.',
    icon: HeartIcon,
  },
]

const Feature = () => {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                    <img src={feature.icon} className="w-10 h-8"/>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Feature