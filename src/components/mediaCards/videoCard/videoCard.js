import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import defaultProps from "./videoCardProps";
import {
  Link,
  StyledWrapper,
  Title,
  Iframe,
  StyledRow,
  Paragraph,
} from "./styled.videoCard";
import InlineDiv from "../../../inlineDiv";
import baseHelper from "../../../helper/baseHelper";

const { getVideoIdId, getPropValue } = baseHelper;

const VideoCard = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const [url, setURL] = useState("jJJX1Yrp4_Y");
  const {
    content,
    style,
    media,
    updateProps,
    setData,
    isEditMode,
    // links,
  } = newProps;

  useEffect(() => {
    const videoId = getVideoIdId(media.videoUrl);
    setURL(videoId);
  }, [props]);

  // const linkTitle = getPropValue("text", "link1", links.link, "content");
  // const linkUrl = getPropValue("text", "url1", links.url, "content");
  const title = getPropValue("text", "title", content.title, "content");
  const bodyParagraph = getPropValue(
    "text",
    "paragraph",
    content.paragraph,
    "content"
  );

  const titleProps = {
    titleColor: getPropValue("text", "titleColor", style.titleColor, "style"),
    titleFontSize: getPropValue(
      "text",
      "titleFontSize",
      style.titleFontSize,
      "style"
    ),
    titleFontWeight: getPropValue(
      "text",
      "titleFontWeight",
      style.titleFontWeight,
      "style"
    ),
    titleSpace: getPropValue("text", "titleSpace", style.titleSpace, "style"),
  };

  const columnPosition = {
    contentAlign: getPropValue(
      "text",
      "contentAlign",
      style.contentAlign,
      "style"
    ),
    columnPosition: getPropValue(
      "text",
      "columnPosition",
      style.columnPosition,
      "style"
    ),
  };

  const styledWrapperProps = {
    textFontSize: getPropValue(
      "text",
      "textFontSize",
      style.textFontSize,
      "style"
    ),
    textColor: getPropValue("text", "textColor", style.textColor, "style"),
  };

  const iframeProps = {
    iframeHeight: getPropValue(
      "text",
      "iframeHeight",
      style.iframeHeight,
      "style"
    ),
    iframeRadius: getPropValue(
      "text",
      "iframeRadius",
      style.iframeRadius,
      "style"
    ),
    iframeWidth: getPropValue(
      "text",
      "iframeWidth",
      style.iframeWidth,
      "style"
    ),
  };

  const paragraphStyle = {
    bottomSpace: getPropValue(
      "text",
      "bottomSpace",
      style.bottomSpace,
      "style"
    ),
  };

  return (
    <StyledWrapper {...styledWrapperProps}>
      <Container className="mb-4 VideoCard">
        <StyledRow {...columnPosition} className="row">
          <Col md="6" className="mb-4 mb-md-0">
            <Iframe
              id="placeYoutubeVideo"
              title="Theagles"
              className="iframe"
              rel="0"
              {...iframeProps}
              src={"https://www.youtube.com/embed/" + url + "?autoplay=0&rel=0"}
              frameBorder="0"
              allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></Iframe>
          </Col>
          <Col md="6" className={style.contentAlign !== "center" ? "pt-4" : ""}>
            {title && (
              <Title {...titleProps}>
                <InlineDiv
                  isEditMode={isEditMode}
                  keyProperty="title"
                  property="content"
                  setData={setData}
                  updateProps={updateProps}
                  value={title}
                />
              </Title>
            )}

            {bodyParagraph && (
              <Paragraph {...paragraphStyle}>
                <InlineDiv
                  isEditMode={isEditMode}
                  keyProperty="paragraph"
                  property="content"
                  setData={setData}
                  updateProps={updateProps}
                  value={bodyParagraph}
                />
              </Paragraph>
            )}
            {/* {linkTitle && (
              <Link className="global-button" href={linkUrl} {...buttonLink}>
                {linkTitle}
              </Link>
            )} */}
          </Col>
        </StyledRow>
      </Container>
    </StyledWrapper>
  );
};
export default VideoCard;
