import React from "react";

const BlockQuote = ({ text, author, position, style }) => (
  <div>
    <p
      className="blockquote-fancy"
      style={{
        ...style
      }}
    >
      {text}
    </p>
    <p className="text-right blockquote-fancy-cite">
      - Marierose Talla (she/her),
    </p>
    <p className="text-right blockquote-fancy-title">
      Global Learning Coordinator | York International
    </p>
  </div>
);

export default BlockQuote;
