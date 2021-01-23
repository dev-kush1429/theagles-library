import React from "react";
import Carousel from "react-bootstrap/Carousel";
import defaultProps from "./basicSliderProps";
import InlineDiv from "../../../inlineDiv";
import {
  SlideCaption,
  SlideTitle,
  SlideImage,
  InnerContainer,
  SliderWrapper,
  Link,
} from "./styled.sliders";

import baseHelper from "../../../helper/baseHelper";

const { getPropValue } = baseHelper;

const BasicSlider = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const {
    style,
    content,
    media,
    updateProps,
    setData,
    isEditMode,
    links,
  } = newProps;

  const slideOneImageProps = {
    src: getPropValue("text", "oneImage", media.oneImage, "media"),
    alt: getPropValue("text", "altOne", media.altOne, "media"),
  };

  const slideOneBody = getPropValue(
    "text",
    "slideOne",
    content.slideOne,
    "content"
  );
  const slideOneSubTitle = getPropValue(
    "text",
    "slideOneSubTitle",
    content.slideOneSubTitle,
    "content"
  );
  const slideOneUrl = getPropValue(
    "text",
    "slideOneUrl",
    links.slideOneUrl,
    "content"
  );
  const slideOneLinkTitle = getPropValue(
    "text",
    "slideOneLinkTitle",
    links.slideOneLinkTitle,
    "content"
  );

  const slideTwoImageProps = {
    src: getPropValue("text", "twoImage", media.twoImage, "media"),
    alt: getPropValue("text", "altTwo", media.altTwo, "media"),
  };

  const slideTwoBody = getPropValue(
    "text",
    "slideTwo",
    content.slideTwo,
    "content"
  );
  const slideTwoSubTitle = getPropValue(
    "text",
    "slideTwoSubTitle",
    content.slideTwoSubTitle,
    "content"
  );
  const slideTwoUrl = getPropValue(
    "text",
    "slideTwoUrl",
    links.slideTwoUrl,
    "content"
  );
  const slideTwoLinkTitle = getPropValue(
    "text",
    "slideTwoLinkTitle",
    links.slideTwoLinkTitle,
    "content"
  );

  const slideThreeImageProps = {
    src: getPropValue("text", "threeImage", media.threeImage, "media"),
    alt: getPropValue("text", "altThree", media.altThree, "media"),
  };

  const slideThreeBody = getPropValue(
    "text",
    "slideThree",
    content.slideThree,
    "content"
  );
  const slideThreeSubTitle = getPropValue(
    "text",
    "slideThreeSubTitle",
    content.slideThreeSubTitle,
    "content"
  );
  const slideThreeUrl = getPropValue(
    "text",
    "slideThreeUrl",
    links.slideThreeUrl,
    "content"
  );
  const slideThreeLinkTitle = getPropValue(
    "text",
    "slideThreeLinkTitle",
    links.slideThreeLinkTitle,
    "content"
  );

  const slideCaptionProps = {
    maxWidth: getPropValue("text", "maxWidth", style.contentWidth, "style"),
    contentPosition: getPropValue(
      "text",
      "contentPosition",
      style.contentPosition,
      "style"
    ),
  };

  const slideTitleProps = {
    titleFontSize: getPropValue(
      "text",
      "titleFontSize",
      style.titleFontSize,
      "style"
    ),
    titleColor: getPropValue("text", "titleColor", style.titleColor, "style"),
    textTransform: getPropValue(
      "text",
      "textTransform",
      style.textTransform,
      "style"
    ),
  };

  const contentPosition = {
    contentPosition: getPropValue(
      "text",
      "contentPosition",
      style.contentPosition,
      "style"
    ),
  };

  return (
    <SliderWrapper>
      <Carousel pause="hover">
        <Carousel.Item>
          <SlideImage className="d-block w-100" {...slideOneImageProps} />
          <InnerContainer>
            <SlideCaption {...slideCaptionProps}>
              {slideOneBody && (
                <SlideTitle {...slideTitleProps} className="mb-3">
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="slideOne"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={slideOneBody}
                  />
                </SlideTitle>
              )}
              {slideOneSubTitle && (
                <div className="content mb-1 mb-md-4">
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="slideOneSubTitle"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={slideOneSubTitle}
                  />
                </div>
              )}
              {/* <Link className="global-link" href={slideOneUrl} {...linkProps}>
        
                {slideOneLinkTitle}
              </Link> */}
            </SlideCaption>
          </InnerContainer>
        </Carousel.Item>
        <Carousel.Item>
          <SlideImage className="d-block w-100" {...slideTwoImageProps} />
          <InnerContainer>
            <SlideCaption {...slideCaptionProps}>
              {slideTwoBody && (
                <SlideTitle {...slideTitleProps} className="mb-3">
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="slideTwo"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={slideTwoBody}
                  />
                </SlideTitle>
              )}
              {slideTwoSubTitle && (
                <div className="content mb-1 mb-md-4">
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="slideTwoSubTitle"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={slideTwoSubTitle}
                  />
                </div>
              )}
              {/* <Link className="global-link" {...linkProps} href={slideTwoUrl}>
         
                {slideTwoLinkTitle}
              </Link> */}
            </SlideCaption>
          </InnerContainer>
        </Carousel.Item>
        <Carousel.Item>
          <SlideImage className="d-block w-100" {...slideThreeImageProps} />
          <InnerContainer>
            <SlideCaption {...slideCaptionProps}>
              {slideThreeBody && (
                <SlideTitle {...slideTitleProps} className="mb-3">
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="slideThree"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={slideThreeBody}
                  />
                </SlideTitle>
              )}
              {slideThreeSubTitle && (
                <div className="content mb-1 mb-md-4">
                  <InlineDiv
                    isEditMode={isEditMode}
                    keyProperty="slideThreeSubTitle"
                    property="content"
                    setData={setData}
                    updateProps={updateProps}
                    value={slideThreeSubTitle}
                  />
                </div>
              )}
              {/* <Link className="global-link" {...linkProps} href={slideThreeUrl}>
     
                {slideThreeLinkTitle}
              </Link> */}
            </SlideCaption>
          </InnerContainer>
        </Carousel.Item>
      </Carousel>
    </SliderWrapper>
  );
};
export default BasicSlider;
