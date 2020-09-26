import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { currDate } from "../../utils/helpers";
import { FaUser, FaTag, FaCalendar } from "react-icons/fa/";

const Meta = props => {
  const { author: authorName, tags, theme, lastEdit } = props;
  const prefix = props.prefix || currDate(); /* Intent: get date placeholder for viewing drafts. */

  //TODO: lastEdit

  return (
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

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;
          color: ${theme.color.neutral.gray.j};

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
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
        @from-width tablet {
          .meta {
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
        @media (hover: hover) {
          .meta {
            :global(a svg) {
              transition: all 0.5s ease-in-out;
              -webkit-transition: all 0.5s ease-in-out;
              -moz-transition: all 0.5s ease-in-out;
            }
            :global(a:hover svg) {
              transition: all 0.5s ease-in-out;
              -webkit-transition: all 0.5s ease-in-out;
              -moz-transition: all 0.5s ease-in-out;
              transform: scale(1.3);
              color: ${theme.color.brand.primary};
            }
          }
        }
      `}</style>
    </p>
  );
};

Meta.propTypes = {
  tags: PropTypes.array,
  theme: PropTypes.object.isRequired
};

export default Meta;
