import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import defaultProps from "./portraitVideoProps";
import {
  Link,
  Title,
  StyledWrapper,
  Iframe,
  Paragraph,
} from "./styled.pVideoCard";
import { boolean, text } from "@storybook/addon-knobs";
import baseHelper from "../../../helper/baseHelper";
import InlineDiv from "../../../inlineDiv";

const { getVideoIdId, getPropValue } = baseHelper;

const PortraitVideo = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const [url, setURL] = useState("jJJX1Yrp4_Y");
  const {
    media,
    style,
    content,
    updateProps,
    setData,
    isEditMode,
    links,
  } = newProps;

  useEffect(() => {
    const videoId = getVideoIdId(media.videoUrl);
    setURL(videoId);
  }, [props]);

  const linkTitle = getPropValue("text", "link1", links.link, "content");
  const linkUrl = getPropValue("text", "url1", links.url, "content");
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
    bottomSpace: getPropValue(
      "text",
      "bottomSpace",
      style.bottomSpace,
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
    radius: getPropValue("text", "radius", style.iframeRadius, "style"),
  };

  const paragraphStyle = {
    contentSpace: getPropValue(
      "text",
      "contentSpace",
      style.contentSpace,
      "style"
    ),
  };

  return (
    <StyledWrapper {...styledWrapperProps}>
      <Container className="mb-4 VideoCard">
        <Card className="w-100">
          <Iframe
            title="Theagles"
            className="iframe"
            rel="0"
            {...iframeProps}
            src={"https://www.youtube.com/embed/" + url + "?autoplay=0&rel=0"}
            frameBorder="0"
            allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
          {(!!title || !!bodyParagraph) && (
            <Card.Body>
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
            </Card.Body>
          )}
        </Card>
      </Container>
    </StyledWrapper>
  );
};
export default PortraitVideo;
