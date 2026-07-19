import React from "react";
import PropTypes from "prop-types";

const Card = ({
  title,
  children,
  image,
  footer,
  className = "",
  onClick,
  style = {},
  hoverable = true,
  shadow = true,
}) => {
  const baseStyle = {
    borderRadius: 8,
    background: "#fff",
    overflow: "hidden",
    boxShadow: shadow
      ? "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
      : "none",
    transition: hoverable
      ? "transform 0.12s ease, box-shadow 0.12s ease"
      : undefined,
    cursor: onClick ? "pointer" : "default",
    display: "flex",
    flexDirection: "column",
    ...style,
  };

  const handleKey = (e) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) onClick(e);
  };

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKey}
      onClick={onClick}
      className={className}
      style={baseStyle}
    >
      {image && (
        <div style={{ width: "100%", display: "block" }}>
          {typeof image === "string" ? (
            <img
              src={image}
              alt={title || "card-image"}
              style={{ width: "100%", display: "block" }}
            />
          ) : (
            image
          )}
        </div>
      )}

      {(title || children) && (
        <div style={{ padding: 12, flex: 1 }}>
          {title && (
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: children ? 8 : 0,
              }}
            >
              {title}
            </div>
          )}
          {children}
        </div>
      )}

      {footer && (
        <div style={{ borderTop: "1px solid #eee", padding: 10 }}>{footer}</div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  hoverable: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Card;
