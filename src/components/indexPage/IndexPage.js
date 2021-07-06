import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useDate } from "../../hooks";
import logo from "../../assets/images/triv.png";
import Plus from "../common/svg/Plus";
import Minus from "../common/svg/Minus";
import "./IndexPage.css";

const IndexPage = () => {
  const [target, setTarget] = useState(0);
  const [amount, setAmount] = useState(0);
  const [estimate, setEstimate] = useState(0);

  // Dialog
  const [plan, setPlan] = useState("Day");
  const [endDate, setEndDate] = useState();

  const { currentDate, getDateNMonth } = useDate();

  // const caluEstimate = () => {
  //   let estimate = Number(Number(target / amount).toFixed(0)),
  //     date = currentDate;

  //   if (plan === "Day") {
  //     date.setDate(date.getDate() + estimate);
  //   } else if (plan === "Week") {
  //     date.setDate(date.getDate() + estimate * 7);
  //   } else if (plan === "Month") {
  //     date.setMonth(date.getMonth() + estimate);
  //   }

  //   setEstimate(estimate);
  //   setEndDate(date);
  // };

  // useEffect(() => {
  //   caluEstimate();
  // }, [target, amount, plan]);

  return (
    <div className="grid">
      {/* <h1>sdlfmslkdfmsklm</h1> */}
      <header>
        <nav>
          {/* <a href="#save">
            <li>Kerma.app</li>
          </a> */}
          <a href="#save">
            <li>Save</li>
          </a>
          <a href="#pay">
            <li>Pay</li>
          </a>
          <a href="#faq">
            <li>FaQ</li>
          </a>
        </nav>
      </header>
      <div id="save" className="page one intro">
        <h1>Kerma</h1>
        <p>
          A place to design and personalize your very own financial experience.
        </p>
      </div>
      <div id="save" className="page two">
        <div className="content goal">
          <div className="divider">
            <div>
              <h1>
                Save /<br /> Stash
              </h1>
            </div>
            <div>
              <p>
                For whatever your goals or dreams are, we help you achieve them
                by putting smaller amounts over a period of time.
              </p>
              <div className="calc">
                <div>
                  <li>
                    <span>Your target ( GHS )</span>
                    <input
                      type="number"
                      onInput={(e) => setTarget(Number(e.target.value))}
                      // autoFocus="true"
                      defaultValue={0}
                    />
                  </li>
                  <li>
                    <span>Amount you like save ( GHS )</span>
                    <input
                      type="number"
                      onInput={(e) => setAmount(Number(e.target.value))}
                      defaultValue={0}
                    />
                  </li>
                  <div className="schedule">
                    <li
                      onClick={() => setPlan("Day")}
                      className={plan == "Day" ? "active" : ""}
                    >
                      Daily
                    </li>
                    <li
                      onClick={() => setPlan("Week")}
                      className={plan == "Week" ? "active" : ""}
                    >
                      Weekly
                    </li>
                    <li
                      onClick={() => setPlan("Month")}
                      className={plan == "Month" ? "active" : ""}
                    >
                      Monthly
                    </li>
                  </div>
                  {/* <li>Bank</li> */}
                </div>
                <div className="result">
                  <div className="total" style={{ textAlign: "center" }}>
                    <h2>{isFinite(estimate) ? estimate : 0}</h2>
                    <h6>{plan}s</h6>
                  </div>
                  {!isNaN(endDate) && (
                    <div className="date">
                      <li>
                        <span>From</span>
                        <h4>{getDateNMonth(currentDate)}</h4>
                      </li>
                      <li>
                        <span>To</span>
                        <h4>{getDateNMonth(endDate)}</h4>
                      </li>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="page three">
        <h1>Invest</h1>
        <p>Grow your money by investing small amount gradually.</p>
      </div> */}
      <div id="pay" className="page one">
        <div className="content pay">
          <div className="divider">
            <div>
              <h1>
                Send & <br />
                Receive
              </h1>
            </div>
            <div>
              <p>
                Pay | Get paid faster by family, friends or customers anywhere
                effortlessly.
              </p>
              <li>
                Momo <Plus />
              </li>
              <li>
                Card <Plus />
              </li>
              <li>
                Bank <Plus />
              </li>
            </div>
          </div>
        </div>
      </div>
      <div id="faq" className="page two">
        <div className="content faq">
          <h1>FaQ</h1>
          <p>Answers you might be looking for</p>
          <div className="faq-list">
            <div>
              {Faqs.map((item, i) => {
                return (
                  <Faq key={i} title={item.title} content={item.content} />
                );
              })}
            </div>
            <div>
              {Faqs.map((item, i) => {
                return (
                  <Faq key={i} title={item.title} content={item.content} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = ({ title, content }) => {
  const [show, setShow] = useState(0);
  // console.log(show);
  return (
    <div className="item">
      <div className="item-btn" onClick={() => setShow(!show)}>
        <h6>{title}</h6>
        {show ? <Minus /> : <Plus />}
      </div>
      <div className="item-content" style={{ maxHeight: show ? "300px" : "0" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Faqs = [
  {
    title: "Are we registered",
    content:
      "Grow your money by investing small amount gradually.\n\nand all you beautiful",
  },
  {
    title: "Are we registered",
    content:
      "Grow your money by investing small amount gradually.\n\nand all you beautiful",
  },
  {
    title: "Are we registered",
    content:
      "Grow your money by investing small amount gradually.\n\nand all you beautiful",
  },
  {
    title: "Are we registered",
    content:
      "Grow your money by investing small amount gradually.\n\nand all you beautiful",
  },
];

export default IndexPage;
