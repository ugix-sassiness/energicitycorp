import { LightBulbIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Competitive rates',
      description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
      icon: LightBulbIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
      icon: LightBulbIcon,
    },
    {
      name: 'Instant transfers',
      description:
        'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
      icon: LightBulbIcon,
    },
    {
      name: 'Reminder emails',
      description:
        'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
      icon: LightBulbIcon,
    },
  ]

export default function Impact() {
return (
    <div className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <img
                      className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                      src="https://s3.us-east-2.amazonaws.com/dexter.io/energicity-symbol.svg"
                      alt="Energicity Solar"
                    />
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects & Impact</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-700 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
    
}