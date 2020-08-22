import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

import { down } from "styled-breakpoints";
import styled from "styled-components";
// import TextArea from "components/TextArea";
import Input from "components/Input";
import Button from "components/Button";
import Box from "components/Box";
import BoxButton from "components/BoxButton";
import StarScore from "components/StarScore";

function ReviewForm({ className, formik }) {
  return (
    <Wrapper className={className}>
      <h2 className="title">Write a Review</h2>
      <div className="reviewFromContainer">
        <form className="reviewFrom" onSubmit={formik.handleSubmit}>
            <label htmlFor="score">Score:</label>
          <StarScore
            className="star"
            value={formik.values.score}
            id="score"
            onChange={(c) => {
              console.log(c);
              formik.setFieldValue("score", c);
            }}
            onBlur={formik.handleBlur}
          />
            <label htmlFor="title">title</label>
          <Input
            type="text"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Input>
            <label htmlFor="reviews">reviews</label>
          <Input
            type="text"
            id="reviews"
            value={formik.values.reviews}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Input>
          <div className="ConnectColumnContainer">
            <div className="ConnectColumn">
                <div className="ConnectMessage">Connect with:</div>
              <BoxButton className="socialButton">
                <FaLinkedinIn />
              </BoxButton>
              <BoxButton className="socialButton">
                <FaTwitter />
              </BoxButton>
              <BoxButton className="socialButton">
                <FaFacebookF />
              </BoxButton>
              <span className="spanOR"> -or- </span>
            </div>
            <div className="ConnectColumn">
              <div className="ConnectColumnItem">
                  <label htmlFor="name">Use your name:</label>
                <Input
                  type="text"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
              </div>
              <div className="ConnectColumnItem">
                  <label htmlFor="email">Email:</label>
                <Input
                  type="text"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
              </div>
            </div>
          </div>
          {formik.errors.score && formik.touched.score && (
            <Box color="red" className="ErrorMessage">
              {formik.errors.score}
            </Box>
          )}
          {formik.errors.title && formik.touched.title && (
            <Box color="red" className="ErrorMessage">
              {formik.errors.title}
            </Box>
          )}
          {formik.errors.reviews && formik.touched.reviews && (
            <Box color="red" className="ErrorMessage">
              {formik.errors.reviews}
            </Box>
          )}
          {formik.errors.name && formik.touched.name && (
            <Box color="red" className="ErrorMessage">
              {formik.errors.name}
            </Box>
          )}
          {formik.errors.email && formik.touched.email && (
            <Box color="red" className="ErrorMessage">
              {formik.errors.email}
            </Box>
          )}
          <Button
            className="submitButton"
            type="submit"
            disabled={formik.isSubmitting}
            text="Post"
          />
          {/* <DisplayState {...formik} /> */}
        </form>
      </div>
    </Wrapper>
  );
}

export default ReviewForm;

const Wrapper = styled.div`
  & .title {
    padding: 56px 0px 22px;
    text-transform: capitalize;
  }
  & .reviewFromContainer {
  }
  & .reviewFrom {
    display: flex;
    flex-direction: column;

    & .star {
      font-size: 25px;
    }

    & label {
      margin-bottom: 5px;
    }

    & .ConnectColumnContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${down("sm")} {
        flex-direction: column;
        & .ConnectMessage {
          margin-bottom: 5px;
        }
      }
    }

    & .ConnectColumn {
      /* justify-content: center; */
      /* align-items: center; */
    }
    & .ConnectColumn:nth-child(1) {
      width: 273px;
      ${down("sm")} {
        width: 100%;
      }
    }
    & .ConnectColumn:nth-child(2) {
      display: flex;
      width: 100%;
    }
    & .ConnectColumnItem {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-right: 10px;
    }
    & .spanOR {
      margin: 0px 10px;
      width: 80px;
    }
    & .socialButton {
      margin-right: 5px;
    }
    & .submitButton {
      margin-top: 15px;
      width: 172px;
      align-self: flex-end;
    }

    & .ErrorMessage {
      margin-top: 15px;
    }
  }
`;

// const DisplayState = (props) => {
//   return (
//     <div>
//       <pre
//         style={{
//           backgroundColor: "#f6f8fa",
//           padding: ".5rem",
//           fontSize: "1rem",
//         }}
//       >
//          <strong>props </strong> = {JSON.stringify(props, null, 2)}
//       </pre>
//     </div>
//   );
// };
