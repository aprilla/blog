import { FaArrowRight } from "react-icons/fa/";
import { FaCalendar } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import Picture from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Teaser = props => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        tags,
        author,
        cover: {
          children: [{ fluid }]
        }
      }
    },
    index
  } = props;

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            <Picture fluid={fluid} critical={index == 0} />
          </div>
          <h1>
            {title} <FaArrowRight className="arrow" />
          </h1>
          <p className="meta">
            <span>
              {prefix}
              {tags && tags.length > 0 && <span>&nbsp;&bull;&nbsp;</span>}
            </span>
            {tags &&
              tags.map(tag => (
                <span className="meta--commas" key={tag}>
                  {tag}
                </span>
              ))}
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.link) {
          width: 100%;
          color: ${theme.text.color.primary};
        }

        li {
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
          margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};
          padding: ${theme.space.inset.s};
          position: relative;
          transition: all ${theme.time.duration.default};
          background-color: #fff;

          :global(.gatsby-image-outer-wrapper) {
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
          }

          &::after {
            border-top: 1px solid ${theme.color.brand.primary};
            content: "";
            height: 0;
            position: absolute;
            bottom: ${`calc(${theme.space.default} * -2.5)`};
            left: 50%;
            transform: translateX(-50%);
            transition: all ${theme.time.duration.default};
            width: 50%;
          }

          &:last-child {
            margin-bottom: 10px;
          }
        }

        h1 {
          padding: ${theme.space.m} ${theme.space.s} 0;
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;
          color: ${theme.color.brand.primaryDark};
          :global(.arrow) {
            display: none;
            position: relative;
            top: 7px;
          }
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 1em;
          padding: ${theme.space.m} ${theme.space.s};
          background: transparent;
          color: ${theme.color.neutral.gray.f};

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          > span {
            align-items: center;
            display: flex;
            text-transform: capitalize;
            margin: ${theme.space.xs} 5px ${theme.space.xs} 0;
            span {
              margin-left: 5px;
            }
            &.meta--commas {
              &:after {
                content: ",";
              }
              margin-right: 5px;
              &:last-of-type:after {
                display: none;
              }
            }
          }
        }

        p {
          line-height: 1.5;
          padding: 0 ${theme.space.s};
          text-remove-gap: both;
          font-size: 1.2em;
        }

        @from-width tablet {
          li {
            margin: ${`calc(${theme.space.default} * 3) 0 calc(${theme.space.default} * 4)`};
            padding: ${theme.space.default};

            &::after {
              bottom: ${`calc(${theme.space.default} * -2)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -1.75)`};
              }
            }
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }
        @below desktop {
          li {
            border: 1px solid ${theme.line.color};
            box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
            margin-top: 20px;
            margin-bottom: 20px;

            &:first-child {
              margin-top: 0;
            }

            &::after {
              border-top: 0px;
            }
          }
        }
        @from-width desktop {
          li {
            margin: ${`calc(${theme.space.default} * 4) 0 calc(${theme.space.default} * 5)`};
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -2.75)`};
              }
            }
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }
          h1 {
            font-size: 2.5em;
            padding: ${`calc(${theme.space.default} * 1.2) calc(${theme.space.default} * 2) 0`};
          }
          .meta {
            padding: ${`calc(${theme.space.default} * 1.5) calc(${theme.space.default} * 2)
              calc(${theme.space.default} * 0.5)`};
          }
          p {
            padding: ${`0 calc(${theme.space.default} * 2)`};
          }
          li {
            &:hover {
              box-shadow: 0 5px 16px 3px rgba(0, 0, 0, 0.1);

              :global(.gatsby-image-wrapper) {
                transform: scale(1);
              }
              h1 {
                color: ${theme.color.brand.primary};
              }
              :global(.arrow) {
                opacity: 1;
                stroke: ${theme.color.special.attention};
                transform: translateX(0);
              }
            }
            :global(.gatsby-image-wrapper) {
              transition: all ${theme.time.duration.default};
            }
            :global(.arrow) {
              display: inline-block;
              fill: ${theme.color.special.attention};
              stroke: ${theme.color.special.attention};
              stroke-width: 40;
              stroke-linecap: round;
              opacity: 0;
              transition: all 0.5s;
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Teaser.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Teaser;
