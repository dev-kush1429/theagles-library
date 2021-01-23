import React from "react";
import {
  Section,
  StyledLink,
  Title,
  StyledContainer,
  Paragraph,
} from "../styled.banners";
import { text, boolean } from "@storybook/addon-knobs";
import defaultProps from "./basicBannerProps";
import baseHelper from "../../../helper/baseHelper";

import InlineDiv from "../../../inlineDiv";

const { getPropValue } = baseHelper;

const BasicBanner = (props) => {
  const newProps = { ...defaultProps.props, ...props };
  const {
    style,
    body,
    content,
    media,
    links,
    updateProps,
    setData,
    isEditMode,
  } = newProps;

  const sectionProps = {
    background: getPropValue("text", "background", media.background, "media"),
    contentColor: getPropValue(
      "text",
      "contentColor",
      style.contentColor,
      "style"
    ),
    contentFontSize: getPropValue(
      "text",
      "contentFontSize",
      style.contentFontSize,
      "style"
    ),
  };

  const titleProps = {
    headingFontSize: getPropValue(
      "text",
      "headingFontSize",
      style.headingFontSize,
      "style"
    ),
    headingColor: getPropValue(
      "text",
      "headingColor",
      style.headingColor,
      "style"
    ),
    bottomSpace: getPropValue(
      "text",
      "bottomSpace",
      style.bottomSpace,
      "style"
    ),
  };

  const containerProps = {
    maxWidth: getPropValue("text", "maxWidth", style.containerWidth, "style"),
  };

  const title = getPropValue("text", "title", content.title, "content");
  const bannerContent = getPropValue(
    "text",
    "content",
    content.content,
    "content"
  );
  const linkUrl = getPropValue("text", "linkUrl", links.linkUrl, "content");
  const linkTitle = getPropValue(
    "text",
    "linkTitle",
    links.linkTitle,
    "content"
  );

  const paragraphStyle = {
    contentSpace: getPropValue(
      "text",
      "contentSpace",
      style.contentSpace,
      "style"
    ),
  };
  return (
    <Section {...sectionProps} className="position-relative mb-4 BasicBanner">
      <StyledContainer {...containerProps} className="container">
        <div>
          {title && (
            <Title {...titleProps} className="text-center">
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
          {bannerContent && (
            <Paragraph {...paragraphStyle}>
              <InlineDiv
                isEditMode={isEditMode}
                keyProperty="content"
                property="content"
                setData={setData}
                updateProps={updateProps}
                value={bannerContent}
              />
            </Paragraph>
          )}
          {/* <StyledLink {...styledLinkProps} href={linkUrl}>
            {linkTitle}
          </StyledLink> */}
        </div>
      </StyledContainer>
    </Section>
  );
};

export default BasicBanner;
