/* eslint-disable react/no-children-prop */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const steps = [
  {
    status: "Email",
  },
  {
    status: "Your Account",
  },
  {
    status: "Verify",
  },
  {
    status: "Shopping Preference",
  },
];

export default function BreadCrumb() {
  const location = useLocation();
  const mystatus = location.pathname.split("/").pop();
  const [state, setStatus] = useState(null);

  useEffect(() => {
    if (mystatus === "aboutsignup") {
      setStatus("Email");
    } else if (
      mystatus === "websiteselection" ||
      mystatus === "sizeselection" ||
      mystatus === "aesthetic" ||
      mystatus === "styleidentity" ||
      mystatus === "colorselection" ||
      mystatus === "fit" ||
      mystatus === "sustainability" ||
      mystatus === "suggestions"
    ) {
      setStatus("Verify");
    }
  }, [mystatus]);

  const transfer = {
    status: state, // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus) =>
    steps.findIndex(({ status }) => status === transferStatus);

  return (
    <>
      {state !== null && (
        <div className="flex justify-center w-full sm:hidden">
          <div
            className="max-w-[522px] w-full h-[104px] breadCrumb_shadow
        rounded-[60px] flex justify-center pt-[32px] text-center"
          >
            <div className="">
              <ProgressBar
                width={400}
                percent={
                  100 *
                  ((getStepPosition(transfer.status) + 1) /
                    (steps.length - 1.1))
                }
                filledBackground="#9C0E43"
                unfilledBackground="#ffffff"
                height={9}
              >
                {steps.map((step, index) => (
                  <Step
                    key={index}
                    transition="scale"
                    children={({ accomplished }) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: accomplished ? "50%" : "50%",
                          width: 8,
                          height: 8,
                          color: accomplished ? " #9C0E43" : "#4A4A4A",
                          backgroundColor: accomplished
                            ? "#9C0E43"
                            : "lightgrey",
                          // left: position ? '1%' : '1%',
                        }}
                      >
                        <p className="mt-12 progress_step_bar_text">
                          {step.status}
                        </p>
                      </div>
                    )}
                  />
                ))}
              </ProgressBar>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
