import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function PricingCard() {
  return (
    <div className=" grid grid-cols-1 gap-5 lg:grid-cols-3 mx-auto">
      <Card
        color="white"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-black/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="black"
            className="font-bold uppercase"
          >
            Full-Service Planning
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>999{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Pre-wedding preparations
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Wedding Day</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Post-wedding</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Wedding Consultation
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Life time technical support
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="black"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
      <Card
        color="white"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-black/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="black"
            className="font-bold uppercase"
          >
            Full-Service Planning
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>799{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Pre-wedding preparations
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Wedding Day</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Post-wedding</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Wedding Consultation
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Life time technical support
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="black"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>

      <Card
        color="white"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-black/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="black"
            className="font-bold uppercase"
          >
            Full-Service Planning
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>499{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Pre-wedding preparations
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Wedding Day</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Post-wedding</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Wedding Consultation
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Life time technical support
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="black"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
