import { FaCalendarAlt, FaCogs, FaRegStar } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import Typography from "../typography/Typography";
import { ICar } from "~/types/interfaces/ICar";

interface INewCarsSection {
  cars: ICar[];
}

export default function NewCarsSection({ cars }: INewCarsSection) {
  return (
    <div className="max-w-7xl mx-auto p-6 rounded-lg bg-gray-100">
      <div className="mb-6">
        <Typography variant="h2" className="font-semibold text-gray-700">
          Novo v ponudbi
        </Typography>
        <Typography variant="body" className="text-gray-500">
          Najnovejša vozila, ki so ravnokar prispela v našo ponudbo.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars?.map((car: ICar) => (
          <a
            key={car.id}
            href={car.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg shadow-md bg-white block"
          >
            <div className="relative h-[230px] bg-gray-300 flex items-center justify-center">
              {car.image ? (
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              ) : (
                <Typography variant="body" className="text-gray-700">
                  [No Image Available]
                </Typography>
              )}
              <div className="absolute top-2 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-semibold rounded-l-md flex items-center">
                <FaRegStar className="mr-1" />
                NOVO VOZILO
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-end justify-between mb-1">
                <Typography
                  variant="h3"
                  className="font-semibold text-gray-700 mb-0"
                >
                  {car.title}
                </Typography>
                <Typography
                  variant="h5"
                  className="font-light text-gray-500 ml-2 whitespace-nowrap overflow-hidden text-ellipsis mb-0"
                >
                  {car.details}
                </Typography>
              </div>

              <Typography
                variant="bodyBold"
                className="text-xl text-gray-700 mt-1"
              >
                {car.price}
              </Typography>

              <div className="mt-3 flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <Typography variant="small" className="font-light">
                    {car.year}
                  </Typography>
                </div>
                <div className="flex items-center gap-1">
                  <FaRoad />
                  <Typography variant="small" className="font-light">
                    {car.km}
                  </Typography>
                </div>
                <div className="flex items-center gap-1">
                  <FaCogs />
                  <Typography variant="small" className="font-light">
                    {car.transmission}
                  </Typography>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 text-right">
        <Typography
          variant="small"
          className="text-gray-600 hover:underline cursor-pointer"
        >
          Pregled vseh →
        </Typography>
      </div>
    </div>
  );
}
