import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaUsers, FaMoneyCheck, FaComment, FaTools } from "react-icons/fa";

const Status = () => {
  return (
    <section className="container mx-auto ">
      <div className="text-center" >
      <h2 className="text-3xl my-16 font-bold ">Company Status</h2>
      </div>
      <div className="hero bg-white bg-base-100 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          {/* ______customers____ */}
          <div className="stat">
            <div className="stat-figure text-red-400 s-full">
              <FaUsers className="w-16 h-16" />
            </div>
            <div className="stat-title">Customers</div>
            <div className="stat-value">100000+</div>
          </div>

          {/* ____annual revenue____ */}
          <div className="stat">
            <div className="stat-figure text-red-400 s-full">
              <FaMoneyCheck className="w-16 h-16" />
            </div>
            <div className="stat-title">Annual Revenue</div>
            <div className="stat-value">
              <div>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div style={{ height: 1 }}>
                      {isVisible ? (
                        <CountUp end={1000} duration={3} suffix={"M"} />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>

          {/* ______rviews______ */}
          <div className="stat">
            <div className="stat-figure text-red-400 s-full">
              <FaComment className="w-16 h-16" />
            </div>
            <div className="stat-title">Reviews</div>
            <div className="stat-value">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div style={{ height: 1 }}>
                    {isVisible ? (
                      <CountUp end={2000} duration={3} suffix={"k+"} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>

          {/* _______tools_______ */}
          <div className="stat">
            <div className="stat-figure text-red-400 s-full">
              <FaTools className="w-16 h-16" />
            </div>
            <div className="stat-title">Tools</div>
            <div className="stat-value">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div style={{ height: 1 }}>
                    {isVisible ? (
                      <CountUp end={1000} duration={3} suffix={"+"} />
                    ) : null}{" "}
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
