import cover from "../../assets/online.webp";
const OnlineRequest = () => {
  return (
        <div className="bg-[#75c1d1] my-10 ">
          <div className="grid lg:grid-cols-2 gap-5">
            <img src={cover} className="w-full lg:h-96 rounded-sm shadow-2xl" />
            <div className="flex p-5 flex-col justify-center items-center space-y-5">
              <h2 className="text-4xl text-white font-bold">Online Request</h2>
              <p className="text-sm text-white">DROP US A FEW LINES</p>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="input border-none rounded-full w-full max-w-xs"
                  />
                  <input
                    type="number"
                    placeholder="Phone*"
                    className="input border-none rounded-full w-full max-w-xs"
                  />
                </div>
                <div>
                  <textarea
                    className="textarea placeholder:px-5 border-none w-full rounded-full h-20 textarea-info"
                    placeholder="Message"
                  ></textarea>

                  <div className="flex items-center py-3 space-x-3">
                    <input type="checkbox" className="checkbox" />
                    <span>
                      I agree that my submitted data is being collected and
                      stored.
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="btn rounded-full btn-outline w-40">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default OnlineRequest;
